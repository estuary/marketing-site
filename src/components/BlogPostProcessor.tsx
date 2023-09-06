import * as React from "react"
// import unified from "unified"
// import rehypeParse from "rehype-parse"
// import rehypeReact from "rehype-react"
// import ImgSharpInline from "../../plugins/estuary-rehype-transformers/src/ImgSharp"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const ProcessedPost = ({
    body,
    popularArticles
}: {
    body: string,
    popularArticles: any
}) => {
    const navArray = []
    let h2Index = 0
    // return (JSON.stringify(body,null,4))
    if (typeof window !== 'undefined') {
        const parser = new DOMParser();
        const html = parser.parseFromString(body, 'text/html');
        html.querySelectorAll("h2, h3").forEach((item, index) => {
            console.log('item&&& ', item)
            index !== 0 &&
                navArray.push({
                    itemTag: item.tagName,
                    itemLink: item.id,
                    itemName: item.innerText,
                })
        })
    }
    return (
        <>
            <div className="post-sidebar">
                <div className="table-of-contents">
                    <h3>Table of Contents</h3>
                    <ul>
                        {navArray.map((item, index) => {
                            item.itemTag !== 'H3' && h2Index++
                            return (
                                <li key={index} className={item.itemTag === 'H3' ? 'sub-item' : ''}>
                                    <Link to={`#${item.itemLink}`}><span>{item.itemTag !== 'H3' && h2Index}</span> {item.itemName}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="popular-articles">
                    <h3>Popular Articles</h3>
                    <ul>
                        {popularArticles.nodes &&
                            popularArticles.nodes.map((article: any, index: number) => (
                                <>
                                    {console.log('first', article?.hero?.localFile?.childImageSharp?.gatsbyImageData.images.fallback.src)}
                                    <li key={index}>
                                        <GatsbyImage
                                            image={article?.hero?.localFile?.childImageSharp?.gatsbyImageData}
                                            layout='fixed'
                                            width={48}
                                            height={48}
                                            alt="debezium alternatives"
                                            className="icon-image"
                                        />
                                        <Link to={article?.slug}>{article?.title}</Link>
                                    </li>
                                </>
                            ))
                        }
                        {/* <li>
                            <StaticImage
                                quality={90}
                                placeholder="none"
                                alt="Guide to SQL Server CDC"
                                src="../images/popular-articles/eccbd3_sql_server_cdc_8a24e6c7c2.avif"
                                width={48}
                                height={48}
                                layout="fixed"
                                className="icon-image"
                            />
                            <Link to="/guide-change-data-capture-sql-server">Guide to SQL Server CDC</Link>
                        </li> */}

                    </ul>
                </div>
                <div className="sidebar-cta">
                    <h3>Start streaming your data for free</h3>
                    <Link to="https://dashboard.estuary.dev/register" className="pipeline-link">Build a Pipeline</Link>
                </div>
            </div>
        </>
    )
}
