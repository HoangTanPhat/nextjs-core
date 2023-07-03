import { ListPost, PostsResponse } from "@/api/cms/types";
import { getPostsFn } from "@/api/cms/useGetPosts";
import { DefaultCmsDataResponse } from "@/api/types";
import BlogPage from "@/modules/blog/BlogPage";
import { latestBlogData } from "@/modules/blog/latestBlogData";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export type BlogsProps = {
  // Declare Home props
  title: string;
  description?: string;
  allBlogPosts: ListPost[];
};

export default function Blogs(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <BlogPage {..._props} />;
}

export const getServerSideProps: GetServerSideProps<BlogsProps> = async () => {
  let postsResponse;
  const allBlogPosts: ListPost[] = [];
  await getPostsFn()
    .then((res) => {
      postsResponse = res.data;
      postsResponse.map((item) => {
        return allBlogPosts.push({
          title: item.attributes.title,
          introduction_text: item.attributes.introduction_text,
          slug: item.attributes.slug,
          image: item.attributes.thumbnail_image.data.attributes.url,
          categories: item.attributes.categories.data.map(
            (item) => item.attributes.name
          ),
          date: item.attributes.createdAt,
        });
      });
    })
    .catch(() => (postsResponse = null));

  return {
    props: {
      title: "Our blog",
      allBlogPosts: allBlogPosts,
    },
  };
};
