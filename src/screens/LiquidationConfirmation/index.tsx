import React from 'react';
import { useLocation, useParams } from 'react-router';
import BigNumber from 'bignumber.js';
import queryString from 'query-string';

import { useThemeContext } from 'libs/theme-provider';
import { useLiquidationCallMutation } from '../../apollo/generated';
import { useWeb3Context } from '../../web3-data-provider';
import TxConfirmationView from 'components/TxConfirmationView';
import TokenIcon from 'components/TokenIcon';

import staticStyles from './style';

interface LiquidationConfirmationRouteParams {
  collateralReserve: string;
  reserveId: string;
}

export default function LiquidationConfirmation() {
  const [LiquidationCallMutation] = useLiquidationCallMutation();
  const location = useLocation();
  const { collateralReserve, reserveId } = useParams<LiquidationConfirmationRouteParams>();
  const { wallet } = useWeb3Context();
  const { currentTheme } = useThemeContext();

  const query = queryString.parse(location.search);
  if (typeof query.amount !== 'string' || typeof query.symbol !== 'string' || typeof query.liquidatedUser !== 'string') {
    // TODO: add error
    return null;
  }
  const amount = new BigNumber(query.amount);
  const {symbol, liquidatedUser } = query;

  const liquidationCall = async () => {
    const result = await LiquidationCallMutation({
      variables: {
        data: {
          liquidatedUser,
          userAddress: wallet,
          collateralReserve: collateralReserve,
          purchaseAmount: amount.toString(),
          reserve: reserveId,
        },
      },
    });
    return (result && result.data && result.data.liquidationCall) || [];
  };

  return (
    <div className="LiquidationConfirmation__inner">
      <TxConfirmationView
        caption="Liquidation"
        boxTitle="Liquidation"
        getTransactionsData={liquidationCall}
      >
        <div className="LiquidationConfirmation">
          <span>Amount</span>
          <strong>
            <span>{amount.toString()}</span>
            <TokenIcon tokenSymbol={symbol} height={25} width={25} />
          </strong>
        </div>
      </TxConfirmationView>

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true} global={true}>{`
        .LiquidationConfirmation {
          color: ${currentTheme.gray.hex};
        }
      `}</style>
    </div>
  );
}
