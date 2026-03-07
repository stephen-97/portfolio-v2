import { AppLocale } from '@/app/[locale]/layout';

const STRAPI_URL = process.env.API_URL!;
const STRAPI_TOKEN = process.env.API_TOKEN!;

export type StrapiLocale = 'fr-FR' | 'en';

export async function getNavigation(locale: StrapiLocale) {
  const res = await fetch(
    `${STRAPI_URL}/api/navigation?locale=${locale}&populate[links]=*&populate[mediaLinks][populate][icon]=*`,
    {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      next: { revalidate: 3600 },
    },
  );

  const text = await res.text();

  if (!res.ok) {
    throw new Error(`Failed: ${res.status} - ${text}`);
  }

  const json = JSON.parse(text);
  return json.data;
}

export async function getHomePage(locale: StrapiLocale) {
  const res = await fetch(
    `${STRAPI_URL}/api/home-page?locale=${locale}&` +
      `populate[heroSection][populate][statistic]=*&` +
      `populate[aboutMeSection][populate][sectionTitle]=*&` +
      `populate[skillsSection][populate][sectionTitle]=*&` +
      `populate[skillsSection][populate][skillsBlock][populate][skill]=*&` +
      `populate[skillsSection][populate][skillsBlock][populate][icon_skill]=*&` +
      `populate[projectsSection][populate][sectionTitle]=*&` +
      `populate[projectsSection][populate][projectBlock][populate][skills]=*&` +
      `populate[projectsSection][populate][projectBlock][populate][links][populate][icon]=*&` +
      `populate[worksSection][populate][sectionTitle]=*&` +
      `populate[worksSection][populate][workBlock][populate]=*`,
    {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      next: { revalidate: 3600 },
    },
  );

  const text = await res.text();

  if (!res.ok) {
    throw new Error(`Failed: ${res.status} - ${text}`);
  }

  const json = JSON.parse(text);
  return json.data;
}

const localeMap: Record<AppLocale, StrapiLocale> = {
  fr: 'fr-FR',
  en: 'en',
};

export function mapLocaleToStrapi(locale: AppLocale): StrapiLocale {
  return localeMap[locale];
}

export async function getResume(locale: StrapiLocale) {
  const res = await fetch(
    `${STRAPI_URL}/api/resume?locale=${locale}&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      next: { revalidate: 3600 },
    },
  );

  const text = await res.text();

  if (!res.ok) {
    throw new Error(`Failed: ${res.status} - ${text}`);
  }

  const json = JSON.parse(text);

  return json.data;
}
