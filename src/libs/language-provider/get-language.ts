export const getCurrentLocale = () => {
  const locale = localStorage.getItem('locale');
  const browserLang = (navigator.languages && navigator.languages[0]) || navigator.language;
  const browserLangShort = (browserLang && browserLang.slice(0, 2)) || '';
  const userLangs = locale || browserLang || browserLangShort || 'en';

  return userLangs;
};
