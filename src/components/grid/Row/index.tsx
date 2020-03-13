import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { useThemeContext } from 'libs/theme-provider';

import staticStyles from './style';

export interface RowProps {
  children?: ReactNode;
  title?: string;
  subTitle?: string;
  withArrow?: boolean;
  isActive?: boolean;
  className?: string;
  isColumn?: boolean;
  withMargin?: boolean;
  withSmallMargin?: boolean;
  center?: boolean;
}

export default function Row({
  children,
  title,
  subTitle,
  withArrow,
  isActive,
  className,
  isColumn,
  withMargin,
  withSmallMargin,
  center,
}: RowProps) {
  const { currentTheme } = useThemeContext();

  return (
    <div
      className={classNames('Row', className, {
        Row__column: isColumn,
        Row__withMargin: withMargin,
        Row__withSmallMargin: withSmallMargin,
        Row__active: isActive,
        Row__itemsCenter: center,
      })}
    >
      {title && (
        <div className="Row__title-inner">
          <p className="Row__title">
            {title}
            {withArrow && (
              <span className="Row__arrow">
                <span />
                <span />
              </span>
            )}
          </p>
          {subTitle && <span className="Row__subtitle">{subTitle}</span>}
        </div>
      )}

      {children && <div className="Row__content">{children}</div>}

      <style jsx={true}>{staticStyles}</style>
      <style jsx={true}>{`
        .Row {
          &__title {
            color: ${currentTheme.gray.hex};
          }
          &__subtitle {
            color: ${currentTheme.lightGray.hex};
          }
          &__arrow {
            span {
              background-color: ${currentTheme.secondary.hex};
            }
          }
        }
      `}</style>
    </div>
  );
}
