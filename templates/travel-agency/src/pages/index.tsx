import HomePage from "@/modules/home/HomePage";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export type HomeProps = {
  // Declare Home props
  title: string;
  description?: string;
};

export default function Home(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <HomePage {..._props} />;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  return {
    props: {
      title: "Quickest & safest delivery",
      description:
        "Our cutting-edge logistics system guarantees the fastest and most secure delivery service available",
    },
  };
};
