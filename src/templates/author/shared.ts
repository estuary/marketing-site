export interface Author {
    id: string;
    name: string;
    picture: any;
    slug: string;
    socials: {
        linked_in: string;
        twitter: string;
        other: string;
    };
    bio: {
        data: {
            bio: string;
        };
    };
    role: string;
    blogPosts: {
        id: string;
        title: string;
        picture: any;
        slug: string;
        tags: {
            name: string;
            slug: string;
            type: string;
        }[];
        updatedAt: string;
        hero: any;
        body: any;
        authors: any[];
    }[];
}
