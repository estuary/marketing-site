import { graphql } from 'gatsby';
import React from 'react';

import dayjs from 'dayjs';
import reltime from 'dayjs/plugin/relativeTime';

import Header from './Head';
import Wrapper from './Wrapper';

import SectionBody from './Sections/Body';
import Hero from './Sections/Hero';
import Content from './Sections/Content';

dayjs.extend(reltime);

const CaseStudyTemplate = ({ data: { caseStudy } }) => {
    const { Title, Description, Logo, SideContent, About, Body } = caseStudy;

    return (
        <Wrapper caseStudyTitle={Title}>
            <Hero
                title={Title}
                description={Description}
                image={Logo.localFile.childImageSharp.gatsbyImageData}
            />
            <Content content={SideContent} {...About} />
            <SectionBody content={Body} />
        </Wrapper>
    );
};

export default CaseStudyTemplate;

export const Head = Header;

export const pageQuery = graphql`
    query CaseStudyQueryById($id: String!) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        caseStudy: strapiCaseStudy(id: { eq: $id }) {
            machineReadablePublishDate: publishedAt(formatString: "YYYY-MM-DD")
            metaTitle
            metaDescription
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
                        meta_img: gatsbyImageData(layout: FIXED, width: 500)
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
`;
