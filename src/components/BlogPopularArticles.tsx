import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const PopularArticles = ({
    popularArticles
}: {
    popularArticles: any
}) => {
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
