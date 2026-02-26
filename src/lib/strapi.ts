const STRAPI_URL = process.env.API_URL!;
const STRAPI_TOKEN = process.env.API_TOKEN!;

export async function getNavigation() {
  const res = await fetch(
    `${STRAPI_URL}/api/navigation?populate[links]=*&populate[mediaLinks][populate][icon]=*`,
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

export async function getHomePage() {
  const res = await fetch(
    `${STRAPI_URL}/api/home-page?` +
      `populate[hero][populate][0]=statistics&` +
      `populate[aboutMe][populate][0]=sectionTitle&` +
      `populate[skills][populate][skillsBlock][populate][skillList]=*&` +
      `populate[projects][populate][projectBlocks][populate][skills]=*&` +
      `populate[projects][populate][projectBlocks][populate][links][populate][icon]=*&` +
      `populate[works][populate]=*`,
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
