import { getNetworkConfig, SupportedNetworks } from '../../../config';

const Fortmatic = require('fortmatic');

let fortmatic: any;

export function getFortmaticProvider(network: SupportedNetworks) {
  const networkConfig = getNetworkConfig(network);
  fortmatic = new Fortmatic(networkConfig.fortmaticKey, network);

  return fortmatic.getProvider();
}

export function logoutFortmatic() {
  if (fortmatic && fortmatic.user) {
    fortmatic.user.logout();
  }
}
