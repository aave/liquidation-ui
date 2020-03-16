import React, { ReactNode, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useIntl } from 'react-intl';
import classNames from 'classnames';

import { useThemeContext } from 'libs/theme-provider';
import Preloader from 'components/Preloader';
import DefaultButton from 'components/DefaultButton';
import WarningArea from 'components/WarningArea';
import CurrencyScreenCaption from 'components/CurrencyScreenWrapper/Caption';
import TxExecutionBox from './TxExecutionBox';
import TxBoxWrapper from '../TxBoxWrapper';
import TextBackButton from 'components/TextBackButton';

import { EthereumTransactionModelExtended } from '../../apollo/generated';

import messages from './messages';
import staticStyles from './style';

import successImage from './images/successImage.svg';
import darkSuccessImage from './images/darkSuccessImage.svg';

interface TxConfirmationViewProps {
  caption: string;
  description?: string;
  blockingError?: string;
  boxTitle: string;
  children: ReactNode;
  getTransactionsData: () => Promise<EthereumTransactionModelExtended[]>;
  txTransferType?: string;
  onMainTxExecuted?: () => void | Promise<void>;
  successButtonTitle?: string;
  goToAfterSuccess?: string;
  warningMessage?: string;
  preloaderDarkBackground?: boolean;
  className?: string;
}

type TxWithState = {
  data: EthereumTransactionModelExtended;
  executed?: boolean;
  confirmed?: boolean;
};

interface TxDataState {
  approvalTx?: TxWithState;
  transferTx?: TxWithState;
}

export default function TxConfirmationView({
  caption,
  description,
  blockingError,
  boxTitle,
  children,
  getTransactionsData,
  txTransferType,
  onMainTxExecuted,
  goToAfterSuccess,
  successButtonTitle,
  warningMessage,
  preloaderDarkBackground,
  className,
}: TxConfirmationViewProps) {
  const intl = useIntl();
  const history = useHistory();
  const { currentTheme, isDarkMode, sm } = useThemeContext();
  const [loadingTxData, setLoadingTxData] = useState(true);
  const [backendNotAvailable, setBackendNotAvailable] = useState(false);
  const [txsData, setTxsData] = useState<TxDataState>({});

  const handleGetTxData = async () => {
    try {
      const txs = await getTransactionsData();

      const approvalTx = txs.find(tx => tx.txType === 'ERC20_APPROVAL');
      const poolActionTx = txs.find(tx => ['DLP_ACTION', txTransferType].includes(tx.txType));

      setTxsData({
        approvalTx: approvalTx ? { data: approvalTx } : undefined,
        transferTx: poolActionTx ? { data: poolActionTx } : undefined,
      });
      setLoadingTxData(false);
    } catch (e) {
      setBackendNotAvailable(true);
      setLoadingTxData(false);
    }
  };

  useEffect(() => {
    handleGetTxData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loadingTxData) {
    return <Preloader withText={true} darkElementBackground={!sm && preloaderDarkBackground} />;
  }

  const handleApprovalTxExecuted = (txHash: string) =>
    setTxsData(currentTxsData => {
      if (currentTxsData.approvalTx && txHash) {
        return {
          ...currentTxsData,
          approvalTx: { ...currentTxsData.approvalTx, executed: true },
        };
      }
      return currentTxsData;
    });

  const handleMainTxExecuted = (txHash: string) =>
    setTxsData(currentTxsData => {
      if (currentTxsData.transferTx && txHash) {
        if (typeof onMainTxExecuted === 'function') {
          onMainTxExecuted();
        }
        return {
          ...currentTxsData,
          transferTx: { ...currentTxsData.transferTx, executed: true },
        };
      }
      return currentTxsData;
    });

  const handleMainTxConfirmed = () =>
    setTxsData(currentTxsData => {
      if (currentTxsData.transferTx) {
        return {
          ...currentTxsData,
          transferTx: { ...currentTxsData.transferTx, confirmed: true },
        };
      }
      return currentTxsData;
    });

  const mainTxConfirmed = txsData.transferTx && txsData.transferTx.confirmed;

  return (
    <div className={classNames('TxConfirmationView', className)}>
      <CurrencyScreenCaption
        title={!mainTxConfirmed ? caption : intl.formatMessage(messages.congratulations)}
        description={
          !mainTxConfirmed
            ? description || intl.formatMessage(messages.transactionDetails)
            : intl.formatMessage(messages.successfullyExecuted)
        }
      />

      <div className="TxConfirmationView__content-inner">
        {!mainTxConfirmed ? (
          <div className="TxConfirmationView__content">{children}</div>
        ) : (
          <img height={160} width={160} src={isDarkMode ? darkSuccessImage : successImage} alt="" />
        )}
      </div>

      {!!warningMessage && (
        <WarningArea title={warningMessage} withMargin={true} orangeFill={true} />
      )}

      <div className="TxConfirmationView__actions-inner">
        {!mainTxConfirmed && (
          <p className="TxConfirmationView__title">{intl.formatMessage(messages.nextSteps)}</p>
        )}

        {(!blockingError || (txsData.transferTx && txsData.transferTx.executed)) && (
          <>
            {txsData.approvalTx && (
              <TxExecutionBox
                title={intl.formatMessage(messages.approve)}
                txData={txsData.approvalTx.data.tx}
                onExecution={handleApprovalTxExecuted}
                disableOnSuccess={true}
                disabled={!!blockingError || txsData.approvalTx.executed}
              />
            )}

            {txsData.transferTx && (
              <TxExecutionBox
                title={boxTitle}
                txData={txsData.transferTx?.data.tx}
                onExecution={handleMainTxExecuted}
                onConfirmation={handleMainTxConfirmed}
                successButtonTitle={successButtonTitle}
                goToAfterSuccess={goToAfterSuccess}
                disabled={
                  !!blockingError ||
                  (txsData.approvalTx &&
                    !txsData.approvalTx.executed &&
                    !txsData.transferTx.executed)
                }
              />
            )}
          </>
        )}

        {((!!blockingError && txsData.transferTx && !txsData.transferTx.executed) ||
          backendNotAvailable) && (
          <TxBoxWrapper
            title={backendNotAvailable ? intl.formatMessage(messages.errorTitle) : boxTitle}
            description={
              backendNotAvailable ? intl.formatMessage(messages.errorDescription) : blockingError
            }
            status="error"
          >
            <div className="TxConfirmationView__button-inner">
              <DefaultButton
                title={intl.formatMessage(messages.goBack)}
                secondaryFill={true}
                onClick={history.goBack}
              />
            </div>
          </TxBoxWrapper>
        )}

        <TextBackButton className="TxConfirmationView__back-button" />
      </div>

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true}>{`
        .TxConfirmationView {
          &__content {
            border-color: ${currentTheme.lightGrayBorder.hex};
            background: ${currentTheme.whiteElement.hex};
          }
          &__title {
            color: ${currentTheme.gray.hex};
          }
        }
      `}</style>
    </div>
  );
}
