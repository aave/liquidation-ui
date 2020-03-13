import React from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';

import { useThemeContext } from 'libs/theme-provider';

import messages from './messages';
import staticStyles from './style';

interface NoDataGraphProps {
  className?: string;
}

export default function NoDataGraph({ className }: NoDataGraphProps) {
  const intl = useIntl();
  const { currentTheme } = useThemeContext();

  return (
    <div className={classNames('NoDataGraph', className)}>
      <p>{intl.formatMessage(messages.description)}</p>

      <style jsx={true}>{staticStyles}</style>
      <style jsx={true}>{`
        .NoDataGraph {
          border-color: ${currentTheme.lightGrayBorder.hex};
          p {
            color: ${currentTheme.lightGrayBorder.hex};
          }
        }
      `}</style>
    </div>
  );
}
