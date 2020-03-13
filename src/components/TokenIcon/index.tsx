import React from 'react';
import classNames from 'classnames';

import { getAssetInfo } from 'helpers/assets-list';
import { useThemeContext } from 'libs/theme-provider';

import staticStyles from './style';

interface TokenIconProps {
  tokenSymbol: string;
  tokenFullName?: string;
  className?: string;
  height: number;
  width: number;
  color?: string;
  withTokenSymbol?: boolean;
}

export default function TokenIcon({
  tokenSymbol,
  tokenFullName,
  className,
  height,
  width,
  color,
  withTokenSymbol,
}: TokenIconProps) {
  const { currentTheme, isDarkMode } = useThemeContext();
  const asset = getAssetInfo(tokenSymbol);
  const icon = isDarkMode ? asset && asset.icon.dark : asset && asset.icon.normal;
  const displayedTokenSymbol = tokenSymbol !== tokenFullName ? tokenSymbol : '';

  return (
    <div
      className={classNames('TokenIcon', className, {
        TokenIconWithFullName: tokenFullName,
      })}
    >
      {icon && <img src={icon} alt={tokenSymbol} height={height} width={width} />}
      {!icon && tokenSymbol === 'USD' && <span className="TokenIcon__dollar">$</span>}
      {!icon && tokenSymbol !== 'USD' && <span className="TokenIcon__symbol">{tokenSymbol}</span>}

      {tokenFullName && (
        <p className="TokenIcon__name">
          <b>{tokenFullName}</b>
          {color && <span className="TokenIcon__color-dot" style={{ backgroundColor: color }} />}
          {withTokenSymbol && displayedTokenSymbol && <span> ({displayedTokenSymbol})</span>}
        </p>
      )}

      <style jsx={true}>{staticStyles}</style>
      <style jsx={true}>{`
        .TokenIcon {
          &__symbol {
            color: ${currentTheme.secondary.hex};
          }

          &__name,
          &__dollar {
            color: ${currentTheme.gray.hex};
          }
        }
      `}</style>
    </div>
  );
}
