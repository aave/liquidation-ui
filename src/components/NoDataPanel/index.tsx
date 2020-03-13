import React from 'react';
import { useHistory } from 'react-router';
import { useIntl } from 'react-intl';
import classNames from 'classnames';

import { useThemeContext } from 'libs/theme-provider';
import Link from 'components/Link';
import DefaultButton from '../DefaultButton';
import TextBackButton from 'components/TextBackButton';

import messages from './messages';
import staticStyles from './style';

interface NoDataPanelProps {
  title: string;
  description?: string;
  buttonTitle?: string;
  linkTo?: string;
  withBackButton?: boolean;
  withBigBackButton?: boolean;
  withFixedHeight?: boolean;
  withConnectButton?: boolean;
}

export default function NoDataPanel({
  title,
  description,
  buttonTitle,
  linkTo,
  withBackButton,
  withBigBackButton,
  withFixedHeight,
}: NoDataPanelProps) {
  const history = useHistory();
  const intl = useIntl();
  const { currentTheme } = useThemeContext();

  return (
    <div
      className={classNames('NoDataPanel', {
        NoDataPanel__fixedHeight: withFixedHeight,
      })}
    >
      <h3>{title}</h3>
      {description && <p>{description}</p>}

      {linkTo && buttonTitle && (
        <Link to={linkTo} className="ButtonLink">
          <DefaultButton
            title={buttonTitle}
            secondaryFill={true}
            mobileBig={true}
            buttonSize="big"
          />
        </Link>
      )}

      {withBackButton && <TextBackButton />}

      {withBigBackButton && (
        <div className="NoDataPanel__button-inner">
          <DefaultButton
            title={intl.formatMessage(messages.goBack)}
            secondaryFill={true}
            mobileBig={true}
            buttonSize="big"
            onClick={history.goBack}
          />
        </div>
      )}

      <style jsx={true}>{staticStyles}</style>
      <style jsx={true}>{`
        .NoDataPanel {
          h3 {
            color: ${currentTheme.secondary.hex};
          }
          p {
            color: ${currentTheme.gray.hex};
          }
        }
      `}</style>
    </div>
  );
}
