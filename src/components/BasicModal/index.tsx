import React, { ReactNode } from 'react';
import Modal from 'react-modal';

import { useThemeContext } from 'libs/theme-provider';

import staticStyles from './style';

import closeButton from './images/closeButton.svg';
import closeButtonDark from './images/closeButtonDark.svg';

export interface BasicModalProps {
  isVisible: boolean;
  onBackdropPress: () => void;
  children: ReactNode;
  withCloseButton?: boolean;
  className?: string;
}

export default function BasicModal({
  isVisible,
  onBackdropPress,
  children,
  withCloseButton,
  className,
}: BasicModalProps) {
  const { currentTheme, isDarkMode } = useThemeContext();

  return (
    <Modal
      className={className}
      isOpen={isVisible}
      onRequestClose={onBackdropPress}
      ariaHideApp={false}
    >
      {children}

      {withCloseButton && (
        <button className="BasicModal__close" type="button" onClick={onBackdropPress}>
          <img src={isDarkMode ? closeButtonDark : closeButton} height={20} width={20} alt="Aave" />
        </button>
      )}

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true} global={true}>
        {`
          .ReactModal__Content {
            background: ${currentTheme.whiteElement.hex} !important;
          }
        `}
      </style>
    </Modal>
  );
}
