import LayoutContainer from "@/shared-components/layouts/LayoutContainer";
import Document, {
  DocumentContext,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { CustomAppProps } from "./_app";
import createEmotionServer from "@emotion/server/create-instance";
import { AppType } from "next/app";
import createEmotionCache from "@/lib/emotion";

CustomDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (
        App: React.ComponentType<React.ComponentProps<AppType> & CustomAppProps>
      ) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps: any = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

interface CustomDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}

export default function CustomDocument({
  emotionStyleTags,
}: CustomDocumentProps) {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        {/* <link
          rel="preload"
          href="/fonts/SVN-Gilroy-Bold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SVN-Gilroy-Light.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SVN-Gilroy-Medium.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SVN-Gilroy-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="/fonts/SVN-Gilroy-SemiBold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SVN-Gilroy-Thin.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        /> */}
        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
