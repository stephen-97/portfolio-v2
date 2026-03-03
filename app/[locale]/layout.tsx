import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import '@/src/styles/variables.css';
import '@/src/styles/global.scss';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { cookies } from 'next/headers';

const locales = ['en', 'fr'] as const;

export type AppLocale = (typeof locales)[number];

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Stephen Loiola Bastos Portfolio',
  description: 'Portfolio by Stephen Loiola Bastos',
};

type RootLayoutProps = {
  params: Promise<{
    locale: AppLocale;
  }>;
  children: React.ReactNode;
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const cookieStore = await cookies();
  const themeFromCookie = cookieStore.get('theme')?.value;

  const theme =
    themeFromCookie === 'dark' || themeFromCookie === 'light'
      ? themeFromCookie
      : undefined;

  return (
    <html
      lang={locale}
      {...(theme ? { 'data-theme': theme } : {})}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              const stored = localStorage.getItem('theme');
              if (stored === 'dark' || stored === 'light') {
                document.documentElement.setAttribute('data-theme', stored);
                document.cookie = 'theme=' + stored + '; Path=/; Max-Age=31536000; SameSite=Lax';
              }
            } catch (e) {}
          `}
        </Script>
      </head>

      <body
        className={`${spaceGrotesk.variable} font-sans antialiased`}
        style={{
          fontFamily: '"Space Grotesk", system-ui, sans-serif',
        }}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
