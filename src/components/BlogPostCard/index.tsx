import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import {
    blogPostCardImage,
    blogsPostCardDetails,
    blogsPostCardTitle,
    blogsPostCard,
} from './styles.module.less';

export interface BlogPostCardProps {
    title: string;
    slug: string;
    publishedAt: string;
    updatedAt?: string;
    tags: {
        Name: string;
        Slug: string;
        Type: string;
    }[];
    authors: {
        name: string;
        link: string;
    }[];
    hero?: {
        localFile: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
            };
        };
    };
}

export const BlogPostCard = ({
    slug,
    hero,
    title,
    authors,
    publishedAt,
    updatedAt,
}: BlogPostCardProps) => (
    <Link
        id={`${slug}/blog-post-card`}
        to={`/blog/${slug}`}
        className={blogsPostCard}
    >
        {hero ? (
            <GatsbyImage
                alt={title}
                image={hero.localFile.childImageSharp.gatsbyImageData}
                className={blogPostCardImage}
                loading="eager"
            />
        ) : null}
        <p className={blogsPostCardDetails}>
            {authors.map((author) => author.name).join(', ')} ·{' '}
            {updatedAt ?? publishedAt}
        </p>
        <h2 className={blogsPostCardTitle}>{title}</h2>
    </Link>
);
