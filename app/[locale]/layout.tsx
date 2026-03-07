import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import '@/src/styles/variables.css';
import '@/src/styles/global.scss';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';

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

  return (
    <html lang={appLocale} suppressHydrationWarning>
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
