import './style.less'

import React from "react"
import { graphql } from "gatsby"

import dayjs from "dayjs"
import reltime from "dayjs/plugin/relativeTime"

import Header from './Head'
import Wrapper from './Wrapper'

import SectionHero from './Sections/Hero'
import SectionContent from './Sections/Content'
import SectionAbout from './Sections/About'
import SectionBody from './Sections/Body'

dayjs.extend(reltime)

const CaseStudyTemplate = ({ data: { caseStudy, relatedStudies } }) => {
    const { Title, Description, Logo, SideContent, About, Body } = caseStudy

    return (
        <Wrapper>
            <SectionHero title={Title} description={Description} image={Logo.localFile.childImageSharp.gatsbyImageData} />
            <div className="two-columns">
                <SectionContent content={SideContent} />
                <SectionAbout {...About} />
            </div>
            <SectionBody content={Body} />
        </Wrapper>
    )
}

export default CaseStudyTemplate

export const Head = Header

export const pageQuery = graphql`
    query CaseStudyQueryById($id: String!) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        caseStudy: strapiCaseStudy(id: { eq: $id }) {
            machineReadablePublishDate: publishedAt(formatString: "YYYY-MM-DD")
            Slug
            Title
            Description
            Logo {
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                        meta_img: fixed(width: 500) {
                            src
                        }
                    }
                }
            }
            SideContent {
                data {
                    SideContent
                    childHtmlRehype {
                        html
                        tableOfContents
                    }
                }
            }
            About {
                Title
                Description {
                    data {
                        Description
                        childHtmlRehype {
                            html
                            tableOfContents
                        }
                    }
                }
                Topics {
                    Title
                    Description
                    Icon {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: FULL_WIDTH
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                }
            }
            Body {
                data {
                    Body
                    childHtmlRehype {
                        html
                        tableOfContents
                    }
                }
            }
        }
    }
`