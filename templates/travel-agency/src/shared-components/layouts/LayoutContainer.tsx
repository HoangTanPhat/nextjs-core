import { NextSeo, NextSeoProps } from "next-seo";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { baseUrl } from "@/lib/contants";

type LayoutContainerProps = NextSeoProps & {
  children: React.ReactNode;
  headerElevation?: boolean;
  thumbnail?: string;
};

export default function LayoutContainer({
  headerElevation = false,
  children,
  thumbnail,
  ...props
}: LayoutContainerProps) {
  const router = useRouter();
  const {
    title,
    description = "A travel agency that gives you the best experience",
    ...restProps
  } = props;
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        defaultTitle={process.env.NEXT_PUBLIC_APP_NAME}
        openGraph={{
          url: `${baseUrl}${router.asPath}`,
          type: "website",
          site_name: process.env.NEXT_PUBLIC_APP_NAME,
          description,
          title: title || process.env.NEXT_PUBLIC_APP_NAME,

          article: {
            publishedTime: "2022-06-21T23:04:13Z",
            modifiedTime: "2022-01-21T18:04:43Z",
            authors: [
              "https://www.example.com/authors/@firstnameA-lastnameA",
              "https://www.example.com/authors/@firstnameB-lastnameB",
            ],
            tags: ["Tag A", "Tag B", "Tag C"],
          },
          images: [
            {
              url: thumbnail || `${baseUrl}/image/blog-banner.jpeg`,
              height: 627,
              width: 1200,
              alt: title || process.env.NEXT_PUBLIC_APP_NAME,
            },
          ],
        }}
        {...restProps}
      />
      <Header headerElevation={headerElevation} />
      {children}
      <Footer />
    </>
  );
}
