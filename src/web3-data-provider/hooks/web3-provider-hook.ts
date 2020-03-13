import { useEffect, useState } from 'react';
import {
  InternalWeb3ContextData,
  getWeb3State,
  isWeb3ContextInitialized,
  listenForWalletLockingStateChange,
} from 'helpers/web3-helpers';
import { AvailableWeb3Provider, getProviderByName, logoutFromProvider } from '../web3-providers';

type web3ProviderHookOutput = [
  { loadingWeb3State: boolean; web3Context: InternalWeb3ContextData },
  {
    initWeb3Context: (
      providerName: AvailableWeb3Provider,
      network: 'mainnet'
    ) => Promise<void>;
    dropWeb3Context: () => void;
  }
];

export function useWeb3ProviderHook(network = 'mainnet'): web3ProviderHookOutput {
  const [loadingWeb3State, setLoadingWeb3State] = useState(true);
  const [walletListenerRef, setWalletListenerRef] = useState<null | number>(null);
  const [web3Context, setWeb3Context] = useState({} as InternalWeb3ContextData);

  const handleWalletChange = async (wallet?: string) => {
    setWeb3Context(currentWeb3Context => ({ ...currentWeb3Context, wallet }));
    if (!wallet) {
      setWalletListenerRef(ref => {
        if (ref) {
          clearInterval(ref);
        }
        return null;
      });
    }
  };

  const initWeb3Context = async (
    providerName: AvailableWeb3Provider,
    network: string
  ) => {
    setLoadingWeb3State(true);
    const provider = getProviderByName(providerName, network);
    if (provider) {
      const currentContext = await getWeb3State(provider);
      setWeb3Context(currentContext);
      const { web3, wallet } = currentContext;
      if (web3 && wallet) {
        const listenerRef = listenForWalletLockingStateChange(wallet, web3, handleWalletChange);
        setWalletListenerRef(listenerRef);
        sessionStorage.setItem('currentProvider', providerName);
      }
    }
    setLoadingWeb3State(false);
  };

  useEffect(() => {
    const currentProviderName = sessionStorage.getItem('currentProvider');
    if (!isWeb3ContextInitialized(web3Context) && currentProviderName) {
      if (document.readyState !== 'complete') {
        window.addEventListener('load', async () => {
          await initWeb3Context(currentProviderName as AvailableWeb3Provider, network);
        });
      } else {
        initWeb3Context(currentProviderName as AvailableWeb3Provider, network);
      }
    } else {
      setLoadingWeb3State(false);
    }
    return () => {
      if (walletListenerRef) {
        clearInterval(walletListenerRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [network]);

  const dropWeb3Context = () => {
    setWeb3Context(cont => ({} as InternalWeb3ContextData));
    const currentProvider = sessionStorage.getItem('currentProvider') as
      | AvailableWeb3Provider
      | undefined;
    if (currentProvider) {
      sessionStorage.removeItem('currentProvider');
      logoutFromProvider(currentProvider);
    }
    setWalletListenerRef(ref => {
      if (ref) {
        clearInterval(ref);
      }
      return null;
    });
  };

  return [
    { loadingWeb3State, web3Context },
    { initWeb3Context, dropWeb3Context },
  ];
}
