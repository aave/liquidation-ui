import React from 'react';
import { useIntl } from 'react-intl';

import { useThemeContext } from 'libs/theme-provider';
import WarningArea from '../../../../../components/WarningArea';
import Link from '../../../../../components/Link';

import messages from './messages';
import staticStyles from './style';

export default function NoBrowserWallet() {
  const intl = useIntl();
  const { currentTheme } = useThemeContext();

  return (
    <WarningArea
      className="NoBrowserWallet__wrapper"
      title={intl.formatMessage(messages.title)}
    >
      <div className="NoBrowserWallet">
        {intl.formatMessage(messages.description, {
          metaMask: (
            <Link
              title="MetaMask"
              to="https://metamask.io/"
              inNewWindow={true}
              absolute={true}
              className="NoBrowserWallet__link"
            />
          ),
          dapper: (
            <Link
              title="Dapper"
              to="https://www.meetdapper.com/"
              inNewWindow={true}
              absolute={true}
              className="NoBrowserWallet__link"
            />
          ),
          trustWallet: (
            <Link
              title="Trustwallet"
              to="https://trustwallet.com"
              inNewWindow={true}
              absolute={true}
              className="NoBrowserWallet__link"
            />
          ),
        })}
      </div>

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true} global={true}>{`
        .NoBrowserWallet .NoBrowserWallet__link {
          color: ${currentTheme.secondary.hex};
          &:hover {
            color: ${currentTheme.primary.hex};
          }
        }
      `}</style>
    </WarningArea>
  );
}
