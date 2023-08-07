import { PostsResponse } from "@/api/cms/types";
import { DefaultCmsDataResponse } from "@/api/types";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/router";
import { baseUrl } from "@/lib/contants";
type RelatedPostsProps = {
  posts: DefaultCmsDataResponse<PostsResponse>[];
};

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  const { pathname } = useRouter();
  return (
    <div>
      <hr className="mb-6" />
      <h2 className="text-2xl mb-6 font-bold">Related topics</h2>
      <div className="grid grid-cols-2 gap-5">
        {posts.map((post) => {
          const { title, thumbnail_image, createdAt, slug } = post.attributes;
          let srcImg = "";
          if (
            thumbnail_image &&
            thumbnail_image.data &&
            thumbnail_image.data.attributes
          ) {
            srcImg = thumbnail_image.data.attributes?.formats.medium.url;
          }

          return (
            <Link
              href={{
                pathname: `${baseUrl}/blog/${slug}`,
              }}
              passHref
            >
              <div className="flex flex-row gap-5 group cursor-pointer">
                <div className="focus-within:outline-2 relative h-full w-[150px] aspect-square z-10 mb-4">
                  <Image
                    src={
                      srcImg && srcImg.toString()
                        ? srcImg.toString()
                        : "/images/tourist-1.jpg"
                    }
                    alt={title}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h6 className="line-clamp-2 font-bold text-xl group-hover:text-[#FFBA00]">
                    {title}
                  </h6>
                  <div>
                    <div className="flex flex-row justify-end mb-3">
                      <h6 className="text-sm text-gray-400">
                        {dayjs(createdAt).format("DD/MM/YYYY").toString()}
                      </h6>
                    </div>
                    <hr className="border" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
