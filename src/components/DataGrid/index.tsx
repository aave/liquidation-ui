import React, { useState } from 'react';
import moment from 'moment';
import { useIntl } from 'react-intl';
import { formatUserSummaryData } from '@aave/protocol-js';
import Collapse from '@kunukn/react-collapse';
import classNames from 'classnames';

import { useThemeContext, rgba } from 'libs/theme-provider';
import { useLiquidatorsQuery } from '../../apollo/generated';
import Preloader from 'components/Preloader';
import LiquidationForm from 'components/LiquidationForm';
import NoDataPanel from 'components/NoDataPanel';

import staticStyles from './style';

function getCurrentTimestamp(): number {
  return Number(moment().format('X'));
}

export function DataGrid() {
  const { data, loading } = useLiquidatorsQuery();
  const { currentTheme } = useThemeContext();
  const intl = useIntl();
  const [activeItem, setActiveItem] = useState('');

  if (loading) {
    return <Preloader />;
  }
  if (!data?.userReserves || !data.reserves) {
    return <NoDataPanel title="No data" />;
  }

  const reserves = data.reserves;
  const userReserves = data.userReserves
    .map(userReserve => {
      return {
        ...userReserve,
        user: formatUserSummaryData(
          reserves,
          userReserve.user.reserves,
          userReserve.user.id,
          120,
          getCurrentTimestamp()
        ),
      };
    })
    .filter(userReserve => Number(userReserve.user.healthFactor) < 1);

  const onToggle = (userId: string) => {
    setActiveItem(activeItem === userId ? '' : userId);
  };
  const hoverColor = rgba(`${currentTheme.secondary.rgb}, 0.4`);

  // functions for liquidation
  const approveTransfer = async (currency: string) => {};

  const liquidationCall = async () => {};

  return (
    <div className="DataGrid">
      {userReserves.map((userReserve, i) => (
        <div
          className={classNames('DataGrid__item', {
            DataGrid__itemActive: activeItem === userReserve.user.id,
          })}
          key={i}
        >
          <button
            className="DataGrid__item-button"
            type="button"
            onClick={() => onToggle(userReserve.user.id)}
          >
            <p>
              <span>User id:</span>
              {userReserve.user.id}
            </p>
            <p>
              <span>Health factor:</span>
              {userReserve.user.healthFactor}
            </p>
            <div className="DataGrid__arrows" />
          </button>

          <Collapse className="DataGrid__content" isOpen={activeItem === userReserve.user.id}>
            <div className="DataGrid__line">
              <h3>Collaterals</h3>
              {userReserve.user.reservesData.map((res, ii) => (
                <p key={ii}>
                  <span>{res.reserve.symbol}</span>:{' '}
                  {intl.formatNumber(Number(res.principalATokenBalance))}
                </p>
              ))}
            </div>

            <div className="DataGrid__line">
              <h3>Borrows</h3>
              <p>
                <span>{userReserve.reserve.symbol}</span>:{' '}
                {intl.formatNumber(Number(userReserve.principalBorrows))}
              </p>
            </div>

            <LiquidationForm
              onSubmit={liquidationCall}
              maxAmount={userReserve.principalBorrows}
              currencySymbol={userReserve.reserve.symbol}
            />
          </Collapse>
        </div>
      ))}

      <style jsx={true} global={true}>{staticStyles}</style>
      <style jsx={true} global={true}>{`
        @import 'src/_mixins/vars';
        @import 'src/_mixins/screen-size';

        .DataGrid {
          &__item {
            background: ${currentTheme.whiteElement.hex};
            &:hover {
              box-shadow: 0 1px 12px 0 ${hoverColor} !important;
              border-color: ${hoverColor} !important;
            }
          }

          &__item-button {
            color: ${currentTheme.gray.hex};
          }

          &__arrows {
            border-color: ${currentTheme.gray.hex};
            &:after,
            &:before {
              background: ${currentTheme.gray.hex};
            }
          }

          &__content {
            .DataGrid__line {
              h3 {
                color: ${currentTheme.gray.hex};
              }
              p {
                color: ${currentTheme.gray.hex};
                span {
                  color: ${currentTheme.secondary.hex};
                }
              }
            }
          }

          &__itemActive {
            .DataGrid__item-button {
              border-bottom: 1px solid ${currentTheme.lightGrayBorder.hex};
            }
          }
        }
      `}</style>
    </div>
  );
}
