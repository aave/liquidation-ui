import React, { ChangeEvent } from 'react';
import classNames from 'classnames';

import { useThemeContext } from 'libs/theme-provider';

import staticStyles from './style';

interface BasicFieldProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  type: string;
  isRequired?: boolean;
  placeholder?: string;
  step?: string;
  additionalFunctionOnChange?: any
}

export default function BasicField({
  value,
  onChange,
  className,
  type,
  isRequired,
  placeholder,
  step,
  additionalFunctionOnChange,
  ...props
}: BasicFieldProps) {
  const { currentTheme } = useThemeContext();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onChange(event.target.value);
    !!additionalFunctionOnChange && additionalFunctionOnChange();
  };

  return (
    <div className={classNames('BasicField', className)}>
      <input
        value={value}
        onChange={handleOnChange}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        step={step}
        {...props}
      />

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true} global={true}>{`
        .BasicField {
          input {
            color: ${currentTheme.gray.hex};
            &::placeholder {
              color: ${currentTheme.gray.hex};
            }
          }
        }
      `}</style>
    </div>
  );
}
