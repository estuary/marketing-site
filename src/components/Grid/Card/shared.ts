import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface CardProps {
    data: {
        id: string;
        slug: string;
        title: string;
        description?: string;
        updatedAt?: string;
        body?: {
            data: {
                childMarkdownRemark: {
                    fields: { readingTime: { text: string } };
                };
            };
        };
        tags?: { type: string; name: string }[];
        authors?: { id: string; name: string; role?: string; picture?: any }[];
        hero?: {
            alternativeText?: string;
            localFile: {
                childImageSharp: {
                    gatsbyImageData: IGatsbyImageData;
                };
            };
        };
    };
    footerTag?: string;
    hasImgBackground?: boolean;
    linkId: string;
    isDarkTheme?: boolean;
    containerClassName?: string;
    target?: string;
}
