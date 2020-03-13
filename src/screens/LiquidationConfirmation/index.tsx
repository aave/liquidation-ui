import React from 'react';
import { useLocation, useParams } from 'react-router';
import BigNumber from 'bignumber.js';
import queryString from 'query-string';

import { useLiquidationCallMutation } from '../../apollo/generated';
import { useWeb3ProviderHook } from '../../web3-data-provider/hooks/web3-provider-hook';
import TxConfirmationView from 'components/TxConfirmationView';

export default function LiquidationConfirmation() {
  const [LiquidationCallMutation] = useLiquidationCallMutation();
  const location = useLocation();
  const { collateralReserve, reserveId } = useParams();

  const defaultNetwork = 'mainnet';
  const [{ web3Context }] = useWeb3ProviderHook(defaultNetwork);
  const { wallet } = web3Context;

  let amount: any = '';
  const query = queryString.parse(location.search);
  if (typeof query.amount === 'string') {
    amount = new BigNumber(query.amount);
  }

  console.log(wallet);

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
    <TxConfirmationView
      caption="Liquidation"
      boxTitle="Liquidation"
      getTransactionsData={liquidationCall}
    >
      <p>
        <span>Amount: </span>
        {amount.toString()}
      </p>
    </TxConfirmationView>
  );
}
