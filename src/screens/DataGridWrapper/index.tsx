import React, { useState } from 'react';

import { useLiquidatorsQuery } from '../../apollo/generated';
import Preloader from 'components/Preloader';
import NoDataPanel from 'components/NoDataPanel';
import DataGrid from '../DataGrid';

function DataGridWrapper() {
  const { data, loading } = useLiquidatorsQuery();

  const [searchValue, setSearchValue] = useState('');

  if (loading) {
    return <Preloader />;
  }
  if (!data?.liquidation) {
    return <NoDataPanel title="No data" />;
  }

  const liquidation = data.liquidation
    .sort((a: any, b: any) => a.user.healthFactor - b.user.healthFactor)
    .filter(userReserve => userReserve.user.id.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className="DataGridWrapper">
      <DataGrid
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        liquidations={liquidation}
      />
    </div>
  );
}

export default DataGridWrapper;
