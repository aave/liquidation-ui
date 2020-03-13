import React from 'react';
import { useIntl } from 'react-intl';

import { useThemeContext } from 'libs/theme-provider';
import CustomSwitch from 'components/CustomSwitch';

import messages from './messages';
import staticStyles from './style';

export default function DarkModeToggleButton() {
  const intl = useIntl();
  const { currentTheme, isDarkMode, changeTheme, sm } = useThemeContext();

  const toggleDarkMode = () => {
    if (isDarkMode) {
      changeTheme('defaultTheme');
    } else {
      changeTheme('darkTheme');
    }
  };

  return (
    <div className="DarkModeToggleButton">
      <p className="DarkModeToggleButton__title">{intl.formatMessage(messages.themeTitle)}:</p>
      <CustomSwitch
        onLabel={intl.formatMessage(messages.labelOn)}
        offLabel={intl.formatMessage(messages.labelOff)}
        onColor={isDarkMode ? currentTheme.whiteElement.hex : currentTheme.gray.hex}
        offColor={currentTheme.lightGray.hex}
        value={isDarkMode}
        swiperHeight={!sm ? 17 : 24}
        swiperWidth={!sm ? 31 : 44}
        onSwitch={toggleDarkMode}
        withOutDelay={true}
        className="DarkModeToggleButton__switcher"
      />

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true} global={true}>{`
        .DarkModeToggleButton {
          &__title {
            color: ${currentTheme.lightGray.hex};
          }

          &__switcher {
            .CustomSwitch__label {
              color: ${currentTheme.lightGray.hex} !important;
            }
          }
        }
      `}</style>
    </div>
  );
}
