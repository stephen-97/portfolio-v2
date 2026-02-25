import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'fr'] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale =
    requested && locales.includes(requested as any) ? requested : 'en';

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
