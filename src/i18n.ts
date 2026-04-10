import { getRequestConfig } from 'next-intl/server';
import { routing } from './i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Fall back to default locale if missing or invalid
  if (!locale || !routing.locales.includes(locale as 'en' | 'tr')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
