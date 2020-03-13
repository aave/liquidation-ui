import React from 'react';
import classNames from 'classnames';

import { useThemeContext } from 'libs/theme-provider';

import staticStyles from './style';

interface CaptionProps {
  className?: string;
  title: string;
  description?: string;
  grayCaption?: boolean;
}

export default function Caption({
  className,
  title,
  description,
  grayCaption,
}: CaptionProps) {
  const { currentTheme } = useThemeContext();

  return (
    <div
      className={classNames('Caption', className, { CaptionGray: grayCaption })}
    >
      <h3 className="Caption__title">{title}</h3>
      {description && <p className="Caption__description">{description}</p>}

      <style jsx={true}>{staticStyles}</style>
      <style jsx={true}>{`
        .Caption {
          &__title {
            color: ${currentTheme.primary.hex};
          }
          &__description {
            color: ${currentTheme.gray.hex};
          }
        }

        .CaptionGray {
          .Caption__title {
            color: ${currentTheme.gray.hex};
          }
        }
      `}</style>
    </div>
  );
}
