import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { useThemeContext } from 'libs/theme-provider';

import staticStyles from './style';

import warningIcon from './images/warningIcon.svg';
import warningIconDark from './images/warningIconDark.svg';
import whiteWarningIcon from './images/whiteWarningIcon.svg';
import darkWarningIcon from './images/darkWarningIcon.svg';

interface WarningAreaProps {
  title: string;
  children?: ReactNode;
  withMargin?: boolean;
  orangeFill?: boolean;
  className?: string;
}

export default function WarningArea({
  title,
  children,
  withMargin,
  orangeFill,
  className,
}: WarningAreaProps) {
  const { currentTheme, isDarkMode } = useThemeContext();

  const icon = isDarkMode
    ? orangeFill
      ? darkWarningIcon
      : warningIconDark
    : orangeFill
    ? whiteWarningIcon
    : warningIcon;

  return (
    <div
      className={classNames('WarningArea', className, {
        WarningAreatMargin: withMargin,
        OrangeWarningArea: orangeFill,
      })}
    >
      <div
        className={classNames('WarningArea__top-line', {
          WarningAreaTopLine: !!children,
        })}
      >
        <p>
          <img src={icon} width={orangeFill ? 20 : 16} height={orangeFill ? 18 : 14} alt="Aave" />
          {title}
        </p>
      </div>

      {!!children && <div className="WarningArea__content">{children}</div>}

      <style jsx={true}>{staticStyles}</style>
      <style jsx={true}>{`
        .WarningArea {
          border-color: ${currentTheme.dangerous.hex};
          &__top-line {
            p {
              color: ${currentTheme.gray.hex};
            }
          }
          &__content {
            color: ${currentTheme.gray.hex};
          }
        }

        .OrangeWarningArea {
          box-shadow: 0 1px 5px 0 ${currentTheme.warning.hex};
          border-color: ${currentTheme.warning.hex};
          background: ${currentTheme.warning.hex};
          .WarningArea__top-line {
            p {
              color: ${currentTheme.whiteElement.hex};
            }
          }
          .WarningArea__content {
            color: ${currentTheme.whiteElement.hex};
          }
        }
      `}</style>
    </div>
  );
}
