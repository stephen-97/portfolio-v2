import { NextRequest } from 'next/server';
import { getResume, mapLocaleToStrapi } from '@/src/lib/strapi';
import { AppLocale } from '@/app/[locale]/layout';

export const runtime = 'nodejs';

export async function GET({ params }: { params: { locale: AppLocale } }) {
  const { locale } = await params;

  try {
    const strapiLocale = mapLocaleToStrapi(locale);

    const resume = await getResume(strapiLocale);
    const file = resume?.resume?.at?.(0);

    if (!file?.url) {
      return new Response('Resume not found', { status: 404 });
    }

    const strapiBaseUrl = process.env.API_URL;

    if (!strapiBaseUrl) {
      throw new Error('STRAPI_URL is not defined');
    }

    const fileUrl = `${strapiBaseUrl}${file.url}`;

    const response = await fetch(fileUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch PDF from Strapi');
    }

    const pdfBuffer = await response.arrayBuffer();

    return new Response(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="resume.pdf"',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
