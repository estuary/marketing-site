import * as React from "react"
import { Link, graphql, PageProps, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import clsx from "clsx"
import { CaseStudyPostCard } from "../components/CaseStudyPostCard"
import SearchIcon from "@mui/icons-material/Search"
import { useLunr } from "react-lunr"
import FlowLogo from "../svgs/flow-logo.svg"
import { useMemo } from "react"
import type { Index } from "lunr"
import lunr from "lunr"
import { Divider } from "@mui/material"
import BackgroundImageWrapper from "../components/BackgroundImageWrapper"

interface CaseStudyIndexProps {
    data: {
        allStrapiCaseStudyPost: {
            nodes: any[]
        }
        localSearchPosts: {
            index: any
            store: any
        }
    }
    pageContext: {
        caseStudyPostIds: String[]
        tabCategories: Array<{
            Type: String
            Slug: String
            Name: String
        }>
        categoryTitle: String
        categorySlug: String
        pagination: {
            page: number
            totalPages: number
            nextPage?: string
            prevPage?: string
        }
    }
}


const CaseStudyIndex = ({
    data,
    // pageContext: {
    //     categoryTitle,
    //     categorySlug,
    //     tabCategories: realTabCategories,
    //     caseStudyPostIds,
    //     pagination: { page, totalPages, nextPage, prevPage },
    // },
}: CaseStudyIndexProps) => {
    // const posts = data.allStrapiCaseStudyPost.nodes

    // const index: Index = React.useMemo(
    //     () => lunr.Index.load(JSON.parse(data.localSearchPosts.index)),
    //     [data.localSearchPosts.index]
    // )

    const [query, setQuery] = React.useState("")

    const results = [
        {
            "id": "a61e27d1-7b8b-506b-ade2-3a7af4e11666",
            "title": "Connect&GO refreshes visitor data in Snowflake every 15 seconds, while saving 30% on ELT costs",
            "slug": "case-study-connect-go",
            "publishedAt": "October 12, 2021",
            "tags": [
                {
                    "Name": "connectors",
                    "Slug": "connectors",
                    "Type": "tag"
                },
                {
                    "Name": "open-source",
                    "Slug": "open-source",
                    "Type": "tag"
                },
                {
                    "Name": "Company",
                    "Slug": "company",
                    "Type": "category"
                }
            ],
            "authors": [
                {
                    "name": "Olivia Iannone",
                    "picture": null,
                    "link": null
                }
            ],
            "hero": {
                "localFile": {
                    "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "placeholder": {
                                "fallback": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAE/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABTSaY1qgkf//EABgQAQEAAwAAAAAAAAAAAAAAAAIBAAMQ/9oACAEBAAEFArspIdojw9//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIR/9oACAEDAQE/AXKMP//EABURAQEAAAAAAAAAAAAAAAAAAAAS/9oACAECAQE/AbU//8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIAICFRgf/aAAgBAQAGPwI4HYrbFf/EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhMWH/2gAIAQEAAT8hZhK5HIzYhyadkAbAt8l4/9oADAMBAAIAAwAAABA03//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAEDAQE/EID/AP/EABURAQEAAAAAAAAAAAAAAAAAABEA/9oACAECAQE/EGTv/8QAHRABAAIBBQEAAAAAAAAAAAAAAQARITFBUWFxsf/aAAgBAQABPxCzdQAadeHqFiit4PsDV30xHmhQ/ZZS62MFQcT/2Q=="
                            },
                            "images": {
                                "fallback": {
                                    "src": "/static/f7b092e6aed0dee23f297e72156b7ae9/fd74c/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.jpg",
                                    "srcSet": "/static/f7b092e6aed0dee23f297e72156b7ae9/78171/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.jpg 100w,\n/static/f7b092e6aed0dee23f297e72156b7ae9/58e86/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.jpg 200w,\n/static/f7b092e6aed0dee23f297e72156b7ae9/fd74c/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.jpg 400w,\n/static/f7b092e6aed0dee23f297e72156b7ae9/4b382/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.jpg 800w",
                                    "sizes": "(min-width: 400px) 400px, 100vw"
                                },
                                "sources": [
                                    {
                                        "srcSet": "/static/f7b092e6aed0dee23f297e72156b7ae9/de940/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.avif 100w,\n/static/f7b092e6aed0dee23f297e72156b7ae9/5a451/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.avif 200w,\n/static/f7b092e6aed0dee23f297e72156b7ae9/a5f3a/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.avif 400w,\n/static/f7b092e6aed0dee23f297e72156b7ae9/f3206/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.avif 800w",
                                        "type": "image/avif",
                                        "sizes": "(min-width: 400px) 400px, 100vw"
                                    },
                                    {
                                        "srcSet": "/static/f7b092e6aed0dee23f297e72156b7ae9/83e39/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.webp 100w,\n/static/f7b092e6aed0dee23f297e72156b7ae9/53a86/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.webp 200w,\n/static/f7b092e6aed0dee23f297e72156b7ae9/dad47/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.webp 400w,\n/static/f7b092e6aed0dee23f297e72156b7ae9/e64c7/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.webp 800w",
                                        "type": "image/webp",
                                        "sizes": "(min-width: 400px) 400px, 100vw"
                                    }
                                ]
                            },
                            "width": 400,
                            "height": 235
                        }
                    }
                }
            }
        },
        {
            "id": "24f6cf29-c7c7-5dcc-87d5-cde1b02e881b",
            "title": "Re-evaluating Kafka: issues and alternatives for real-time",
            "slug": "re-evaluating-kafka-issues-and-alternatives-for-real-time",
            "publishedAt": "September 21, 2021",
            "tags": [
                {
                    "Name": "real-time",
                    "Slug": "real-time",
                    "Type": "tag"
                },
                {
                    "Name": "Kafka",
                    "Slug": "kafka",
                    "Type": "tag"
                },
                {
                    "Name": "Data engineering",
                    "Slug": "data-engineering",
                    "Type": "category"
                }
            ],
            "authors": [
                {
                    "name": "Olivia Iannone",
                    "picture": null,
                    "link": null
                }
            ],
            "hero": {
                "localFile": {
                    "childImageSharp": {
                        "gatsbyImageData": {
                            "layout": "constrained",
                            "placeholder": {
                                "fallback": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAABwklEQVR42mNgWHccK2IEI4a1x3ApACEUDlApWDUzTDPTxlMQccY1Rxnxaj7GsOEUEIEUrTrCuPYY0+pjDPN3Mmw8zbRoF1vPAoZNp9EdgtC58RTzvK0s87YyrD0ecPTannffDl2/YGdrwlDVx7z5DH/PfL49V3DYvOYow/aL3NW9DCVtwecf/f/7++vf/4uuX6mMD+Sy82RIKYtZtmXKlfsMyw4wrj+BXTNbVY9ATc+t//+//vn75Pc/i+1n2conC3Qs4G2YIdi/Urx9IVffcobNZxCOR9bMUtUrU915+sbN8s6eJbv3OWw9wTB1PeOuywxbzzNsPce86jDnlHUoPkfWzFHTKyanJCEgyMDA0Fpe6jZ5AcOktYwbToBk159gWbqPc8pabJqB/M1nWSav4CxtY168i6W41cLPTyMmmWnWVoaNJ0GyG04yL9uPW/OmMyzT17D1L2bYfY2jfwmTiTWztSvnwr0MQJsRmtfhsvkMy5RVbO2zgKZwdC9gcvJm1jXlBNoMjMXVh0EpZ8lezklrGDadwtAMQicYF+5kmruZYeVB5tmbGPuXMDZNZVywg2HZPoaleyEk4+LdDKsOw7UAABclVmN7w+p7AAAAAElFTkSuQmCC"
                            },
                            "images": {
                                "fallback": {
                                    "src": "/static/8a80998c46818a519d025311c7b20522/a471d/41ef05_employee_6038877_1280_0ab31c40a2.png",
                                    "srcSet": "/static/8a80998c46818a519d025311c7b20522/93a8b/41ef05_employee_6038877_1280_0ab31c40a2.png 100w,\n/static/8a80998c46818a519d025311c7b20522/5fd93/41ef05_employee_6038877_1280_0ab31c40a2.png 200w,\n/static/8a80998c46818a519d025311c7b20522/a471d/41ef05_employee_6038877_1280_0ab31c40a2.png 400w,\n/static/8a80998c46818a519d025311c7b20522/4acc2/41ef05_employee_6038877_1280_0ab31c40a2.png 800w",
                                    "sizes": "(min-width: 400px) 400px, 100vw"
                                },
                                "sources": [
                                    {
                                        "srcSet": "/static/8a80998c46818a519d025311c7b20522/de940/41ef05_employee_6038877_1280_0ab31c40a2.avif 100w,\n/static/8a80998c46818a519d025311c7b20522/5a451/41ef05_employee_6038877_1280_0ab31c40a2.avif 200w,\n/static/8a80998c46818a519d025311c7b20522/a5f3a/41ef05_employee_6038877_1280_0ab31c40a2.avif 400w,\n/static/8a80998c46818a519d025311c7b20522/f3206/41ef05_employee_6038877_1280_0ab31c40a2.avif 800w",
                                        "type": "image/avif",
                                        "sizes": "(min-width: 400px) 400px, 100vw"
                                    },
                                    {
                                        "srcSet": "/static/8a80998c46818a519d025311c7b20522/83e39/41ef05_employee_6038877_1280_0ab31c40a2.webp 100w,\n/static/8a80998c46818a519d025311c7b20522/53a86/41ef05_employee_6038877_1280_0ab31c40a2.webp 200w,\n/static/8a80998c46818a519d025311c7b20522/dad47/41ef05_employee_6038877_1280_0ab31c40a2.webp 400w,\n/static/8a80998c46818a519d025311c7b20522/e64c7/41ef05_employee_6038877_1280_0ab31c40a2.webp 800w",
                                        "type": "image/webp",
                                        "sizes": "(min-width: 400px) 400px, 100vw"
                                    }
                                ]
                            },
                            "width": 400,
                            "height": 235
                        }
                    }
                }
            }
        }
    ]

    // const results = useMemo(() => {
    //     const query_result = index.query(q => {
    //         const terms = query.split(" ").filter(term => term.length > 0)
    //         for (const term of terms) {
    //             q.term(term, {
    //                 wildcard: lunr.Query.wildcard.TRAILING,
    //                 boost: 10,
    //             })
    //             q.term(term, {
    //                 editDistance: Math.min(Math.max(0, term.length - 1), 3),
    //             })
    //         }
    //         return q
    //     })
    //     return query_result.map(r => data.localSearchPosts.store[r.ref])
    // }, [query, index, data.localSearchPosts.store])

    // const tabCategories = [
    //     { Slug: "", Name: "All", Type: "category" },
    //     ...realTabCategories,
    // ]

    return (
        <Layout headerTheme="light">
            <BackgroundImageWrapper>
                <div className="blogs-index-header-wrapper">
                    <div className="blogs-index-header">
                        <div className="blog-post-header-vectors">
                            <FlowLogo className="blog-post-header-vector" />
                        </div>
                        <h2>Case Study</h2>
                        <p>
                            Case Studies that highlight Estuary's...
                        </p>
                        <p>
                            Some awesome additional description
                        </p>
                    </div>
                </div>
                <div className="blogs-index-tab-bar">
                    <div className="blogs-index-tabs">
                        {/* {tabCategories.map(category => (
                            <Link
                                to={`/blog/${category.Slug}`}
                                className={clsx("blogs-index-tab", {
                                    "blogs-index-tab-active":
                                        category.Slug === categorySlug,
                                })}
                            >
                                {category.Name}
                            </Link>
                        ))} */}
                    </div>
                    <div className="blogs-spacer" />
                    {/* <div className="blogs-index-search">
                        <SearchIcon className="blogs-index-input-adornment" /> */}
                        {/* <input
                            placeholder="Search Blog Posts"
                            type="text"
                            value={query}
                            onChange={evt => setQuery(evt.target.value)}
                        /> */}
                    {/* </div> */}
                </div>
                <div className="blogs-index-body">
                    {results ? results.map(post => (
                        <CaseStudyPostCard {...post}/>
                    )): null}
                </div>
            </BackgroundImageWrapper>
            {/* {(prevPage || nextPage) && (
                <>
                    <Divider />
                    <div className="blogs-nav-wrapper">
                        {prevPage ? (
                            <Link to={prevPage}>← Prev Page</Link>
                        ) : null}
                        <div style={{ flexGrow: 1 }} />
                        {nextPage ? (
                            <Link to={nextPage}>Next Page →</Link>
                        ) : null}
                    </div>
                </>
            )} */}
        </Layout>
    )
}

export default CaseStudyIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ data: { post } }) => {
    return (
        <Seo
            title={"Case Study"}
            description={
                "Case Study description."
            }
        />
    )
}

export const pageQuery = graphql`
    # We need to pass in IDs because we do the filtering in gatsby-node.ts
    # because gatsby won't let us filter by elemMatch on multiple conditions
    # i.e type: "category" AND slug: "..."
    query BlogData($blogPostIds: [String]!) {
        site {
            siteMetadata {
                title
            }
        }
        localSearchPosts {
            index
            store
        }
        allStrapiBlogPost(
            filter: { id: { in: $blogPostIds } }
            sort: [{ publishedAt: DESC }]
        ) {
            nodes {
                title: Title
                slug: Slug
                publishedAt(formatString: "MMMM D, YYYY")
                tags: tags {
                    Name
                    Slug
                    Type
                }
                authors {
                    name: Name
                    picture: Picture {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(layout: CONSTRAINED, width: 50)
                            }
                        }
                    }
                    link: Link
                }
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
            }
        }
    }
`
