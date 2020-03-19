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

export default function LiquidationConfirmation() {
  const [LiquidationCallMutation] = useLiquidationCallMutation();
  const location = useLocation();
  const { collateralReserve, reserveId } = useParams();
  const { wallet } = useWeb3Context();
  const { currentTheme } = useThemeContext();

  let amount: any = '';
  let symbol: any = '';
  const query = queryString.parse(location.search);
  if (typeof query.amount === 'string') {
    amount = new BigNumber(query.amount);
  }
  if (typeof query.symbol === 'string') {
    symbol = query.symbol;
  }

  const liquidationCall = async () => {
    const result = await LiquidationCallMutation({
      variables: {
        data: {
          userAddress: wallet || '',
          collateralReserve: collateralReserve || '',
          purchaseAmount: amount.toString(),
          reserve: reserveId || '',
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
