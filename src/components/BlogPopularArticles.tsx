import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, graphql, useStaticQuery } from "gatsby"

export const PopularArticles = () => {
    const {popularArticles} = useStaticQuery(graphql`
        query GetPopularArticles {
            popularArticles:  allStrapiBlogPost(
                sort: { publishedAt: DESC }
                filter: {tags: {elemMatch: {Name: {eq: "popular" }}}}
            ) {
                nodes {
                    updatedAt
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
                    title: Title
                    tags {
                        Name
                        Slug
                        Type
                        IsTab
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
                    popularArticles?.nodes?.map((article: any, index: number) => (
                        <>
                            <li key={index}>
                                <GatsbyImage
                                    image={article?.hero?.localFile?.childImageSharp?.gatsbyImageData}
                                    alt="debezium alternatives"
                                    className="icon-image popular-articles-image"
                                />
                                <Link to={`/${article?.slug}`}>{article?.title}</Link>
                            </li>
                        </>
                    ))
                }
            </ul>
        </>
    )
}