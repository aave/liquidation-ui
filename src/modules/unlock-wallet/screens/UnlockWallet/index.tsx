import React from 'react';
import classNames from 'classnames';
import {useIntl} from 'react-intl';
import { AvailableWeb3Provider } from '../../../../web3-data-provider/web3-providers';
import { getWeb3ProviderFromBrowser } from '../../../../web3-data-provider/web3-providers/browser-wallet';

import UnlockWalletCard from '../../components/UnlockWalletCard';
import NoBrowserWallet from '../../components/NoBrowserWallet';

import messages from './messages';
import staticStyles from './style';

import browserWalletsIcon from './images/browserWallets.png';
import coinbaseIcon from './images/coinbaseIcon.svg';
import formaticIcon from './images/formaticIcon.svg';

interface UnlockWalletProps {
  unlockExternalWallet: (providerName: AvailableWeb3Provider, network: 'mainnet') => void;
  defaultNetwork: 'mainnet';
}

export default function UnlockWallet({ unlockExternalWallet, defaultNetwork }: UnlockWalletProps) {
  const browserWalletProvider = getWeb3ProviderFromBrowser();
  const intl = useIntl();

  return (
    <div
      className={classNames('UnlockWallet')}
    >
      <div className="UnlockWallet__inner">
        <div className="UnlockWallet__caption-inner">
        </div>

        <div className="UnlockWallet__content">
          <UnlockWalletCard
            title={intl.formatMessage(messages.titleBrowserWallet)}
            description={
              browserWalletProvider
                ? intl.formatMessage(messages.firstDescriptionBrowserWallet)
                : intl.formatMessage(messages.secondDescriptionBrowserWallet)
            }
            unlockWallet={() => unlockExternalWallet('browser', defaultNetwork)}
            icon={browserWalletsIcon}
            isActive={!!browserWalletProvider}
          />
          <UnlockWalletCard
            title={intl.formatMessage(messages.titleWalletLink)}
            description={intl.formatMessage(messages.descriptionWalletLink)}
            unlockWallet={() => unlockExternalWallet('wallet-link', defaultNetwork)}
            icon={coinbaseIcon}
            isActive={true}
          />
          <UnlockWalletCard
            title="Fortmatic"
            description={intl.formatMessage(messages.descriptionFortmatic)}
            unlockWallet={() => unlockExternalWallet('formatic', defaultNetwork)}
            icon={formaticIcon}
            isActive={true}
          />
        </div>

        <div className="UnlockWallet__warning">{!browserWalletProvider && <NoBrowserWallet />}</div>

      </div>

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
    </div>
  );
}
