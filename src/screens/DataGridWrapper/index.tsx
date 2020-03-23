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

  return (
    <div className="DataGridWrapper">
      <DataGrid
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        liquidations={data.liquidation}
      />
    </div>
  );
}

export default DataGridWrapper;
