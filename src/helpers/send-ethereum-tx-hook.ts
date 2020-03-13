import { useState } from 'react';
import { TransactionReceipt, TransactionConfig } from 'web3-eth';

import { useWeb3Context } from 'libs/web3-data-provider';
import { EthereumTransactionModel } from 'libs/pool-data-provider/graphql';

interface SendEthTransactionData {
  loading: boolean;
  executed: boolean;
  txHash?: string;
  txReceipt?: TransactionReceipt;
  error?: any;
}

interface SendEthTransactionInput {
  onExecution?: (txHash: string) => void;
  onConfirmation?: (receipt: TransactionReceipt) => void;
}

type SendEthTransactionDataTuple = [
  (txData: EthereumTransactionModel, callbacks: SendEthTransactionInput) => Promise<void>,
  SendEthTransactionData
];

export function useSendEthTransaction(): SendEthTransactionDataTuple {
  const [executionStatus, setExecutionStatus] = useState({
    loading: false,
    executed: false,
    signed: false,
  });
  const [error, setError] = useState<any>(undefined);
  const [txHash, setTxHash] = useState('');
  const [txReceipt, setTxReceipt] = useState<TransactionReceipt | undefined>(undefined);
  const { web3 } = useWeb3Context();

  const sendTransaction = async (
    txData: EthereumTransactionModel,
    callbacks?: SendEthTransactionInput
  ) => {
    setExecutionStatus({ loading: true, executed: false, signed: false });
    setError(undefined);

    web3.eth
      .sendTransaction(txData as TransactionConfig)
      .on('transactionHash', hash => {
        callbacks && callbacks.onExecution && callbacks.onExecution(hash);
        setTxHash(hash);
        setExecutionStatus({ loading: true, executed: true, signed: true });
      })
      .on('error', err => {
        setExecutionStatus(currentState => {
          if (currentState.signed) {
            setError(err);
            return { ...currentState, loading: false };
          } else {
            return { loading: false, executed: false, signed: false };
          }
        });
      })
      .on('receipt', receipt => {
        setExecutionStatus({ loading: false, executed: true, signed: true });
        setTxReceipt(receipt);
        callbacks && callbacks.onConfirmation && callbacks.onConfirmation(receipt);
      });
  };
  return [sendTransaction, { ...executionStatus, txHash, txReceipt, error }];
}
