import LinkIcon from "./icons/LinkIcon";
import FacebookIcon from "./icons/FacebookIcon";
export default function SocialShare() {
  return (
    <div className="flex flex-col gap-4 items-center sticky top-28">
      <div className="relative border-2 rounded-full border-gray-200 p-2 cursor-pointer group">
        <div className="w-fit">
          <LinkIcon
            className="stroke-gray-300 group-hover:stroke-black"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="relative border-2 rounded-full border-gray-200 p-2 cursor-pointer group">
        <div className="w-fit">
          <FacebookIcon
            className="fill-gray-300 stroke-gray-300 group-hover:fill-black group-hover:stroke-black"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="relative border-2 rounded-full border-gray-200 p-2 cursor-pointer group">
        <div className="w-fit">
          <LinkIcon
            className="stroke-gray-300 group-hover:stroke-black"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
}
