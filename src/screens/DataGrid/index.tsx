import React, { ChangeEvent, useState } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router';
import { formatUserSummaryData } from '@aave/protocol-js';
import Collapse from '@kunukn/react-collapse';
import classNames from 'classnames';
import queryString from 'query-string';

import { useThemeContext, rgba } from 'libs/theme-provider';
import { useLiquidatorsQuery } from '../../apollo/generated';
import Preloader from 'components/Preloader';
import LiquidationForm from 'components/LiquidationForm';
import NoDataPanel from 'components/NoDataPanel';
import SearchField from 'components/fields/SearchField';

import staticStyles from './style';
import Link from 'components/Link';

function getCurrentTimestamp(): number {
  return Number(moment().format('X'));
}

export function DataGrid() {
  const { data, loading } = useLiquidatorsQuery();
  const { currentTheme } = useThemeContext();
  const history = useHistory();

  const [activeItem, setActiveItem] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);

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
    .filter(
      userReserve =>
        Number(userReserve.user.healthFactor) < 1 &&
        userReserve.user.id.toLowerCase().includes(searchValue.toLowerCase())
    );

  const pageSize = 15;
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

  const onToggle = (userId: string) => {
    setActiveItem(activeItem === userId ? '' : userId);
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

      {userReservesPagination.map((userReserve, i) => (
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
              <span>Address:</span>
              <Link
                to={`https://etherscan.io/address/${userReserve.user.id}`}
                title={userReserve.user.id}
                absolute={true}
                inNewWindow={true}
                className="DataGrid__link"
              />
            </p>
            <p>
              <span>Health factor:</span>
              {userReserve.user.healthFactor}
            </p>
            <div className="DataGrid__arrows" />
          </button>

          <Collapse className="DataGrid__content" isOpen={activeItem === userReserve.user.id}>
            <LiquidationForm
              onSubmit={handleSubmit}
              currencySymbol={userReserve.reserve.symbol}
              userReserve={userReserve}
            />
          </Collapse>
        </div>
      ))}

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

          &__arrows {
            border-color: ${currentTheme.gray.hex};
            &:after,
            &:before {
              background: ${currentTheme.gray.hex};
            }
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
            .DataGrid__item-button {
              border-bottom: 1px solid ${currentTheme.lightGrayBorder.hex};
            }
          }

          &__link {
            color: ${currentTheme.gray.hex};
          }
        }
      `}</style>
    </div>
  );
}
