import { provider as Provider } from 'web3-core';
import Web3 from 'web3';

declare global {
  // @ts-ignore
  interface WindowWithEthereum extends Window {
    ethereum?: Provider;
    web3?: Provider;
  }
}

const isCurrentProviderOnWindow = () =>
  Web3.givenProvider &&
  typeof Web3.givenProvider === 'object' &&
  !!Object.keys(Web3.givenProvider).length;

const isEthereumObjectOnWindow = (global: WindowWithEthereum) =>
  global.ethereum && typeof global.ethereum === 'object' && !!Object.keys(global.ethereum).length;

export const getWeb3ProviderFromBrowser = (): Provider | undefined => {
  const global = window as WindowWithEthereum;
  return isEthereumObjectOnWindow(global)
    ? global.ethereum
    : isCurrentProviderOnWindow()
    ? Web3.givenProvider
    : global.web3
    ? global.web3
    : undefined;
};
