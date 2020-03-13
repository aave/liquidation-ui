import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';

import { useThemeContext } from 'libs/theme-provider';
import BasicField from '../BasicField';

import messages from './messages';
import staticStyles from './style';

import search from './images/search.svg';
import searchDark from './images/searchDark.svg';

export interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export default function SearchField({
  value,
  onChange,
  className,
  placeholder,
  ...props
}: SearchFieldProps) {
  const intl = useIntl();
  const { isDarkMode, currentTheme } = useThemeContext();
  const [onFocus, setFocus] = useState(false);

  useEffect(() => {
    return () => {
      onChange('');
    };
  }, [onChange]);

  return (
    <div
      className={classNames('SearchField', className, {
        SearchFieldFocused: onFocus,
        SearchFieldDark: isDarkMode,
      })}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <img src={isDarkMode ? searchDark : search} alt="search" width={15} height={15} />
      <BasicField
        value={value}
        onChange={onChange}
        placeholder={placeholder || intl.formatMessage(messages.placeholder)}
        type="search"
        {...props}
      />

      <style jsx={true}>{staticStyles}</style>
      <style jsx={true}>{`
        @import 'src/_mixins/screen-size';
        .SearchField {
          &:hover {
            &:after {
              background: ${currentTheme.primary.hex};
            }
          }
          &:after {
            background: ${currentTheme.lightGray.hex};
            @include respond-to(sm) {
              border-color: ${currentTheme.lightGray.hex};
            }
          }
        }

        .SearchFieldDark {
          &:after {
            background: ${currentTheme.lightGrayBorder.hex};
            @include respond-to(sm) {
              border-color: ${currentTheme.lightGrayBorder.hex};
            }
          }
        }

        .SearchFieldFocused {
          &:after {
            background: ${currentTheme.primary.hex};
            @include respond-to(sm) {
              border-color: ${currentTheme.primary.hex};
            }
          }
        }
      `}</style>
    </div>
  );
}
