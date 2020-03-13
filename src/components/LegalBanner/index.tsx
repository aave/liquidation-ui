import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';

import { rgba, useThemeContext } from 'libs/theme-provider';
import Link from 'components/Link';
import DefaultButton from 'components/DefaultButton';

import messages from './messages';
import staticStyles from './style';

interface LegalBannerProps {
  inside?: boolean;
}

export default function LegalBanner({ inside }: LegalBannerProps) {
  const intl = useIntl();
  const { currentTheme, isDarkMode } = useThemeContext();
  const [visible, setVisible] = useState(!localStorage.getItem('cookiesAccepted'));

  const closeClick = () => {
    setVisible(false);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  const backgroundColor = rgba(`${currentTheme.primary.rgb}, 0.9`);

  if (!visible) {
    return null;
  }
  return (
    <div
      className={classNames('LegalBanner', {
        LegalBannerInside: inside,
        LegalBannerDark: isDarkMode,
      })}
    >
      <div className="LegalBanner__wrapper">
        <div className="LegalBanner__description-inner">
          <p>{intl.formatMessage(messages.description)}</p>
        </div>

        <div className="LegalBanner__buttons-inner">
          <div className="LegalBanner__buttons-links">
            <Link
              to="https://aave.com/privacy-policy"
              inNewWindow={true}
              absolute={true}
              className="ButtonLink"
            >
              <DefaultButton
                title={intl.formatMessage(messages.privacyPolicy)}
                whiteFill={true}
                buttonSize="small"
              />
            </Link>
            <Link
              to="https://aave.com/cookie-policy"
              inNewWindow={true}
              absolute={true}
              className="ButtonLink"
            >
              <DefaultButton
                title={intl.formatMessage(messages.cookiePolicy)}
                whiteFill={true}
                buttonSize="small"
              />
            </Link>
          </div>

          <DefaultButton
            title={intl.formatMessage(messages.accept)}
            whiteFill={true}
            buttonSize="small"
            onClick={closeClick}
          />
        </div>
      </div>

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true}>{`
        .LegalBanner {
          background: ${backgroundColor};

          &__description-inner {
            p {
              color: ${currentTheme.whiteText.hex};
            }
          }
        }
      `}</style>
    </div>
  );
}
