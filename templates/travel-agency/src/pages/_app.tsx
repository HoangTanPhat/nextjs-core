import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/lib/emotion";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const clientSideEmotionCache = createEmotionCache();

const AllProviders = dynamic(() => import("@/context/AllProviders"));

const gilroy = localFont({
  src: [
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
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    const handleStart = (url: string) => {
      setLoading(true);
      NProgress.start();
      console.log("loading start", loading);
    };

    const handleStop = (url: string) => {
      setLoading(false);
      NProgress.done();
      console.log("loading stop", loading);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [loading, router.events]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
      </Head>
      <AllProviders>
        <main className={`${gilroy.variable} font-gilroy`}>
          <Component {...pageProps} />
        </main>
      </AllProviders>
    </CacheProvider>
  );
}
