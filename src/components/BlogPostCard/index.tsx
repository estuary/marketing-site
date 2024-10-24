import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
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
        picture: {
            localFile: {
                childImageSharp: {
                    gatsbyImageData: any;
                };
            };
        };
        link: string;
    }[];
    hero?: {
        localFile: {
            childImageSharp: {
                gatsbyImageData: any;
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
    <Link to={`/${slug}`} className={blogsPostCard}>
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
        <div className={blogsPostCardTitle}>{title}</div>
    </Link>
);
