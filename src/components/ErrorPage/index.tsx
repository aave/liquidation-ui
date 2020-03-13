import React, { ReactNode } from 'react';
import { useHistory } from 'react-router';
import { useIntl } from 'react-intl';
import classNames from 'classnames';

import { useThemeContext } from 'libs/theme-provider';
import DefaultButton from '../DefaultButton';

import messages from './messages';
import staticStyles from './style';

import bottomBg from './images/bg.svg';
import errorImage from './images/errorImage.svg';
import mobileErrorImage from './images/mobileErrorImage.svg';

type ErrorPageProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  buttonType?: 'reload' | 'back';
  errorCode?: boolean;
  image?: boolean;
};

export default function ErrorPage({
  image,
  title,
  description,
  buttonType,
  children,
  errorCode,
}: ErrorPageProps) {
  const intl = useIntl();
  const history = useHistory();
  const { currentTheme, isDarkMode, sm } = useThemeContext();

  return (
    <div className="ErrorPage">
      <div className="ErrorPage__content">
        {image && (
          <div className="ErrorPage__image-inner">
            <img src={sm ? mobileErrorImage : errorImage} alt="Error" />
          </div>
        )}

        {title && (
          <h2
            className={classNames('ErrorPage__title', {
              ErrorPage__titleBig: errorCode,
            })}
          >
            {title}
          </h2>
        )}

        {description && <p className="ErrorPage__description">{description}</p>}

        {children}

        <div className="ErrorPage__buttons-inner">
          {buttonType === 'reload' && (
            <DefaultButton
              title={intl.formatMessage(messages.buttonReload)}
              mobileBig={true}
              gradientFill={true}
              onClick={() => window.location.reload()}
            />
          )}
          {buttonType === 'back' && (
            <DefaultButton
              title={intl.formatMessage(messages.buttonBack)}
              mobileBig={true}
              gradientFill={true}
              onClick={history.goBack}
            />
          )}
        </div>
      </div>

      {!isDarkMode && <img className="ErrorPage__bottomBg" src={bottomBg} alt="Error" />}

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true} global={true}>{`
        .ErrorPage {
          background-color: ${currentTheme.whiteBackground.hex};

          &__title {
            color: ${currentTheme.primary.hex};
          }

          &__description {
            color: ${currentTheme.gray.hex};
          }
        }
      `}</style>
    </div>
  );
}
