import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import ArrowRight2 from '../../svgs/arrow-right-2.svg';
import Avatar from '../Avatar';
import {
    popularArticlesImage,
    articleCardHeader,
    articleTag,
    articleDateAndTime,
    articleCardAuthors,
    articleCardFooter,
} from './styles.module.less';

export const PopularArticles = () => {
    const { popularArticles } = useStaticQuery(graphql`
        query GetPopularArticles {
            popularArticles: allStrapiBlogPost(
                sort: { publishedAt: DESC }
                filter: { tags: { elemMatch: { Name: { eq: "popular" } } } }
            ) {
                nodes {
                    updatedAt(formatString: "MMMM D, YYYY")
                    slug: Slug
                    id
                    hero: Hero {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: CONSTRAINED
                                    width: 400
                                    placeholder: BLURRED
                                    aspectRatio: 1.7
                                    formats: [AUTO, WEBP, AVIF]
                                )
                                # Further below in this doc you can learn how to use these response images
                            }
                        }
                    }
                    authors {
                        name: Name
                        picture: Picture {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(
                                        layout: CONSTRAINED
                                        placeholder: BLURRED
                                        quality: 100
                                    )
                                }
                            }
                        }
                        link: Link
                    }
                    title: Title
                    tags {
                        name: Name
                        slug: Slug
                        type: Type
                        isTab: IsTab
                    }
                }
            }
        }
    `);
    return (
        <>
            <h3>Popular Articles</h3>
            <ul>
                {popularArticles?.nodes?.map((article: any, index: number) => {
                    const articleImage =
                        article?.hero?.localFile?.childImageSharp
                            ?.gatsbyImageData;
                    const articleTags = article.tags.filter(
                        (tag) => tag.type === 'tag'
                    );
                    const authorImage =
                        article.authors[0].picture &&
                        getImage(
                            article.authors[0].picture.localFile.childImageSharp
                                .gatsbyImageData
                        );

                    return (
                        <li key={index}>
                            <Link to={`/${article?.slug}`}>
                                <GatsbyImage
                                    image={articleImage}
                                    alt="debezium alternatives"
                                    className={popularArticlesImage}
                                />
                                <div className={articleCardHeader}>
                                    {/* TODO: Should we display all the tags here? */}
                                    <span className={articleTag}>
                                        {articleTags[0]?.name}
                                    </span>
                                    <div className={articleDateAndTime}>
                                        <span>{article?.updatedAt}</span>
                                        {/* <div className={dot} /> */}
                                        {/* TODO: Add post reading time from Strapi */}
                                        {/* <span>10 min</span> */}
                                    </div>
                                </div>
                                <h4>{article?.title}</h4>
                                <div className={articleCardAuthors}>
                                    <Avatar
                                        image={authorImage}
                                        alt="Author's Avatar"
                                        name={article?.authors[0]?.name}
                                    />
                                    <span>{article?.authors[0]?.name}</span>
                                </div>
                                <div className={articleCardFooter}>
                                    <span>Article</span>
                                    <ArrowRight2 />
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
