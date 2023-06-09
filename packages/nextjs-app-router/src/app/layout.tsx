import AllProviders from "@/components/AllProviders";
import SplashScreen from "@/components/SplashScreen";
import LayoutContainer from "@/components/layout/LayoutContainer";
import createEmotionCache from "@/lib/emotion/createEmotionCache";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Nextjs Blog Template</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="emotion-insertion-point" content="" />
      </head>
      <body>
        <AllProviders>
          <LayoutContainer>{children}</LayoutContainer>
        </AllProviders>
      </body>
    </html>
  );
}
