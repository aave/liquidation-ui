import React, { ReactElement } from 'react';
import classNames from 'classnames';

import { gradient, useThemeContext } from 'libs/theme-provider';

import staticStyles from './style';

export interface DefaultButtonProps {
  onClick?: (event: any) => void;
  title: string;
  type?: 'button' | 'submit';
  secondaryFill?: boolean;
  whiteFill?: boolean;
  transparent?: boolean;
  gradientFill?: boolean;
  buttonSize?: 'medium' | 'big' | 'small';
  mobileBig?: boolean;
  iconComponent?: ReactElement | ReactElement[];
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export default function DefaultButton({
  onClick,
  title,
  type,
  secondaryFill,
  whiteFill,
  transparent,
  gradientFill,
  buttonSize,
  mobileBig,
  iconComponent,
  disabled,
  loading,
  className,
}: DefaultButtonProps) {
  const { currentTheme, isDarkMode } = useThemeContext();

  const backgroundGradient = gradient(
    -90,
    `${currentTheme.buttonGradientPrimary.rgb}, 1`,
    0,
    `${currentTheme.buttonGradientSecondary.rgb}, 1`,
    100,
  );

  return (
    <button
      className={classNames(
        'DefaultButton',
        `DefaultButton__${buttonSize}`,
        {
          DefaultButton__secondary: secondaryFill,
          DefaultButton__white: whiteFill,
          DefaultButton__gradient: gradientFill,
          DefaultButton__transparent: transparent,
          DefaultButton__mobileBig: mobileBig,
          DefaultButton__dark: isDarkMode,
        },
        className,
      )}
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="DefaultButton__wrapper">
        {loading && (
          <div className="loader">
            <svg className="circular-loader" viewBox="25 25 50 50">
              <circle
                className="loader-path"
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="#fff"
                strokeWidth="3"
              />
            </svg>
          </div>
        )}

        {iconComponent && iconComponent}

        <span>{title}</span>
      </div>

      <style jsx={true}>{staticStyles}</style>
      <style jsx={true}>{`
        .DefaultButton {
          background: ${currentTheme.primary.hex};
          border-color: ${currentTheme.primary.hex};
          &:disabled {
            background: ${currentTheme.lightGrayBorder.hex} !important;
            border-color: ${currentTheme.lightGrayBorder.hex} !important;

            span {
              color: ${currentTheme.disabledText.hex} !important;
            }
          }

          span {
            color: ${currentTheme.whiteText.hex};
          }

          &__secondary {
            background: ${currentTheme.secondary.hex};
            border-color: ${currentTheme.secondary.hex};
          }

          &__white {
            background: ${currentTheme.whiteText.hex};
            border-color: ${currentTheme.whiteText.hex};
            span {
              color: ${currentTheme.primary.hex};
            }
          }

          &__gradient {
            background: ${backgroundGradient};
          }

          &__transparent {
            &:after {
              background: ${currentTheme.primary.hex};
            }
            span {
              color: ${currentTheme.primary.hex};
            }
            &:hover {
              background: ${currentTheme.primary.hex} !important;
              span {
                color: ${currentTheme.whiteText.hex};
              }
            }
          }
        }

        .DefaultButton__dark {
          &.DefaultButton__white,
          &.DefaultButton__transparent {
            span {
              color: ${currentTheme.disabledElement.hex};
            }
          }

          &.DefaultButton__transparent {
            background: ${currentTheme.whiteText.hex} !important;
            border-color: ${currentTheme.whiteText.hex};
            &:after {
              background: ${currentTheme.whiteText.hex};
            }
          }
        }

        .loader-path {
          animation: dash 1.5s ease-in-out infinite,
            color 6s ease-in-out infinite;
        }

        @keyframes dash {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
          }
          100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
          }
        }

        @keyframes color {
          0% {
            stroke: ${currentTheme.disabledText.hex};
          }
          40% {
            stroke: ${currentTheme.disabledText.hex};
          }
          66% {
            stroke: ${currentTheme.disabledText.hex};
          }
          80%,
          90% {
            stroke: ${currentTheme.disabledText.hex};
          }
        }
      `}</style>
    </button>
  );
}
