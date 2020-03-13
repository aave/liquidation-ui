import React from 'react';
import { useIntl } from 'react-intl';

import DefaultButton from 'components/DefaultButton';
import TextBackButton from 'components/TextBackButton';

import messages from './messages';
import staticStyles from './style';

interface ButtonsProps {
  onClick?: () => void;
  goBack?: () => void;
  disabled?: boolean;
  primaryFill?: boolean;
  buttonType?: 'button' | 'submit';
}

export default function Buttons({
  onClick,
  disabled,
  goBack,
  primaryFill,
  buttonType,
}: ButtonsProps) {
  const intl = useIntl();

  return (
    <div className="Buttons">
      <DefaultButton
        title={intl.formatMessage(messages.buttonTitleContinue)}
        onClick={onClick}
        buttonSize="big"
        mobileBig={true}
        secondaryFill={!primaryFill}
        disabled={disabled}
        type={buttonType || 'button'}
      />
      <TextBackButton goBack={goBack} />

      <style jsx={true}>{staticStyles}</style>
    </div>
  );
}
