import { graphql, useStaticQuery } from 'gatsby';

import Container from '../../Container';
import Grid from '../../Grid';
import Card from '../../Grid/Card';
import { sectionTitle } from '../styles.module.less';
import { getSlugifiedText } from '../../../../shared';

interface SuccessStoriesProps {
    hasRelatedArticles: boolean;
}

const SuccessStories = ({ hasRelatedArticles }: SuccessStoriesProps) => {
    const {
        allStrapiCaseStudy: { nodes: successStories },
    } = useStaticQuery(graphql`
        query GetIntegrationSuccessStories {
            allStrapiCaseStudy(
                filter: { Slug: { in: ["headset", "forward", "prodege"] } }
                sort: { createdAt: DESC }
            ) {
                nodes {
                    title: Title
                    description: Description
                    slug: Slug
                    id
                    hero: Logo {
                        alternativeText
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    quality: 100
                                    placeholder: BLURRED
                                    height: 172
                                    layout: FULL_WIDTH
                                )
                            }
                        }
                    }
                }
            }
        }
    `);

    return (
        <section
            style={{
                backgroundColor: hasRelatedArticles
                    ? 'var(--lighter-grey)'
                    : 'var(--light-blue)',
            }}
        >
            <Container isVertical>
                <h2 className={sectionTitle}>Success stories</h2>
                <Grid>
                    {successStories.map((successStory) => (
                        <Card
                            key={successStory.id}
                            data={{
                                ...successStory,
                                slug: `/success-stories/${successStory.slug}/`,
                            }}
                            footerTag="Success story"
                            hasImgBackground
                            linkId={`${getSlugifiedText(successStory.title)}-card-button/integration-page`}
                            target="_blank"
                        />
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default SuccessStories;
