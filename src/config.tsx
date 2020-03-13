import { mapNameToChainID } from 'helpers/web3-helpers';

export type SupportedNetworks = 'kovan' | 'ropsten' | 'mainnet' | string;

type NetworkConfig = {
  mutationsServerUrl: string;
  queryServerUrl: string;
  wsServerUrl: string;
  walletBalanceProvider: string;
  jsonRPCUrl: string;
  fortmaticKey: string;
};

type Networks = {
  [name: string]: NetworkConfig;
};

function getParamOrFail(name: string, network?: string): string {
  const param = process.env[`${name.toUpperCase()}${network ? `_${network.toUpperCase()}` : ''}`];
  if (!param) {
    throw new Error(`${name} is not specified for a ${network}, please contact support`);
  }
  return param;
}

export function getDefaultNetworkName() {
  return process.env.REACT_APP_DEFAULT_ETHEREUM_NETWORK as SupportedNetworks;
}

export function getNetworkConfig(network: SupportedNetworks): NetworkConfig {
  return {
    mutationsServerUrl: getParamOrFail('REACT_APP_MUTATIONS_API_URL', network),
    queryServerUrl: getParamOrFail('REACT_APP_QUERY_API_URL', network),
    wsServerUrl: getParamOrFail('REACT_APP_WS_API_URL', network),
    walletBalanceProvider: getParamOrFail('REACT_APP_WALLET_BALANCE_PROVIDER_ADDRESS', network),
    jsonRPCUrl: getParamOrFail('REACT_APP_ETHEREUM_JSONRPC_URL', network),
    fortmaticKey: getParamOrFail('REACT_APP_FORTMATIC_PRODUCT_KEY', network),
  };
}

export function getSupportedNetworks(): SupportedNetworks[] {
  return getParamOrFail('REACT_APP_SUPPORTED_ETHEREUM_NETWORKS').split(',') as SupportedNetworks[];
}

export function getSupportedNetworksIds(): number[] {
  return getSupportedNetworks().map(name => mapNameToChainID(name));
}
