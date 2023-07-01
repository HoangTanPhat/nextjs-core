import { PostsResponse } from "@/api/cms/types";
import { getPostBySlugFn } from "@/api/cms/useGetPostBySlug";
import { getPostsFn } from "@/api/cms/useGetPosts";
import { DefaultCmsDataResponse, DefaultCmsResponse } from "@/api/types";
import BlogDetailPage from "@/modules/blog/BlogDetailPage";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import React from "react";

export type BlogProps = {
  title: string;
};

type Props = {
  post: DefaultCmsDataResponse<PostsResponse> | null;
  previewMode: boolean;
};

export default function Blog({
  post,
  previewMode = false,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BlogDetailPage post={post} previewMode={previewMode} />;
}

export const getStaticPaths = async () => {
  const pageCurrent = 1;
  const pageSize = 25;
  let postsRes = {} as DefaultCmsResponse<
    DefaultCmsDataResponse<PostsResponse>[]
  >;
  await getPostsFn({
    "pagination[page]": pageCurrent,
    "pagination[pageSize]": pageSize,
    fields: "slug",
  })
    .then((res) => (postsRes = res))
    .catch((error) => console.log(error));

  let paths: {
    params: {
      slug: string;
    };
  }[] = [];

  if (postsRes.data && postsRes.data.length > 0) {
    paths = paths.concat(
      postsRes.data.map((item) => ({
        params: { slug: item.attributes.slug },
      }))
    );

    // if (postsRes.meta.pagination.total > pageCurrent * pageSize) {
    //   while (pageCurrent * pageSize < 1000) {
    //     pageCurrent++;
    //     try {
    //       await getPostsFn({
    //         "pagination[page]": pageCurrent,
    //         "pagination[pageSize]": pageSize,
    //         fields: "slug",
    //       })
    //         .then((res) => {
    //           postsRes = res;
    //           paths = paths.concat(
    //             postsRes.data.map((item) => ({
    //               params: { slug: item.attributes.slug },
    //             }))
    //           );
    //         })
    //         .catch((error) => console.log(error));
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // }
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { params } = context;
  const previewMode = !!context.preview;

  if (params?.slug) {
    let postRes = {} as DefaultCmsResponse<
      DefaultCmsDataResponse<PostsResponse>[]
    >;
    try {
      if (previewMode) {
        await getPostBySlugFn(params.slug.toString(), {
          params: {
            publicationState: "preview",
          },
        })
          .then((res) => (postRes = res))
          .catch((error) => {
            console.log(error);
            return {
              notFound: true,
            };
          });
      } else {
        await getPostBySlugFn(params.slug.toString())
          .then((res) => (postRes = res))
          .catch((error) => {
            console.log(error);
            return {
              notFound: true,
            };
          });
      }
    } catch (error) {
      return { notFound: true };
    }

    if (postRes.data?.length)
      return {
        props: {
          post: postRes.data[0],
          previewMode,
          fallback: "blocking",
        },
        revalidate: 30,
      };
    else
      return {
        notFound: true,
      };
  }

  return {
    notFound: true,
  };
};
