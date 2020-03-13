import React, { FormEvent, useState } from 'react';
import { TransactionReceipt } from 'web3-eth';
import { useHistory } from 'react-router';
import { useIntl } from 'react-intl';
import classNames from 'classnames';

import { useSendEthTransaction } from 'helpers/send-ethereum-tx-hook';
import { EthereumTransactionModel } from '../../../apollo/generated';
import DefaultButton from 'components/DefaultButton';
import CheckBoxField from 'components/fields/CheckBoxField';
import TxBoxWrapper, { TxStatusType } from '../../TxBoxWrapper';

import messages from '../messages';
import staticStyles from './style';
import { useWeb3React } from '@web3-react/core';
import { mapChainIdToName } from 'helpers/web3-helpers';

interface TxExecutionBoxProps {
  title: string;
  txData: EthereumTransactionModel;
  onExecution?: (txHash: string) => void;
  onConfirmation?: (receipt: TransactionReceipt) => void;
  description?: string;
  withCheckbox?: boolean;
  disabled?: boolean;
  buttonTitle?: string;
  disableOnSuccess?: boolean;
  goToAfterSuccess?: string;
  successButtonTitle?: string;
}

export default function TxExecutionBox({
  txData,
  onExecution,
  onConfirmation,
  title,
  description,
  withCheckbox,
  disabled,
  buttonTitle,
  disableOnSuccess,
  goToAfterSuccess,
  successButtonTitle,
}: TxExecutionBoxProps) {
  const intl = useIntl();
  const history = useHistory();
  const { chainId } = useWeb3React();

  const [
    sendTransaction,
    { txHash, txReceipt, error, executed, loading },
  ] = useSendEthTransaction();
  const [checked, setChecked] = useState(false);

  const onCheckboxClick = () => setChecked(!checked);

  const handleSubmitTransaction = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendTransaction(txData, { onExecution, onConfirmation });
  };

  let txStatus: TxStatusType = '';
  if (executed) {
    if (error) {
      txStatus = 'error';
    } else if (txReceipt) {
      txStatus = 'confirmed';
    } else {
      txStatus = 'submitted';
    }
  }
  const chainName = chainId ? mapChainIdToName(chainId) : '';
  const txReceiptUrl =
    txHash && `https://${chainName !== 'mainnet' ? `${chainName}.` : ''}etherscan.io/tx/${txHash}`;

  return (
    <TxBoxWrapper
      title={title}
      description={description}
      txReceiptUrl={txReceiptUrl}
      status={txStatus}
    >
      <form
        onSubmit={handleSubmitTransaction}
        className={classNames('TxExecutionBox', {
          TxExecutionBox__withCheckbox: withCheckbox,
          TxExecutionBox__withDescription: !description || !txReceiptUrl,
        })}
      >
        {withCheckbox && (
          <CheckBoxField
            title={intl.formatMessage(messages.checkboxText)}
            value={checked}
            onChange={onCheckboxClick}
          />
        )}

        <div className="TxExecutionBox__buttons-inner">
          {txStatus === 'confirmed' && !disableOnSuccess ? (
            <DefaultButton
              title={successButtonTitle || intl.formatMessage(messages.goToDashboard)}
              secondaryFill={true}
              onClick={() => history.push(goToAfterSuccess || '/dashboard')}
              type="button"
            />
          ) : (
            <DefaultButton
              title={buttonTitle || intl.formatMessage(messages.submit)}
              secondaryFill={true}
              disabled={disabled || loading}
              loading={loading}
              type="submit"
            />
          )}
        </div>
      </form>

      <style jsx={true}>{staticStyles}</style>
    </TxBoxWrapper>
  );
}
