export interface Author {
    id: string;
    name: string;
    picture: any;
    slug: string;
    socials: {
        linkedIn: string;
        twitter: string;
        other: string;
    };
    bio: {
        data: {
            bio: string;
        };
    };
    role: string;
    blogPosts: any;
    publishedAt: string;
}
