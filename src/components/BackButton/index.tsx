import React from 'react';
import { useHistory } from 'react-router';
import { useIntl } from 'react-intl';
import classNames from 'classnames';

import { useThemeContext } from 'libs/theme-provider';

import messages from './messages';
import staticStyles from './style';

import backIcon from './images/back.svg';
import backIconDark from './images/backDark.svg';
import backMobile from './images/backMobile.svg';
import backMobileDark from './images/backMobileDark.svg';

interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className }: BackButtonProps) {
  const intl = useIntl();
  const history = useHistory();
  const { currentTheme, isDarkMode, sm } = useThemeContext();

  const path = history.location.pathname.split('/');
  if ((path.length <= 2 || path[1] === 'dashboard') && path[1] !== 'faq') {
    return null;
  }

  return (
    <button className={classNames('BackButton', className)} onClick={history.goBack} type="button">
      <img
        src={sm ? (isDarkMode ? backMobileDark : backMobile) : isDarkMode ? backIconDark : backIcon}
        alt="Aave"
      />
      <p>{intl.formatMessage(messages.back)}</p>

      <style jsx={true}>{staticStyles}</style>
      <style jsx={true} global={true}>{`
        .BackButton {
          &:hover {
            p {
              color: ${currentTheme.secondary.hex};
            }
          }
          p {
            color: ${currentTheme.gray.hex};
          }
        }
      `}</style>
    </button>
  );
}
