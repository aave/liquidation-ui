import React, { ReactNode } from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';

import { rgba, useThemeContext } from 'libs/theme-provider';
import Link from 'components/Link';

import messages from './messages';
import staticStyles from './style';

import linkIcon from './images/linkIcon.svg';
import linkIconDark from './images/linkIconDark.svg';

export type TxStatusType = 'error' | 'confirmed' | 'submitted' | '';

interface TxBoxWrapperProps {
  title: string;
  description?: string;
  children: ReactNode;
  status: TxStatusType;
  txReceiptUrl?: string;
}

export default function TxBoxWrapper({
  title,
  description,
  status,
  children,
  txReceiptUrl,
}: TxBoxWrapperProps) {
  const intl = useIntl();
  const { currentTheme, isDarkMode } = useThemeContext();

  const txStatusText = status || intl.formatMessage(messages.status);
  const dotBorderColor = rgba(`${currentTheme.gray.rgb}, 0.5`);
  const errorContainer = rgba(`${currentTheme.dangerous.rgb}, 0.05`);
  const successContainer = rgba(`${currentTheme.success.rgb}, 0.05`);

  return (
    <div
      className={classNames('TxBoxWrapper', {
        TxBoxWrapper__error: status === 'error',
        TxBoxWrapper__success: status === 'confirmed',
      })}
    >
      <div className="TxBoxWrapper__top-line">
        <p className="TxBoxWrapper__title">
          {status === 'confirmed' ? intl.formatMessage(messages.success) : title}
        </p>
        <div className="TxBoxWrapper__status-inner">
          <p className="TxBoxWrapper__status">{txStatusText}</p>
          <div
            className={classNames(
              'TxBoxWrapper__status-dot',
              `TxBoxWrapper__status-${status ? status : 'base'}`
            )}
          />
        </div>
      </div>

      <div
        className={classNames('TxBoxWrapper__description-inner', {
          TxBoxWrapper__noDescriptionInner: !description,
        })}
      >
        {!!description && <p className="TxBoxWrapper__description">{description}</p>}
        {!!txReceiptUrl && (
          <Link className="TxBoxWrapper__link" to={txReceiptUrl} absolute={true} inNewWindow={true}>
            <img src={isDarkMode ? linkIconDark : linkIcon} width={14} height={14} alt="" />
            <span>{intl.formatMessage(messages.viewTransaction)}</span>
          </Link>
        )}
      </div>

      {children}

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true} global={true}>{`
        .TxBoxWrapper {
          border-color: ${currentTheme.lightGrayBorder.hex};
          background: ${currentTheme.whiteElement.hex};

          &__title {
            color: ${currentTheme.secondary.hex};
          }

          &__status {
            color: ${currentTheme.gray.hex};
          }
          &__status-dot {
            background: ${currentTheme.whiteText.hex};
            border-color: ${dotBorderColor};
          }
          &__status-submitted {
            background: ${currentTheme.warning.hex};
            border-color: ${currentTheme.warning.hex};
          }
          &__status-confirmed {
            background: ${currentTheme.success.hex};
            border-color: ${currentTheme.success.hex};
          }
          &__status-error {
            background: ${currentTheme.dangerous.hex};
            border-color: ${currentTheme.dangerous.hex};
          }

          &__description {
            color: ${currentTheme.gray.hex};
          }

          .TxBoxWrapper__link {
            &:hover {
              span {
                color: ${currentTheme.secondary.hex};
              }
            }
            span {
              color: ${currentTheme.gray.hex};
            }
          }
        }

        .TxBoxWrapper__error {
          border-color: ${currentTheme.dangerous.hex};
          background: ${errorContainer};
          .TxBoxWrapper__title {
            color: ${currentTheme.dangerous.hex};
          }
        }
        .TxBoxWrapper__success {
          border-color: ${currentTheme.success.hex};
          background: ${successContainer};
          .TxBoxWrapper__title {
            color: ${currentTheme.success.hex};
          }
        }
      `}</style>
    </div>
  );
}
