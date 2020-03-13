import React from 'react';
import classNames from 'classnames';

import { useThemeContext } from 'libs/theme-provider';

import staticStyles from './style';

interface ArrowProps {
  className?: string;
  type?: 'left' | 'right';
  color?: 'primary' | 'secondary' | 'gray';
}

export default function Arrow({ className, type = 'left', color }: ArrowProps) {
  const { currentTheme } = useThemeContext();

  return (
    <>
      <i className={classNames('Arrow', `Arrow__${type}`, `Arrow__${color}`, className)} />
      <style jsx={true}>{staticStyles}</style>
      <style jsx={true}>{`
        .Arrow {
          &__primary {
            color: ${currentTheme.primary.hex};
            &:after,
            &:before {
              background: ${currentTheme.primary.hex};
            }
          }
          &__secondary {
            color: ${currentTheme.secondary.hex};
            &:after,
            &:before {
              background: ${currentTheme.secondary.hex};
            }
          }
          &__gray {
            color: ${currentTheme.gray.hex};
            &:after,
            &:before {
              background: ${currentTheme.gray.hex};
            }
          }
        }
      `}</style>
    </>
  );
}
