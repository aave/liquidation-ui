import React from 'react';
import Select from 'react-select';
import classNames from 'classnames';

import { useThemeContext, rgba } from 'libs/theme-provider';

import staticStyles from './style';

interface SelectFieldProps {
  className?: string;
  isSearchable?: boolean;
}

export default function SelectField({
  className,
  isSearchable = false,
  ...props
}: SelectFieldProps & any) {
  const { currentTheme, isDarkMode } = useThemeContext();

  const focusColor = rgba(`${currentTheme.secondary.rgb}, 0.5`);

  return (
    <>
      <Select
        className={classNames('SelectField', className, { SelectFieldDark: isDarkMode })}
        classNamePrefix="SelectField"
        isSearchable={isSearchable}
        hideSelectedOptions={true}
        {...props}
      />

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true} global={true}>{`
        .SelectField__control {
          background: ${currentTheme.whiteElement.hex};
          &--is-focused,
          &:hover {
            box-shadow: 0 1px 3px 0 ${focusColor};
          }
        }
        .SelectField__single-value {
          color: ${currentTheme.gray.hex};
        }
        .SelectField__indicator {
          svg {
            fill: ${currentTheme.secondary.hex};
          }
        }

        .SelectField__menu {
          background: ${currentTheme.whiteElement.hex};
        }
        .SelectField__option {
          background: ${currentTheme.whiteElement.hex};
          color: ${currentTheme.gray.hex};
          &:hover,
          &--is-selected {
            background: #f8f8f8;
          }
          &--is-selected {
            color: ${currentTheme.secondary.hex};
          }
        }

        .SelectFieldDark {
          .SelectField__control {
            background: ${currentTheme.whiteText.hex};
          }
          .SelectField__single-value {
            color: ${currentTheme.lightGrayBorder.hex};
          }
          .SelectField__menu {
            background: #f0f0f2;
          }
          .SelectField__option {
            background: #f0f0f2;
            color: ${currentTheme.lightGrayBorder.hex};
            &:hover,
            &--is-selected {
              background: #f8f8f8;
            }
            &--is-selected {
              color: ${currentTheme.secondary.hex};
            }
          }
        }
      `}</style>
    </>
  );
}
