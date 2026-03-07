import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { getResume, mapLocaleToStrapi } from '@/src/lib/strapi';
import { AppLocale } from '@/app/[locale]/layout';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }];
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;

  const strapiLocale = mapLocaleToStrapi(locale as AppLocale);

  const resume = await getResume(strapiLocale);
  const file = resume?.resume?.at?.(0);

  if (!file?.url) {
    return new Response('Resume not found', { status: 404 });
  }

  const pdfRes = await fetch(`${process.env.API_URL}${file.url}`);
  const buffer = Buffer.from(await pdfRes.arrayBuffer());

  const dir = path.join(process.cwd(), 'public', locale);
  const filePath = path.join(dir, 'resume.pdf');

  await mkdir(dir, { recursive: true });
  await writeFile(filePath, buffer);

  return new Response(buffer, {
    headers: {
      'Content-Type': 'application/pdf',
    },
  });
}
