import { getWeb3ProviderFromBrowser } from './browser-wallet';
import { getWalletLinkProvider } from './wallet-link';
import { getFortmaticProvider, logoutFortmatic } from './fortmatic';

export type AvailableWeb3Provider = 'browser' | 'formatic' | 'wallet-link';

export const getProviderByName = (name: AvailableWeb3Provider, network: string) => {
  switch (name) {
    case 'browser':
      return getWeb3ProviderFromBrowser();
    case 'wallet-link':
      return getWalletLinkProvider(network);
    case 'formatic':
      return getFortmaticProvider(network);
  }
};

export const logoutFromProvider = (name: AvailableWeb3Provider) => {
  switch (name) {
    case 'formatic':
      return logoutFortmatic();
    case 'wallet-link':
    case 'browser':
      return;
  }
};
