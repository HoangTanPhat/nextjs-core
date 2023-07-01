import BannerSection from "@/shared-components/BannerSection";
import LayoutContainer from "@/shared-components/layouts/LayoutContainer";
import Section from "@/shared-components/layouts/Section";
import { useRouter } from "next/router";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { DefaultCmsDataResponse } from "@/api/types";
import { PostsResponse } from "@/api/cms/types";

type BlogDetailPageProps = {
  post: DefaultCmsDataResponse<PostsResponse> | null;
  previewMode: boolean;
};
export default function BlogDetailPage({
  post,
  previewMode = false,
}: BlogDetailPageProps) {
  const contentContainerRef = useRef(null);
  const router = useRouter();
  const { slug } = router.query;
  let srcImg = "";
  useLayoutEffect(() => {
    if (contentContainerRef.current) {
      const select = contentContainerRef.current as HTMLDivElement;
      select.querySelectorAll("p")?.forEach((ele) => {
        ele.classList.add("mb-8");
      });
    }
  }, []);

  if (!slug) return <>Đang tải nội dung</>;
  if (post) {
    const {
      title,
      introduction_text,
      thumbnail_image,
      blog_content,
      createdAt,
      categories,
    } = post.attributes;

    if (
      thumbnail_image &&
      thumbnail_image.data &&
      thumbnail_image.data.attributes
    ) {
      if (thumbnail_image.data.attributes?.width < 1000)
        srcImg = thumbnail_image.data.attributes?.url;
      else if (thumbnail_image.data.attributes?.formats) {
        if (thumbnail_image.data.attributes?.formats.large)
          srcImg = thumbnail_image.data.attributes?.formats.large.url;
        else if (thumbnail_image.data.attributes?.formats.medium)
          srcImg = thumbnail_image.data.attributes?.formats.medium.url;
        else srcImg = thumbnail_image.data.attributes?.formats.thumbnail.url;
      }
    }

    console.log(thumbnail_image);

    return (
      <LayoutContainer headerElevation={true}>
        <Section
          sx={{
            mt: "72px",
            maxWidth: 1100,
          }}
        >
          <div className="relative xs:h-full sm:h-[400px] w-full">
            {!!srcImg && (
              <Image
                src={srcImg}
                fill
                alt={title.toString()}
                className="rounded-md"
                style={{
                  objectFit: "cover",
                }}
              />
            )}
          </div>

          <div className="max-w-4xl m-auto bg-white rounded-xl -mt-20 z-10 relative p-10 flex flex-row gap-6">
            <div className="w-1/12"></div>

            {/* Blog content */}
            <div className="w-11/12">
              <div className="flex flex-row gap-4 items-center mb-6 rounded-full w-fit">
                {categories?.data.map((category) => {
                  return (
                    <h6 className="w-fit font-bold text-[#FFBA00] text-sm">
                      {category.attributes.name}
                    </h6>
                  );
                })}

                <h6 className="text-sm text-gray-400">{createdAt}</h6>
              </div>
              <div className="flex flex-row mb-6 gap-4 justify-between">
                <h1 className="text-5xl font-bold">{title}</h1>
              </div>
              <p
                className="leading-8 mb-8 first-letter:text-7xl first-letter:font-bold first-letter:text-black
              first-letter:mr-3 first-letter:float-left"
                dangerouslySetInnerHTML={{
                  __html: introduction_text,
                }}
              ></p>
              {blog_content &&
                blog_content.map(({ heading, details }) => {
                  return (
                    <>
                      <h2 className="text-2xl mb-8 font-bold">{heading}</h2>
                      <div
                        ref={contentContainerRef}
                        className="leading-8"
                        dangerouslySetInnerHTML={{
                          __html: details,
                        }}
                      ></div>
                    </>
                  );
                })}
            </div>
          </div>
        </Section>
      </LayoutContainer>
    );
  }

  return <h1>404</h1>;
}
