import React, { useState, useEffect, useCallback } from 'react';
import Switch from 'react-switch';
import classNames from 'classnames';

import { useThemeContext } from 'libs/theme-provider';

import staticStyles from './style';

type CustomSwitchProps = {
  onSwitch: (value: boolean) => void;
  offLabel?: string;
  onLabel?: string;
  onColor?: string;
  offColor?: string;
  value: boolean;
  disabled?: boolean;
  swiperHeight: number;
  swiperWidth: number;
  withOutDelay?: boolean;
  className?: string;
  classNameSwiper?: string;
};

export default function CustomSwitch({
  onSwitch,
  onLabel,
  offLabel,
  value,
  onColor,
  offColor,
  disabled,
  swiperHeight,
  swiperWidth,
  withOutDelay,
  className,
  classNameSwiper,
}: CustomSwitchProps) {
  const { currentTheme } = useThemeContext();
  const [switching, setSwitching] = useState(value);

  const onClick = useCallback(() => {
    setSwitching(!value);
    if (!withOutDelay) {
      setTimeout(() => onSwitch(!value), 600);
    } else {
      onSwitch(!value);
    }
  }, [value, onSwitch, withOutDelay]);

  useEffect(() => {
    setSwitching(value);
  }, [value]);

  return (
    <div className={classNames('CustomSwitch', className)}>
      <div className="CustomSwitch__wrapper">
        {onLabel && offLabel && (
          <p className="CustomSwitch__label" style={{ color: switching ? onColor : offColor }}>
            {switching ? onLabel : offLabel}
          </p>
        )}

        <Switch
          onChange={onClick}
          checked={switching}
          offColor={offColor}
          onColor={onColor}
          height={swiperHeight}
          width={swiperWidth}
          disabled={disabled}
          uncheckedIcon={false}
          checkedIcon={false}
          className={classNames('CustomSwitch__swiper', classNameSwiper, {
            CustomSwitch__swiperDisabled: disabled,
          })}
        />
      </div>

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true} global={true}>{`
        .CustomSwitch {
          .CustomSwitch__swiperDisabled {
            .react-switch-bg {
              background: ${currentTheme.lightGrayBorder.hex} !important;
            }
          }
        }
      `}</style>
    </div>
  );
}
