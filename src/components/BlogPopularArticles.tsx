import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import ArrowRight2 from "../svgs/arrow-right-2.svg"

export const PopularArticles = () => {
    const { popularArticles } = useStaticQuery(graphql`
        query GetPopularArticles {
            popularArticles:  allStrapiBlogPost(
                sort: { publishedAt: DESC }
                filter: {tags: {elemMatch: {Name: {eq: "popular" }}}}
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
                              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, quality: 100)
                              fixed(width: 36) {
                                src
                              }
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
    `)
    return (
        <>
            <h3>Popular Articles</h3>
            <ul>
                {popularArticles?.nodes &&
                    popularArticles?.nodes?.map((article: any, index: number) => {
                        const articleTags = article.tags.filter((tag) => tag.type === "tag");

                        return (
                            <li key={index}>
                                <Link to={`/${article?.slug}`}>
                                    <GatsbyImage
                                        image={article?.hero?.localFile?.childImageSharp?.gatsbyImageData}
                                        alt="debezium alternatives"
                                        className="popular-articles-image"
                                    />
                                    <div className="article-card-header">
                                        {/* TODO: Should we display all the tags here? */}
                                        <span className="article-tag">{articleTags[0]?.name}</span>
                                        <div className="article-date-and-time">
                                            <span className="article-card-published-at">
                                                {article?.updatedAt}
                                            </span>
                                            <div className="dot" />
                                            {/* TODO: Add post reading time from Strapi */}
                                            <span>10 min</span>
                                        </div>
                                    </div>
                                    <h4>{article?.title}</h4>
                                    <div className="article-card-authors">
                                        <StaticImage
                                            className="article-card-author-avatar"
                                            src="../images/a-avatar.svg"
                                            alt="Author's Avatar"
                                            width={36}
                                            height={36}
                                        />
                                        <span>{article?.authors[0]?.name}</span>
                                    </div>
                                    <div className="article-card-footer">
                                        <span>Article</span>
                                        <ArrowRight2 />
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}