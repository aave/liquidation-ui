import React, { ReactNode, useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';

import { getCurrentLocale } from './get-language';

import enMessages from '../../translations/en.json';
import esMessages from '../../translations/es.json';
import cnMessages from '../../translations/cn.json';
import ruMessages from '../../translations/ru.json';

interface LanguageContext {
  currentLangSlug: string;
  changeLang: (langCode: string) => void;
}

const messages: {
  [key: string]: {};
} = {
  en: enMessages,
  es: esMessages,
  cn: cnMessages,
  ru: ruMessages,
};

const LanguageContext = React.createContext({} as LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLang, setCurrentLangSlug] = useState(getCurrentLocale());

  const changeLang = (langCode: string) => {
    localStorage.setItem('locale', langCode);
    setCurrentLangSlug(langCode);
  };

  const currentLangSlug = currentLang.split('-')[0];

  // TODO: change the <IntlProvider> locale and messages to currentLangSlug when translation is enabled
  return (
    <LanguageContext.Provider value={{ currentLangSlug, changeLang }}>
      <IntlProvider locale="en" messages={messages['en']}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}

export const useLanguageContext = () => useContext(LanguageContext);
