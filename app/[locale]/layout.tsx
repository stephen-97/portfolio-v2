import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import '@/src/styles/variables.css';
import '@/src/styles/global.scss';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ThemeRuntime } from '@/src/lib/theme-script';
import { Header } from '@/src/components/organisms/header/header';
import Footer from '@/src/components/organisms/footer/footer';
import { getNavigation, mapLocaleToStrapi } from '@/src/lib/strapi';

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
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale as AppLocale)) {
    notFound();
  }

  const appLocale = locale as AppLocale;

  setRequestLocale(appLocale);

  const messages = await getMessages();

  const strapiLocale = mapLocaleToStrapi(appLocale);
  const navigation = await getNavigation(strapiLocale);

  const quickLinks = navigation.links;
  const socialMediaLinks = navigation.mediaLinks;

  return (
    <html lang={appLocale} suppressHydrationWarning>
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function () {
        const el = document.documentElement;

        function getSystemTheme() {
          return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
        }

        try {
          const stored = localStorage.getItem('theme');
          const theme =
            stored === 'system'
              ? getSystemTheme()
              : stored || getSystemTheme();

          el.setAttribute('data-theme', theme);
          el.style.colorScheme = theme;
        } catch {}
      })();`,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased`}
        style={{
          fontFamily: '"Space Grotesk", system-ui, sans-serif',
        }}
        suppressHydrationWarning
      >
        <ThemeRuntime />

        <NextIntlClientProvider messages={messages}>
          <Header quickLinks={quickLinks} locale={locale as AppLocale} />

          {children}

          <Footer quickLinks={quickLinks} socialMediaLinks={socialMediaLinks} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
