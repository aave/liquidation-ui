import React from 'react';
import { CustomFormatConfig, FormattedNumber } from 'react-intl';
import { UnifiedNumberFormatOptions } from '@formatjs/intl-unified-numberformat';

interface CompactNumberProps {
  value: string | number;
}

export function CompactNumber({
  value,
  maximumFractionDigits = 2,
  ...props
}: CompactNumberProps & UnifiedNumberFormatOptions & CustomFormatConfig) {
  let formattedValue = Number(value);
  let postfix = '';
  const significantDigits = String(value).split('.')[0].length;
  if (significantDigits > 12) {
    formattedValue = formattedValue / 10 ** 12;
    postfix = 'T';
  } else if (significantDigits > 9) {
    formattedValue = formattedValue / 10 ** 9;
    postfix = 'B';
  } else if (significantDigits > 6) {
    formattedValue = formattedValue / 10 ** 6;
    postfix = 'M';
  } else if (significantDigits > 3) {
    formattedValue = formattedValue / 10 ** 3;
    postfix = 'K';
  }
  return (
    <>
      <FormattedNumber
        value={formattedValue}
        maximumFractionDigits={maximumFractionDigits}
        {...props}
      />
      {postfix}
    </>
  );
}
