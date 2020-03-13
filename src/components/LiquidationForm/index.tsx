import React, { FormEvent, useState } from 'react';
import BigNumber from 'bignumber.js';

import { useThemeContext } from 'libs/theme-provider';
import AmountField from 'components/fields/AmountField';
import DefaultButton from 'components/DefaultButton';

import staticStyles from './style';

interface LiquidationFormProps {
  onSubmit: (amount: string) => void;
  maxAmount: string;
  currencySymbol: string;
}

export default function LiquidationForm({
  onSubmit,
  maxAmount,
  currencySymbol,
}: LiquidationFormProps) {
  const { currentTheme } = useThemeContext();

  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleAmountChange = (newAmount: string) => {
    const newAmountValue = new BigNumber(newAmount);
    setError('');
    if (newAmountValue.gt(maxAmount)) {
      return setAmount(maxAmount);
    }
    if (newAmountValue.isNegative()) {
      return setAmount('0');
    }
    return setAmount(newAmount);
  };

  const handleMaxButtonClick = () => {
    setAmount(maxAmount);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!new BigNumber(amount).isNaN() && amount !== '0') {
      return onSubmit(amount);
    }

    setError('Please input the correct amount');
  };

  return (
    <form className="LiquidationForm" onSubmit={handleSubmit}>
      <AmountField
        currency={currencySymbol}
        value={amount}
        onChange={handleAmountChange}
        error={error}
        withMaxButton={true}
        maxButtonClick={handleMaxButtonClick}
      />

      <DefaultButton title="LIQUIDATE" type="submit" />

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true}>{`
        .LiquidationForm {
          border-top: 1px solid ${currentTheme.lightGrayBorder.hex};
        }
      `}</style>
    </form>
  );
}
