import * as React from "react"
// import unified from "unified"
// import rehypeParse from "rehype-parse"
// import rehypeReact from "rehype-react"
// import ImgSharpInline from "../../plugins/estuary-rehype-transformers/src/ImgSharp"
import { Link } from "gatsby"
import { PopularArticles } from "./BlogPopularArticles"

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
            if (item instanceof HTMLElement) {
                index !== 0 &&
                    navArray.push({
                        itemTag: item.tagName,
                        itemLink: item.id,
                        itemName: item.innerText,
                    })
            }
        })
    }
    return (
        <>
            <aside className="post-sidebar sticky">
                    <div className="table-of-contents">
                        <h3>Table of Contents</h3>
                        <ul>
                            {navArray?.map((item, index) => {
                                item.itemTag !== 'H3' && h2Index++
                                return (
                                    <li key={index} className={item.itemTag === 'H3' ? 'sub-item' : ''}>
                                        <Link to={`#${item.itemLink}`}><span>{item.itemTag !== 'H3' && h2Index}</span> {item.itemName}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    {/* Popular Articles */}
                    <div className="popular-articles">
                        <PopularArticles popularArticles={popularArticles} />
                    </div>

                    <div className="sidebar-cta">
                        <h3>Start streaming your data for free</h3>
                        <Link to="https://dashboard.estuary.dev/register" className="pipeline-link">Build a Pipeline</Link>
                    </div>
            </aside>
        </>
    )
}
