import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import React from 'react';
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
    data: any;
}

const AuthorBlogPostCard = ({ data: blogPost }: AuthorBlogPostCardProps) => {
    const blogPostImage =
        blogPost?.hero?.localFile?.childImageSharp?.gatsbyImageData;

    const blogPostTags = blogPost.tags.filter((tag) => tag.type === 'tag');

    const authorImage =
        blogPost.authors[0].picture &&
        getImage(
            blogPost.authors[0].picture.localFile.childImageSharp
                .gatsbyImageData
        );

    const authorName = blogPost?.authors[0]?.name;

    const authorRole = blogPost?.authors[0]?.role;

    return (
        <Link to={`/${blogPost?.slug}`} className={container}>
            <GatsbyImage
                image={blogPostImage}
                alt={blogPost.hero.alternativeText}
                className={popularArticlesImage}
            />
            <div className={articleCardHeader}>
                <span className={articleTag}>{blogPostTags[0]?.name}</span>
                <div className={articleDateAndTime}>
                    <span>{blogPost?.updatedAt}</span>
                    <div className={dot} />
                    <span>
                        {blogPost?.body.data.childMarkdownRemark.fields.readingTime.text.replace(
                            'read',
                            ''
                        )}
                    </span>
                </div>
            </div>
            <h3>{blogPost?.title}</h3>
            <div className={articleCardAuthors}>
                <Avatar
                    image={authorImage}
                    alt={`Picture of ${authorName}`}
                    name={authorName}
                />
                <div className={authorInfo}>
                    <span>{authorName}</span> <div className={dot} />{' '}
                    <span>{authorRole}</span>
                </div>
            </div>
            <div className={articleCardFooter}>
                <span>Article</span>
                <ArrowRight2 />
            </div>
        </Link>
    );
};

export default AuthorBlogPostCard;
