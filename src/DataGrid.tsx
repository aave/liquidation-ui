import React from 'react';
import moment from 'moment';
import { formatUserSummaryData } from '@aave/protocol-js';

import { useLiquidatorsQuery } from './apollo/generated';
import Preloader from 'components/Preloader';

function getCurrentTimestamp(): number {
  return Number(moment().format('X'));
}

export function DataGrid() {
  const { data, loading } = useLiquidatorsQuery();
  if (loading) {
    return <Preloader />;
  }
  if (!data?.userReserves || !data.reserves) {
    return <h1>NO DATA</h1>;
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

  return (
    <div className="DataGrid">
      <h3>READY</h3>
      {userReserves.map((userReserve, i) => (
        <div key={i} style={{ borderColor: 'black' }}>
          BORROWS
          <p>
            {userReserve.reserve.symbol}: {userReserve.principalBorrows}
          </p>
          <h4>HF: {userReserve.user.healthFactor}</h4>
          COLLATERALS
          {userReserve.user.reservesData.map((res, ii) => (
            <p key={ii}>
              {res.reserve.symbol}: {res.principalATokenBalance}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
