import LinkIcon from "./icons/LinkIcon";
import FacebookIcon from "./icons/FacebookIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import { useMemo } from "react";
import { baseUrl } from "@/lib/contants";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
export default function SocialShare() {
  const route = useRouter();
  const shareUrl = `${baseUrl}${route.asPath}`;

  const copyTextToClipboard = async (text: string) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };
  const handleCopyLink = (text: string) => {
    copyTextToClipboard(text)
      .then(() => {
        toast.success("Copy successfully!");
      })
      .catch(() => {
        toast.error("Copy failed!");
      });
  };
  return (
    <div className="flex flex-col gap-4 items-center sticky top-28">
      <button
        className="relative border-2 rounded-full border-gray-200 p-2 cursor-pointer group hover:border-[#FFBA00]"
        onClick={() => handleCopyLink(shareUrl)}
      >
        <div className="w-fit">
          <LinkIcon
            className="stroke-gray-300 group-hover:stroke-[#FFBA00]"
            width={20}
            height={20}
          />
        </div>
      </button>
      <div className="relative border-2 rounded-full border-gray-200 p-2 cursor-pointer group hover:border-[#FFBA00]">
        <div className="w-fit">
          <FacebookIcon
            className="fill-gray-300 stroke-gray-300 group-hover:fill-[#FFBA00] group-hover:stroke-[#FFBA00]"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="relative border-2 rounded-full border-gray-200 p-2 cursor-pointer group hover:border-[#FFBA00]">
        <div className="w-fit">
          <LinkedinIcon
            className="fill-gray-300 stroke-gray-300 group-hover:fill-[#FFBA00] group-hover:stroke-[#FFBA00]"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
}
