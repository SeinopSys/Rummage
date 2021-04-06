import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import { AppComponent } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import 'src/app.scss';
import { SITE_TITLE } from 'src/config';
import 'src/fontawesome';
import { wrapper } from 'src/store';

const App: AppComponent = ({ Component, pageProps }) => {
  const { asPath, defaultLocale, locale, locales } = useRouter();

  const languageAlternates = useMemo(
    () =>
      locales?.map((hrefLang) => ({
        hrefLang,
        href: (hrefLang !== defaultLocale ? `/${hrefLang}` : '') + asPath,
      })),
    [asPath, defaultLocale, locales],
  );

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/flags/ru.svg" />

        <title>{SITE_TITLE}</title>
      </Head>
      <DefaultSeo
        title={SITE_TITLE}
        openGraph={{
          type: 'website',
          locale,
          site_name: 'Rummage',
        }}
        languageAlternates={languageAlternates}
      />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(appWithTranslation(App));
