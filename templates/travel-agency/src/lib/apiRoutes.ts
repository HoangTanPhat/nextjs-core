const apiRoutes =  {
    cms: {
        post: {
            list: '/api/blog-posts?populate=*',
            postBySlug: (slug: string) => `/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`,
            postByCategories: (category: string, currentPost: string) =>  `/api/blog-posts?filters[categories][idName][$eq]=${category}&filters[slug][$notContains]=${currentPost}&populate=*`,
        }
    }  
}

export default apiRoutes;