import React from 'react';
import classNames from 'classnames';

import { useThemeContext } from 'libs/theme-provider';
import Link from 'components/Link';

import staticStyles from './style';

import twitterIcon from './images/twitterIcon.svg';
import darkTwitterIcon from './images/darkTwitterIcon.svg';
import instagramIcon from './images/instagramIcon.svg';
import darkInstagramIcon from './images/darkInstagramIcon.svg';
import githubIcon from './images/githubIcon.svg';
import darkGithubIcon from './images/darkGithubIcon.svg';
import discordIcon from './images/discordIcon.svg';
import darkDiscordIcon from './images/darkDiscordIcon.svg';

const icons = [
  {
    url: 'https://twitter.com/aaveaave',
    icon: twitterIcon,
    darkIcon: darkTwitterIcon,
  },
  {
    url: 'https://www.instagram.com/aave.aave/',
    icon: instagramIcon,
    darkIcon: darkInstagramIcon,
  },
  {
    url: 'https://github.com/aave/aave-protocol',
    icon: githubIcon,
    darkIcon: darkGithubIcon,
  },
  {
    url: 'https://discordapp.com/invite/AnSqnvV',
    icon: discordIcon,
    darkIcon: darkDiscordIcon,
  },
];

interface SocialIconsProps {
  className?: string;
  linkClassName?: string;
  iconHeight: number;
  iconWidth: number;
}

export default function SocialIcons({
  className,
  linkClassName,
  iconHeight,
  iconWidth,
}: SocialIconsProps) {
  const { isDarkMode } = useThemeContext();
  return (
    <div className={classNames('SocialIcons', className)}>
      {icons.map((item, index) => (
        <React.Fragment key={index}>
          {item.url && (
            <Link to={item.url} className={linkClassName} absolute={true} inNewWindow={true}>
              <img
                src={isDarkMode ? item.darkIcon : item.icon}
                height={iconHeight}
                width={iconWidth}
                alt="Aave"
              />
            </Link>
          )}
        </React.Fragment>
      ))}

      <style jsx={true}>{staticStyles}</style>
    </div>
  );
}
