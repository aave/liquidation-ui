import React from 'react';

import { gradient } from 'libs/theme-provider';

import staticStyles from './style';

export interface TextGradientProps {
  className?: string;
  colorStart: number[];
  colorEnd: number[];
  title: string;
}

export default function GradientText({
  className,
  colorStart,
  colorEnd,
  title,
}: TextGradientProps) {
  const gradientBackground = gradient(90, `${colorStart}, 1`, 0, `${colorEnd}, 1`, 100);

  return (
    <p className="GradientText">
      <span className={className}>{title}</span>

      <style jsx={true}>{staticStyles}</style>
      <style jsx={true} global={true}>{`
        .GradientText span {
          background: ${gradientBackground};
        }
      `}</style>
    </p>
  );
}
