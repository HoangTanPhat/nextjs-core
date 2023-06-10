import LayoutContainer from "@/shared-components/layouts/LayoutContainer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createEmotionCache } from "@/lib/emotion";
import dynamic from "next/dynamic";
import localFont from "@next/font/local";

const clientSideEmotionCache = createEmotionCache();

const AllProviders = dynamic(() => import("@/context/AllProviders"));

const gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/SVN-Gilroy-Thin.otf",
      weight: "100",
    },
    {
      path: "../../public/fonts/SVN-Gilroy-Xlight.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/SVN-Gilroy-Light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/SVN-Gilroy-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/SVN-Gilroy-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/SVN-Gilroy-SemiBold.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/SVN-Gilroy-Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/SVN-Gilroy-Black.otf",
      weight: "800",
    },
    {
      path: "../../public/fonts/SVN-Gilroy-Heavy.otf",
      weight: "200",
    },
  ],
  variable: "--font-gilroy",
});

export interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: CustomAppProps) {
  return (
    <AllProviders>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
      </Head>
      <main className={`${gilroy.variable} font-gilroy`}>
        <Component {...pageProps} />
      </main>
    </AllProviders>
  );
}
