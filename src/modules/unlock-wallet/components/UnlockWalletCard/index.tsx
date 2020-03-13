import React from 'react';

import { useThemeContext, rgba, gradient } from 'libs/theme-provider';
import NoBrowserWallet from '../NoBrowserWallet';

import staticStyles from './style';

interface UnlockWalletCardProps {
  title: string;
  description: string;
  unlockWallet?: () => void;
  icon?: string;
  isActive?: boolean;
}

export default function UnlockWalletCard({
  title,
  description,
  unlockWallet,
  icon,
  isActive,
}: UnlockWalletCardProps) {
  const { currentTheme } = useThemeContext();

  const blackColor = rgba(`${currentTheme.blackShadow.rgb}, 0.2`);
  const gradientOnHover = gradient(
    217,
    `${currentTheme.primary.rgb}, 0.8`,
    25,
    `${currentTheme.secondary.rgb}, 0.8`,
    100,
  );

  return (
    <button
      onClick={unlockWallet}
      disabled={!isActive}
      className="UnlockWalletCard"
    >
      <div className="UnlockWalletCard__inner">
        <div className="UnlockWalletCard__image">
          <img src={icon} alt="Aave" />
        </div>
        <div className="UnlockWalletCard__text-inner">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      <div className="UnlockWalletCard__warning">
        {!isActive && <NoBrowserWallet />}
      </div>

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true}>{`
        .UnlockWalletCard {
          &:hover {
            &:after {
              background-image: ${gradientOnHover};
            }
            h3 {
              color: ${currentTheme.primary.hex};
            }
          }
          &:after {
            background: ${blackColor};
          }
          &:disabled {
            .UnlockWalletCard__inner {
              background: ${currentTheme.disabledElement.hex};
            }
            .UnlockWalletCard__text-inner {
              h3 {
                color: ${currentTheme.disabledText.hex};
              }
              p {
                color: ${currentTheme.disabledText.hex};
              }
            }
          }

          &__inner {
            background: ${currentTheme.whiteElement.hex};
          }

          &__text-inner {
            h3 {
              color: ${currentTheme.gray.hex};
            }
            p {
              color: ${currentTheme.gray.hex};
            }
          }
        }
      `}</style>
    </button>
  );
}
