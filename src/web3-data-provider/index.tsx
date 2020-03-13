import React, { ReactNode, useContext } from 'react';
import { Web3ContextData } from 'helpers/web3-helpers';
import { useWeb3ProviderHook } from './hooks/web3-provider-hook';
import { useIntl } from 'react-intl';

import { getSupportedNetworks } from '../config';
import Preloader from 'components/Preloader';
import ErrorPage from 'components/ErrorPage';
import UnlockWallet from '../modules/unlock-wallet/screens/UnlockWallet';

import messages from './messages';

interface Web3ProviderProps {
  children: ReactNode;
}

export const Web3Context = React.createContext({} as Web3ContextData);

export function Web3Provider({ children }: Web3ProviderProps) {
  const intl = useIntl();
  const supportedNetworks = getSupportedNetworks();

  const defaultNetwork = 'mainnet';
  const [
    { loadingWeb3State, web3Context },
    { initWeb3Context, dropWeb3Context },
  ] = useWeb3ProviderHook(defaultNetwork);

  if (loadingWeb3State) {
    return <Preloader />;
  }

  const { web3, wallet, chain } = web3Context;

  if (!wallet || !web3) {
    return <UnlockWallet unlockExternalWallet={initWeb3Context} defaultNetwork={defaultNetwork} />;
  }
  if (!chain || chain === 'unsupported' || defaultNetwork !== chain) {
    return (
      <ErrorPage
        title={intl.formatMessage(messages.errorTitle)}
        description={intl.formatMessage(messages.errorDescription, {
          networks: supportedNetworks.join(', '),
        })}
        buttonType="reload"
        image={true}
      />
    );
  }

  return (
    <Web3Context.Provider value={{ web3, wallet, chain, dropWeb3Context }}>
      {children}
    </Web3Context.Provider>
  );
}

export const useWeb3Context = () => useContext(Web3Context);
