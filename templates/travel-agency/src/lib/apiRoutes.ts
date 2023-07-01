const apiRoutes =  {
    cms: {
        post: {
            list: '/api/blog-posts?populate=*',
            postBySlug: (slug: string) => `/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`,
        }
    }  
}

export default apiRoutes;