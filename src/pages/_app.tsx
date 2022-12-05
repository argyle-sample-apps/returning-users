import { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import { BASE_PATH } from "consts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";
import { deleteCookie } from "cookies-next";
import { Button } from "components/button";
import { FadeAnimation } from "components/fade-animation";
import { Subheading } from "components/typography";
import axios from "axios";
import Script from "next/script";
import { useSetAtom } from "jotai";
import { linkScriptLoadedAtom } from "stores/global";

axios.defaults.baseURL = BASE_PATH;

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function ErrorFallback({ resetErrorBoundary }: any) {
  return (
    <div role="alert" className="p-4">
      <Subheading>Something went wrong</Subheading>
      <div className="mt-8">
        <Button onClick={resetErrorBoundary}>Try again</Button>
      </div>
    </div>
  );
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  const setIsLinkScriptLoaded = useSetAtom(linkScriptLoadedAtom);

  return getLayout(
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes"
        />
        <meta property="title" content="Returning Users" />
        <meta
          name="description"
          content="Learn when and how to return users to Link for additional actions."
        />
        <title>User Notification App</title>

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://sampleapps.argyle.com/returning-users"
        />
        <meta property="og:title" content="Returning Users" />
        <meta
          property="og:description"
          content="Learn when and how to return users to Link for additional actions."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/argyle-media/image/upload/v1669980462/argyle-x/meta/returning-users-meta.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://sampleapps.argyle.com/returning-users"
        />
        <meta property="twitter:title" content="Returning Users" />
        <meta
          property="twitter:description"
          content="Learn when and how to return users to Link for additional actions."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/argyle-media/image/upload/v1669980462/argyle-x/meta/returning-users-meta.png"
        />
        <link
          rel="preload"
          href={BASE_PATH + "/fonts/CircularXXWebLight.woff2"}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={BASE_PATH + "/fonts/CircularXXWebMedium.woff2"}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={BASE_PATH + "/fonts/CircularXXWebRegular.woff2"}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="manifest" href={BASE_PATH + "/manifest.json"} />
        <link
          rel="apple-touch-icon"
          href={BASE_PATH + "/apple-icon.png"}
        ></link>
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Script
        src="https://plugin.argyle.com/argyle.web.v3.js"
        onLoad={() => setIsLinkScriptLoaded(true)}
      />
      <QueryClientProvider client={queryClient}>
        <LazyMotion features={domAnimation}>
          <AnimatePresence exitBeforeEnter={false}>
            <FadeAnimation name={router.route}>
              <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={async () => {
                  deleteCookie("argyle-x-session");
                  deleteCookie("argyle-x-user-id");
                  deleteCookie("argyle-x-user-token");
                }}
              >
                <Component {...pageProps} />
              </ErrorBoundary>
            </FadeAnimation>
          </AnimatePresence>
        </LazyMotion>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
