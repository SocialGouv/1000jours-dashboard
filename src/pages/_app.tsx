import '../../styles/global.css';
import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import Link from "next/link";

import { fr } from "@codegouvfr/react-dsfr";
import { createNextDsfrIntegrationApi } from "@codegouvfr/react-dsfr/next-pagesdir";
import { MuiDsfrThemeProvider } from "@codegouvfr/react-dsfr/mui";
import { createEmotionSsrAdvancedApproach } from "tss-react/next";
import { useStyles } from "tss-react/dsfr";
import {
  Display,
  headerFooterDisplayItem,
} from "@codegouvfr/react-dsfr/Display";
import { Header } from "@codegouvfr/react-dsfr/Header";
import { Footer } from "@codegouvfr/react-dsfr/Footer";
import { init } from "@socialgouv/matomo-next";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Only in TypeScript projects
declare module "@codegouvfr/react-dsfr" {
  interface RegisterLink {
    Link: typeof Link;
  }
}

const { withDsfr, dsfrDocumentApi } = createNextDsfrIntegrationApi({
  defaultColorScheme: "system",
  doPersistDarkModePreferenceWithCookie: true,
  //Link,
  preloadFonts: [
    //"Marianne-Light",
    //"Marianne-Light_Italic",
    "Marianne-Regular",
    //"Marianne-Regular_Italic",
    "Marianne-Medium",
    //"Marianne-Medium_Italic",
    "Marianne-Bold",
    //"Marianne-Bold_Italic",
    //"Spectral-Regular",
    //"Spectral-ExtraBold"
  ],
});

const { augmentDocumentWithEmotionCache, withAppEmotionCache } =
  createEmotionSsrAdvancedApproach({
    key: "css",
  });

export { dsfrDocumentApi, augmentDocumentWithEmotionCache };

const brandTop = (
  <>
    République
    <br />
    Française
  </>
);

const homeLinkPops = {
  href: "/",
  title:
    "Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)",
};

const bottomLinks = [
  {
    text: "Conditions d'utilisation",
    linkProps: {
      href: "/cgu",
    },
  },
];

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql?nocache`,
  cache: new InMemoryCache()
});

function App({ Component, pageProps }: AppProps) {
  const { css } = useStyles();

  const router = useRouter();

  const contentSecurityPolicy = process.env.CONTENT_SECURITY_POLICY;

  useEffect(() => {
    init({
      url: process.env.NEXT_PUBLIC_MATOMO_URL ?? "",
      siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID ?? "",
    });
  }, []);

  return (
    <>
      <MuiDsfrThemeProvider>
        <Head>
          <title>Template SocialGouv</title>
          {contentSecurityPolicy && (
            <meta
              httpEquiv="Content-Security-Policy"
              content={contentSecurityPolicy}
            ></meta>
          )}
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Template de la fabrique des ministères sociaux."
          />
          ContentSecurityPolicy
        </Head>
        <Header
          brandTop={brandTop}
          serviceTitle="La fabrique numérique des ministères sociaux"
          serviceTagline="L'incubateur des services numériques du pôle ministériel"
          homeLinkProps={homeLinkPops}
          navigation={[
            {
              text: "Accueil",
              linkProps: {
                href: "/",
              },
              isActive: router.asPath === "/",
            },
            {
              text: "Ajouter une demande",
              linkProps: {
                href: "/ajout-demande",
              },
              isActive: router.asPath === "/ajout-demande",
            },
            {
              text: "Liste des demandes",
              linkProps: {
                href: "/liste-demandes",
              },
              isActive: router.asPath === "/liste-demandes",
            },
          ]}
          quickAccessItems={[headerFooterDisplayItem]}
        />
        <div
          className={css({
            margin: "auto",
            maxWidth: 1000,
            ...fr.spacing("padding", {
              topBottom: "10v",
            }),
          })}
        >
          <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
          </SessionProvider>
        </div>
        <Footer
          brandTop={brandTop}
          accessibility="non compliant"
          contentDescription={`La Fabrique Numérique des Ministères Sociaux`}
          homeLinkProps={homeLinkPops}
          accessibilityLinkProps={{ href: "/accessibilite" }}
          termsLinkProps={{ href: "/mentions-legales" }}
          personalDataLinkProps={{ href: "/politique-confidentialite" }}
          bottomItems={[...bottomLinks, headerFooterDisplayItem]}
        />
        <Display />
      </MuiDsfrThemeProvider>
    </>
  );
}

export default withAppEmotionCache(withDsfr(App));