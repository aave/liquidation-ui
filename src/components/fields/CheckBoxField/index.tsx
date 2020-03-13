import React from 'react';
import classNames from 'classnames';

import { useThemeContext } from 'libs/theme-provider';

import staticStyles from './style';

interface CheckBoxFieldProps {
  className?: string;
  title: string;
  value: boolean;
  name?: string;
  onChange: () => void;
}

export default function CheckBoxField({
  className,
  title,
  value,
  onChange,
  name,
}: CheckBoxFieldProps) {
  const { currentTheme } = useThemeContext();

  return (
    <div className={classNames('CheckBoxField', className)}>
      <input checked={value} id={`${name}FieldId`} type="checkbox" onChange={onChange} />

      <label className="CheckBoxField__label" htmlFor={`${name}FieldId`}>
        <span>
          <svg viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1" />
          </svg>
        </span>
        <p>{title}</p>
      </label>

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true} global={true}>{`
        .CheckBoxField input:disabled + label {
          color: ${currentTheme.disabledElement.hex};
        }

        .CheckBoxField__label span:first-child {
          border: 1px solid ${currentTheme.gray.hex};
        }

        .CheckBoxField__label:hover span:first-child {
          border-color: ${currentTheme.primary.hex};
        }

        .CheckBoxField__label span:first-child svg {
          stroke: ${currentTheme.whiteText.hex};
        }

        .CheckBoxField input[type='checkbox']:disabled + .CheckBoxField__label span:first-child {
          border-color: ${currentTheme.primary.hex};
          background: ${currentTheme.primary.hex};
        }

        .CheckBoxField input:checked + .CheckBoxField__label span:first-child {
          background: ${currentTheme.primary.hex};
          border-color: ${currentTheme.primary.hex};
        }
      `}</style>
    </div>
  );
}
