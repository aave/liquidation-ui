import React from 'react';
import classNames from 'classnames';

import { useThemeContext } from 'libs/theme-provider';

import staticStyles from './style';

type LabeledSwitchProps = {
  value: boolean;
  leftOption: string;
  rightOption: string;
  onToggle: (value: boolean) => void;
  className?: string;
};

export default function LabeledSwitch({
  value,
  leftOption,
  rightOption,
  onToggle,
  className,
}: LabeledSwitchProps) {
  const { currentTheme, isDarkMode } = useThemeContext();

  const handleToggle = (toggleValue: boolean) => {
    if (value === toggleValue) return;

    onToggle(toggleValue);
  };

  return (
    <div
      className={classNames('LabeledSwitch', className, {
        LabeledSwitchActive: value,
      })}
    >
      <div className="LabeledSwitch__inner">
        <div className="LabeledSwitch__pointer">
          <span />
        </div>

        <button
          className={classNames({
            LabeledSwitch__darkActive: isDarkMode && !value,
          })}
          onClick={() => handleToggle(false)}
          type="button"
        >
          {leftOption}
        </button>
        <button
          className={classNames({
            LabeledSwitch__darkActive: isDarkMode && value,
          })}
          onClick={() => handleToggle(true)}
          type="button"
        >
          {rightOption}
        </button>
      </div>

      <style jsx={true}>{staticStyles}</style>
      <style jsx={true}>{`
        .LabeledSwitch {
          &__pointer {
            span {
              background: ${currentTheme.whiteText.hex};
            }
          }

          &__inner {
            background: ${currentTheme.backgroundGray.hex};
            border-color: ${currentTheme.lightGrayBorder.hex};
          }

          button {
            color: ${currentTheme.gray.hex};
          }

          button.LabeledSwitch__darkActive {
            color: ${currentTheme.disabledElement.hex};
          }
        }
      `}</style>
    </div>
  );
}
