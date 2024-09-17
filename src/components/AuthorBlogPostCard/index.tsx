import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import React from 'react';
import { AvatarGroup } from '@mui/material';
import ArrowRight2 from '../../svgs/arrow-right-2.svg';
import Avatar from '../Avatar';
import {
    container,
    popularArticlesImage,
    articleCardHeader,
    articleTag,
    articleDateAndTime,
    articleCardAuthors,
    articleCardFooter,
    dot,
    authorInfo,
} from './styles.module.less';

interface AuthorBlogPostCardProps {
    data: {
        slug: string;
        title: string;
        updatedAt: string;
        body: {
            data: {
                childMarkdownRemark: {
                    fields: { readingTime: { text: string } };
                };
            };
        };
        tags: { type: string; name: string }[];
        authors: { id: string; name: string; role?: string; picture?: any }[];
        hero: { alternativeText: string; localFile: any };
    };
}

const AuthorBlogPostCard = ({ data: blogPost }: AuthorBlogPostCardProps) => {
    const blogPostImage =
        blogPost.hero.localFile?.childImageSharp?.gatsbyImageData;

    const blogPostTags = blogPost.tags.filter((tag) => tag.type === 'tag');

    const singleAuthorImage =
        blogPost.authors[0].picture &&
        getImage(
            blogPost.authors[0].picture.localFile.childImageSharp
                .gatsbyImageData
        );

    const singleAuthor = blogPost.authors[0];

    const readingTime =
        blogPost.body.data.childMarkdownRemark.fields.readingTime.text.replace(
            'read',
            ''
        );

    return (
        <Link to={`/${blogPost.slug}`} className={container}>
            <GatsbyImage
                image={blogPostImage}
                alt={blogPost.hero.alternativeText}
                className={popularArticlesImage}
            />
            <div className={articleCardHeader}>
                <span className={articleTag}>{blogPostTags[0]?.name}</span>
                <div className={articleDateAndTime}>
                    <span>{blogPost.updatedAt}</span>
                    <div className={dot} />
                    <span>{readingTime}</span>
                </div>
            </div>
            <h3>{blogPost.title}</h3>
            <div className={articleCardAuthors}>
                {blogPost.authors.length > 1 ? (
                    <AvatarGroup max={3}>
                        {blogPost.authors.map((author) => {
                            const authorImage =
                                author.picture &&
                                getImage(
                                    author.picture.localFile.childImageSharp
                                        .gatsbyImageData
                                );

                            return (
                                <Avatar
                                    key={author.id}
                                    image={authorImage}
                                    alt={`Picture of ${author.name}`}
                                    name={author.name}
                                />
                            );
                        })}
                    </AvatarGroup>
                ) : (
                    <>
                        <Avatar
                            image={singleAuthorImage}
                            alt={`Picture of ${singleAuthor.name}`}
                            name={singleAuthor.name}
                        />
                        <div className={authorInfo}>
                            <span>{singleAuthor.name}</span>
                            {singleAuthor.role ? (
                                <>
                                    <div className={dot} />
                                    <span>{singleAuthor.role}</span>
                                </>
                            ) : null}
                        </div>
                    </>
                )}
            </div>
            <div className={articleCardFooter}>
                <span>Article</span>
                <ArrowRight2 />
            </div>
        </Link>
    );
};

export default AuthorBlogPostCard;
