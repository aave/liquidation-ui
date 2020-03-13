import React from 'react';
import { useHistory } from 'react-router';
import { useIntl } from 'react-intl';
import classNames from 'classnames';

import { useThemeContext } from 'libs/theme-provider';

import messages from './messages';
import staticStyles from './style';

interface TextBackButtonProps {
  className?: string;
  goBack?: () => void;
}

export default function TextBackButton({ className, goBack }: TextBackButtonProps) {
  const intl = useIntl();
  const { currentTheme } = useThemeContext();
  const history = useHistory();

  return (
    <div className={classNames('TextBackButton', className)}>
      <button
        className="TextBackButton__button"
        onClick={goBack ? goBack : history.goBack}
        type="button"
      >
        <span className="TextBackButton__text">{intl.formatMessage(messages.goBack)}</span>
      </button>

      <style jsx={true}>{staticStyles}</style>
      <style jsx={true}>{`
        .TextBackButton {
          &:hover {
            .TextBackButton__text {
              color: ${currentTheme.secondary.hex};
            }
          }
          &__text {
            color: ${currentTheme.gray.hex};
          }
        }
      `}</style>
    </div>
  );
}
