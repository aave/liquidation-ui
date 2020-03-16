import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router';
import classNames from 'classnames';
import queryString from 'query-string';
import moment from 'moment';

import { useThemeContext, rgba } from 'libs/theme-provider';
import { useLiquidatorsQuery } from '../../apollo/generated';
import LiquidationForm from 'components/LiquidationForm';
import SearchField from 'components/fields/SearchField';
import Link from 'components/Link';
import Preloader from 'components/Preloader';
import NoDataPanel from 'components/NoDataPanel';
import { formatUserSummaryData } from '@aave/protocol-js';

import staticStyles from './style';

function getCurrentTimestamp(): number {
  return Number(moment().format('X'));
}

export function DataGrid() {
  const { data, loading } = useLiquidatorsQuery();
  const { currentTheme } = useThemeContext();
  const history = useHistory();

  const [activeItem, setActiveItem] = useState('');
  const [activeFormData, setActiveFormData] = useState(undefined);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  if (loading) {
    return <Preloader />;
  }
  if (!data?.userReserves || !data.reserves || !data.priceOracle) {
    return <NoDataPanel title="No data" />;
  }

  const reserves = data.reserves;
  const usdPriceEth = data.priceOracle.usdPriceEth;
  const userReserves = data.userReserves
    .map(userReserve => {
      return {
        ...userReserve,
        user: formatUserSummaryData(
          reserves,
          userReserve.user.reserves,
          userReserve.user.id,
          usdPriceEth,
          getCurrentTimestamp()
        ),
      };
    })
    .sort((a: any, b: any) => a.user.healthFactor - b.user.healthFactor)
    .filter(
      userReserve =>
        Number(userReserve.user.healthFactor) < 1 &&
        userReserve.user.id.toLowerCase().includes(searchValue.toLowerCase())
    );

  const pageSize = 20;
  const lastPage =
    Math.round(userReserves.length / pageSize) !== 0
      ? Math.round(userReserves.length / pageSize)
      : 1;
  const userReservesPagination = userReserves.slice((page - 1) * pageSize, page * pageSize);

  const handlePageButtonClick = (type: 'prev' | 'next') => {
    if (type === 'next') {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
  };
  const pageGoTo = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPage(
      Number(event.target.value) === 0
        ? 1
        : Number(event.target.value) > lastPage
        ? lastPage
        : Number(event.target.value)
    );
  };

  const onToggle = (userId: string, reserveId: string) => {
    setActiveItem(`${userId}${reserveId}`);
    const formData = userReserves.find(
      userReserve => `${userId}${reserveId}` === `${userReserve.user.id}${userReserve.reserve.id}`
    );
    // @ts-ignore
    setActiveFormData(formData);
  };
  const hoverColor = rgba(`${currentTheme.secondary.rgb}, 0.4`);

  const handleSubmit = async (amount: string, collateralReserve: string, reserveId: string) => {
    const query = queryString.stringify({ amount });
    history.push(`/liquidation/${collateralReserve}/${reserveId}/confirmation?${query}`);
  };

  return (
    <div className="DataGrid">
      <div className="DataGrid__navigation-inner">
        <div className="DataGrid__search-inner">
          <SearchField
            placeholder="Search by address"
            value={searchValue}
            onChange={setSearchValue}
          />
        </div>
        {lastPage > 1 && (
          <div className="DataGrid__pagination-inner">
            <button
              onClick={() => handlePageButtonClick('prev')}
              disabled={page === 1}
              className="DataGrid__pagination-button DataGrid__pagination-buttonPrev"
              type="button"
            />
            <button
              onClick={() => handlePageButtonClick('next')}
              disabled={page === lastPage}
              className="DataGrid__pagination-button DataGrid__pagination-buttonNext"
              type="button"
            />

            <div className="DataGrid__pageGoTo">
              <span>Go to</span>
              <input type="number" max={lastPage} min={1} onChange={pageGoTo} />
            </div>

            <p className="DataGrid__page-counter">
              Page {page} / {lastPage}
            </p>
          </div>
        )}
      </div>

      <div className="DataGrid__content">
        <div className="DataGrid__table-inner">
          {userReservesPagination.map((userReserve, i) => (
            <div
              className={classNames('DataGrid__item', {
                DataGrid__itemActive:
                  activeItem === `${userReserve.user.id}${userReserve.reserve.id}`,
              })}
              key={i}
            >
              <button
                className="DataGrid__item-button"
                type="button"
                onClick={() => onToggle(userReserve.user.id, userReserve.reserve.id)}
              >
                <p>
                  <span>Address</span>
                  <Link
                    to={`https://etherscan.io/address/${userReserve.user.id}`}
                    title={userReserve.user.id}
                    absolute={true}
                    inNewWindow={true}
                    className="DataGrid__link"
                  />
                </p>
                <p>
                  <span>Health factor</span>
                  {userReserve.user.healthFactor}
                </p>
                <p>
                  <span>Total Borrows (ETH)</span>
                  {userReserve.user.totalBorrowsWithFeesETH}
                </p>
                <p>
                  <span>Total Collateral (ETH)</span>
                  {userReserve.user.totalCollateralETH}
                </p>
              </button>
            </div>
          ))}
        </div>

        <div className="DataGrid__form-inner">
          {activeFormData && (
            <LiquidationForm onSubmit={handleSubmit} userReserve={activeFormData} />
          )}
        </div>
      </div>

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
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

          &__pagination-button {
            border-color: ${currentTheme.secondary.hex};
            &:disabled {
              border-color: ${currentTheme.disabledElement.hex};
              &:after {
                border-color: ${currentTheme.disabledElement.hex};
              }
            }
            &:after {
              border-color: ${currentTheme.secondary.hex};
            }
          }

          &__page-counter {
            color: ${currentTheme.gray.hex};
          }

          &__pageGoTo {
            color: ${currentTheme.gray.hex};
            input {
              color: ${currentTheme.gray.hex};
              border: 1px solid ${currentTheme.lightGray.hex};
            }
          }

          &__itemActive {
            box-shadow: 0 1px 12px 0 ${hoverColor} !important;
            border-color: ${hoverColor} !important;
          }

          &__link {
            color: ${currentTheme.gray.hex};
          }
        }
      `}</style>
    </div>
  );
}
