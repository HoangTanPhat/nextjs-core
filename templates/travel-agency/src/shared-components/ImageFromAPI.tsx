import React from "react";
import Image from "next/image";
import { DefaultCmsDataResponse } from "@/api/types";
import { ImageCMS } from "@/api/cms/types";

type ImageFromAPIProps = {
  imageData: DefaultCmsDataResponse<ImageCMS>;
  title: string;
  alt?: string;
};

export default function ImageFromAPI({
  imageData,
  title,
  alt = "Traveldi Images",
}: ImageFromAPIProps) {
  let srcImg = "";
  if (imageData && imageData.attributes) {
    if (imageData.attributes?.width < 1000) srcImg = imageData.attributes?.url;
    else if (imageData.attributes?.formats) {
      if (imageData.attributes?.formats.large)
        srcImg = imageData.attributes?.formats.large.url;
      else if (imageData.attributes?.formats.medium)
        srcImg = imageData.attributes?.formats.medium.url;
      else srcImg = imageData.attributes?.formats.thumbnail.url;
    }
  } else {
    srcImg = "/images/tourist-1.jpg";
  }

  return (
    <Image
      src={srcImg}
      fill
      alt={title.toString() || alt}
      className="rounded-md object-cover"
    />
  );
}
