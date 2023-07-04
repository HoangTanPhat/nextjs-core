import { DefaultCmsDataResponse } from "../types";

export type PostsResponse = {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    introduction_text: string | null;
    slug: string;
    thumbnail_image: {
        data: DefaultCmsDataResponse<Image>
    };
    blog_content: BlogContent[];
    categories: {
        data: DefaultCmsDataResponse<Categories>[]
    }
    conclution_text: string | null;
}

export type ListPost = {
    title: string;
    introduction_text: string;
    slug: string;
    image: string | null;
    categories?: string[];
    date: string;
}

export type Image = {
    name: string;
    url: string;
    width: number;
    formats: {
        large: ImageAttributesFormats;
        small: ImageAttributesFormats;
        medium: ImageAttributesFormats
        thumbnail: ImageAttributesFormats;
    };
}

export type ImageAttributesFormats = {
    name: string;
    url: string;
    width: number;
}

export type BlogContent = {
    id: number;
    heading: string;
    details: string;
}


export type Categories = {
    name: string;
}