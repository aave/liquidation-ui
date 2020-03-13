const extractReactIntlMessages = require('extract-react-intl-messages');

const locales = ['default', 'en', 'es', 'cn', 'ru'];
const pattern = 'src/**/*.ts';
const buildDir = 'src/translations';
const defaultLocale = 'default';

extractReactIntlMessages(locales, pattern, buildDir, { defaultLocale }).then(() => {
  console.log('finish');
});
