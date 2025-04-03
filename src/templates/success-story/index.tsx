import { graphql } from 'gatsby';
import dayjs from 'dayjs';
import reltime from 'dayjs/plugin/relativeTime';
import Wrapper from './Wrapper';
import SectionBody from './Sections/Body';
import Hero from './Sections/Hero';
import Content from './Sections/Content';
import SuccessStoryHead from './Head';

dayjs.extend(reltime);

const SuccessStoryTemplate = ({ data: { successStory } }) => {
    const { Title, Description, Logo, SideContent, About, Body } = successStory;

    return (
        <Wrapper successStoryTitle={Title}>
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

export default SuccessStoryTemplate;

export const Head = SuccessStoryHead;

export const pageQuery = graphql`
    query SuccessStoryQueryById($id: String!) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        successStory: strapiCaseStudy(id: { eq: $id }) {
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
                            formats: [AUTO, WEBP]
                        )
                        metaImg: gatsbyImageData(
                            layout: FIXED
                            width: 1200
                            height: 630
                        )
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
                                    formats: [AUTO, WEBP]
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
