import WalletLink from 'walletlink';
import { mapNameToChainID } from 'helpers/web3-helpers';
import { getNetworkConfig, SupportedNetworks } from '../../../config';

const APP_NAME = 'Aave';
const APP_LOGO_URL = 'https://testnet.aave.com/favicon.ico';

export function getWalletLinkProvider(network: SupportedNetworks) {
  // Initialize WalletLink
  const walletLink = new WalletLink({
    appName: APP_NAME,
    appLogoUrl: APP_LOGO_URL,
  });
  const networkConfig = getNetworkConfig(network);
  const nodeUrl = networkConfig.jsonRPCUrl;
  const networkId = mapNameToChainID(network);
  if (!nodeUrl || !networkId) {
    throw new Error(`Can't configure wallet-link, nodeUrl or network name is missed`);
  }

  const provider = walletLink.makeWeb3Provider(nodeUrl, networkId);
  // FIX BUG: Walletlink bug with web3
  // https://github.com/walletlink/walletlink/issues/19#issuecomment-588162675
  // @ts-ignore
  provider.on = null;
  return provider;
}
