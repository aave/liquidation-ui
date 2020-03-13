import React, { ReactNode, useContext } from 'react';
import { Web3ContextData } from '../helpers/web3-helpers';
import { useWeb3ProviderHook } from './hooks/web3-provider-hook';

import UnlockWallet from '../modules/unlock-wallet/screens/UnlockWallet';

interface Web3ProviderProps {
  children: ReactNode;
}

export const Web3Context = React.createContext({} as Web3ContextData);

export function Web3Provider({ children }: Web3ProviderProps) {
  const defaultNetwork = 'mainnet';
  const [
    { loadingWeb3State, web3Context },
    { initWeb3Context, dropWeb3Context },
  ] = useWeb3ProviderHook(defaultNetwork);

  if (loadingWeb3State) {
    return <h1>LOADING</h1>;
  }

  const { web3, wallet, chain } = web3Context;

  if (!wallet || !web3) {
    return <UnlockWallet unlockExternalWallet={initWeb3Context} defaultNetwork={defaultNetwork} />;
  }
  if (!chain || chain === 'unsupported' || defaultNetwork !== chain) {
    return (
      <h1>Please switch to mainnet</h1>
    );
  }

  return (
    <Web3Context.Provider value={{ web3, wallet, chain, dropWeb3Context }}>
      {children}
    </Web3Context.Provider>
  );
}

export const useWeb3Context = () => useContext(Web3Context);
