import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';

import { gradient, rgba, useThemeContext } from 'libs/theme-provider';
import TokenIcon from 'components/TokenIcon';
import BasicField from 'components/fields/BasicField';

import messages from './messages';
import staticStyles from './style';

type AmountFieldProps = {
  currency: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  darkBackground?: boolean;
  withMaxButton?: boolean;
  maxButtonClick?: () => void;
};

export default function AmountField({
  currency,
  value,
  onChange,
  error,
  darkBackground,
  withMaxButton,
  maxButtonClick,
}: AmountFieldProps) {
  const intl = useIntl();
  const { currentTheme, isDarkMode } = useThemeContext();
  const [onFocus, setFocus] = useState(false);

  const newValue = value.replace(/^0[0-9]/, '0');

  const gradientBackground = gradient(
    217,
    `${currentTheme.primary.rgb}, 1`,
    25,
    `${currentTheme.secondary.rgb}, 1`,
    100
  );
  const focusBackground = rgba(`${currentTheme.privateWrapper.rgb}, 0.93`);

  return (
    <div
      className={classNames('AmountField', {
        AmountField__focus: onFocus,
        AmountFieldDark: isDarkMode,
        AmountFieldDarkBackground: darkBackground,
        AmountFieldError: error,
      })}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <div className="AmountField__wrapper">
        <div className="AmountField__inner">
          <TokenIcon tokenSymbol={currency} width={30} height={30} />

          <BasicField
            value={newValue}
            onChange={onChange}
            placeholder={intl.formatMessage(messages.placeholder)}
            type="number"
            step="any"
            className="AmountField__input"
          />

          <div className="AmountField__right-inner">
            {withMaxButton ? (
              <button className="AmountField__maxButton" type="button" onClick={maxButtonClick}>
                MAX
              </button>
            ) : (
              <p className="AmountField__currency">{currency}</p>
            )}
          </div>
        </div>
      </div>

      <p className="AmountField__error">{error}</p>

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true} global={true}>{`
        .AmountField {
          &__wrapper {
            &:after,
            &:before {
              background: ${gradientBackground};
            }
          }
          &__inner {
            background: ${currentTheme.privateWrapper.hex};
          }
          &__currency {
            color: ${currentTheme.gray.hex};
          }
          &__error {
            color: ${currentTheme.dangerous.hex};
          }

          &__maxButton {
            color: ${currentTheme.secondary.hex};
            &:hover {
              color: ${currentTheme.primary.hex};
            }
          }
        }
        .AmountFieldDark {
          .AmountField__wrapper {
            &:after,
            &:before {
              background: ${currentTheme.whiteText.hex};
            }
          }
          .AmountField__inner {
            background: ${currentTheme.whiteElement.hex};
          }
        }
        .AmountFieldDarkBackground {
          .AmountField__inner {
            background: ${currentTheme.privateWrapper.hex};
          }
        }
        .AmountFieldError {
          .AmountField__wrapper {
            &:after,
            &:before {
              background: ${currentTheme.dangerous.hex};
            }
          }
        }
        .AmountField__focus {
          .AmountField__inner {
            background: ${focusBackground};
          }
        }
      `}</style>
    </div>
  );
}
