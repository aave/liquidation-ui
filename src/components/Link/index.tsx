import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { useThemeContext } from 'libs/theme-provider';

interface LinkProps {
  title?: string;
  to: string;
  absolute?: boolean;
  inNewWindow?: boolean;
  color?: 'primary' | 'white';
  className?: string;
  children?: ReactNode;
  onClick?: any;
  disabled?: boolean;
}

export default function Link({
  title,
  to,
  absolute,
  inNewWindow,
  color = 'primary',
  className,
  children,
  disabled,
  onClick,
  ...props
}: LinkProps) {
  const { currentTheme } = useThemeContext();

  return (
    <>
      {!absolute ? (
        <NavLink
          onClick={(e: any) => e.stopPropagation()}
          className={classNames('Link', `Link__${color}`, className)}
          to={to}
          {...props}
        >
          {children}
          {title && <span>{title}</span>}
        </NavLink>
      ) : (
        <a
          onClick={(e: any) => e.stopPropagation()}
          className={classNames('Link', `Link__${color}`, className)}
          href={to}
          rel={inNewWindow ? 'noopener noreferrer' : undefined}
          target={inNewWindow ? '_blank' : undefined}
          {...props}
        >
          {children}
          {title && <span>{title}</span>}
        </a>
      )}

      <style jsx={true} global={true}>{`
        .Link__primary {
          color: ${currentTheme.primary.hex};
        }
      `}</style>
    </>
  );
}
