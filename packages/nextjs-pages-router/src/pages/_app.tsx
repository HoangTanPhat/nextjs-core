import LayoutContainer from "@/shared-components/layouts/LayoutContainer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createEmotionCache } from "@/lib/emotion";
import dynamic from "next/dynamic";

const clientSideEmotionCache = createEmotionCache();

const AllProviders = dynamic(() => import("@/context/AllProviders"));

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
      <Component {...pageProps} />
    </AllProviders>
  );
}
