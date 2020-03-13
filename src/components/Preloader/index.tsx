import React from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';

import { useThemeContext } from 'libs/theme-provider';

import messages from './messages';
import staticStyles from './style';

interface PreloaderProps {
  withText?: boolean;
  darkElementBackground?: boolean;
}

export default function Preloader({ withText, darkElementBackground }: PreloaderProps) {
  const intl = useIntl();
  const { currentTheme, isDarkMode } = useThemeContext();

  return (
    <div
      className={classNames('Preloader', {
        PreloaderDark: isDarkMode,
        PreloaderDarkElement: isDarkMode && darkElementBackground,
      })}
    >
      {withText && (
        <div className="Preloader__text">
          <h4>{intl.formatMessage(messages.caption)}</h4>
          <p>{intl.formatMessage(messages.description)}</p>
        </div>
      )}
      <div className="Preloader__dots">
        <div className="Preloader__dot" />
        <div className="Preloader__dot" />
        <div className="Preloader__dot" />
        <div className="Preloader__dot" />
      </div>

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true} global={true}>{`
        .Preloader {
          &__text {
            h4 {
              color: ${currentTheme.primary.hex};
            }
            p {
              color: ${currentTheme.gray.hex};
            }
          }

          &__dot {
            background: ${currentTheme.secondary.hex};
            $animationDuration: 1.6s;
            $delayRange: 0.32s;
            animation: animation $animationDuration ease-in-out 0s infinite both;

            &:nth-child(1) {
              animation-delay: -$delayRange;
            }
            &:nth-child(2) {
              animation-delay: (-$delayRange / 2);
            }
            &:nth-child(3) {
              animation-delay: (-$delayRange / 3);
            }
            &:nth-child(4) {
              animation-delay: (-$delayRange / 4);
            }
          }
        }

        .PreloaderDark {
          background: ${currentTheme.whiteBackground.hex};
        }
        .PreloaderDarkElement {
          background: ${currentTheme.whiteElement.hex};
        }

        @keyframes animation {
          0% {
            background: ${currentTheme.secondary.hex};
            opacity: 0.4;
          }
          50% {
            background: ${currentTheme.primary.hex};
            opacity: 1;
          }
          100% {
            background: ${currentTheme.secondary.hex};
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
}
