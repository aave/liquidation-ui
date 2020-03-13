import Web3 from 'web3';
import { provider as Provider } from 'web3-core';
import { SupportedNetworks } from '../config';

type ExtendedSupportedNetworks = SupportedNetworks | 'unsupported';

export function mapChainIdToName(id: number): ExtendedSupportedNetworks {
  switch (id) {
    case 1:
      return 'mainnet';
    case 3:
      return 'ropsten';
    case 42:
      return 'kovan';
    default:
      return 'unsupported';
  }
}

export function mapNameToChainID(chain?: SupportedNetworks): number {
  return chain === 'mainnet' ? 1 : chain === 'kovan' ? 42 : chain === 'ropsten' ? 3 : 0;
}

export const isProviderEnableNeeded = (provider: Provider): boolean =>
  typeof (provider as any).enable === 'function';

export const getWeb3Accounts = async (web3: Web3): Promise<string[]> =>
  await web3.eth.getAccounts();

export const getMainEthereumAddress = async (web3: Web3): Promise<string | undefined> => {
  const accounts = await getWeb3Accounts(web3);
  return accounts.length ? accounts[0] : undefined;
};

export interface InternalWeb3ContextData {
  web3: Web3;
  wallet?: string;
  chain: ExtendedSupportedNetworks;
}
export interface Web3ContextData extends InternalWeb3ContextData {
  web3: Web3;
  wallet: string;
  chain: SupportedNetworks;
  dropWeb3Context: () => void;
}

export const getWeb3State = async (provider: Provider): Promise<InternalWeb3ContextData> => {
  const web3 = new Web3(provider);

  // for modern DAPP browsers with privacy mode enabled
  if (isProviderEnableNeeded(provider)) {
    try {
      await (provider as any).enable();
    } catch (e) {}
  }

  const wallet = await getMainEthereumAddress(web3);
  const chain = mapChainIdToName(await web3.eth.net.getId());
  return { web3, wallet, chain };
};

export const listenForWalletLockingStateChange = (
  initialWallet: string,
  web3: Web3,
  onAddressChange: (wallet?: string) => void
): number => {
  let lastSeenWallet: string | undefined = initialWallet;
  return setInterval(async () => {
    const currentWallet = await getMainEthereumAddress(web3);
    if (lastSeenWallet !== currentWallet) {
      lastSeenWallet = currentWallet;
      onAddressChange(currentWallet);
    }
  }, 1000) as any;
};

export const isWeb3ContextInitialized = (web3Context: InternalWeb3ContextData) =>
  !!web3Context.web3;
