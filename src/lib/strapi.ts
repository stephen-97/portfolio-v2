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
      cache: 'no-store',
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
      cache: 'no-store',
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
      cache: 'no-store',
    },
  );

  const text = await res.text();

  if (!res.ok) {
    throw new Error(`Failed: ${res.status} - ${text}`);
  }

  const json = JSON.parse(text);

  return json.data;
}

/**
 * {
 *   "data": {
 *     "id": 3,
 *     "documentId": "todqida8cxx8pq725xgiyara",
 *     "createdAt": "2026-03-03T15:42:07.292Z",
 *     "updatedAt": "2026-03-03T15:54:42.930Z",
 *     "publishedAt": "2026-03-03T15:54:42.948Z",
 *     "locale": "en",
 *     "resume": [
 *       {
 *         "id": 1,
 *         "documentId": "qsp5uv5amnple9ase6p0hywm",
 *         "name": "Developer JavaScript & sdsd.pdf",
 *         "alternativeText": "",
 *         "caption": "",
 *         "focalPoint": null,
 *         "width": null,
 *         "height": null,
 *         "formats": null,
 *         "hash": "Developer_Java_Script_and_Type_Scriptsds
 *         "ext": ".pdf",
 *         "mime": "application/pdf",
 *         "size": 444.58,
 *         "url": "/uploads/Developer_Java_Script_sdsdS_CV_4aec0f334d.pdf",
 *         "previewUrl": null,
 *         "provider": "local",
 *         "provider_metadata": null,
 *         "createdAt": "2026-03-03T15:38:49.955Z",
 *         "updatedAt": "2026-03-03T15:38:55.002Z",
 *         "publishedAt": "2026-03-03T15:38:49.955Z"
 *       }
 *     ],
 *     "localizations": []
 *   },
 *   "meta": {
 *
 *   }
 * }
 */
