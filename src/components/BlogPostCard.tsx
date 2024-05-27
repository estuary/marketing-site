import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

export interface BlogPostCardProps {
    title: string;
    slug: string;
    publishedAt: string;
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
    tags
}: BlogPostCardProps) => (
    <Link to={`/${slug}`} className="blogs-post-card">
        {hero ? (
            <GatsbyImage
                alt={title}
                image={hero.localFile.childImageSharp.gatsbyImageData}
                className="blog-post-card-image"
                loading="eager"
            />
        ) : null}
        <p className="blogs-post-card-details">
            {authors.map((author) => author.name).join(', ')} · {publishedAt}
        </p>
        <div className="blogs-post-card-title">{title}</div>
    </Link>
);
