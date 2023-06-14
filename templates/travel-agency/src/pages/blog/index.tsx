import BlogPage from "@/modules/blog/BlogPage";
import { latestBlogData } from "@/modules/blog/latestBlogData";
import { othersBlogData } from "@/modules/blog/othersBlogData";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export type BlogProps = {
  // Declare Home props
  title: string;
  description?: string;
  latestBlogData: {
    title: string;
    date: string;
    thumbnail: string;
  }[];
  othersBlogData: {
    title: string;
    date: string;
    thumbnail: string;
    desc: string;
  }[];
};

export default function Blog(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <BlogPage {..._props} />;
}

export const getServerSideProps: GetServerSideProps<BlogProps> = async (
  context
) => {
  return {
    props: {
      title: "Our blog",
      latestBlogData: latestBlogData,
      othersBlogData: othersBlogData,
    },
  };
};
