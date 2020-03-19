import React, { useState, memo } from 'react';
import moment from 'moment';

import { useLiquidatorsQuery } from '../../apollo/generated';
import Preloader from 'components/Preloader';
import NoDataPanel from 'components/NoDataPanel';
import DataGrid from '../DataGrid';
import { formatUserSummaryData } from '@aave/protocol-js';

function getCurrentTimestamp(): number {
  return Number(moment().format('X'));
}

function DataGridWrapper() {
  const { data, loading } = useLiquidatorsQuery();

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

  return (
    <div className="DataGridWrapper">
      <DataGrid
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        userReserves={userReserves}
      />
    </div>
  );
}

export default memo(DataGridWrapper);
