import { graphql, useStaticQuery } from 'gatsby';

import clsx from 'clsx';
import Container from '../Container';
import Grid from '../Grid';
import Card from '../Grid/Card';
import { getSlugifiedText } from '../../../shared';
import { container, darkContainer } from './styles.module.less';

interface SuccessStoriesSectionProps {
    isDarkTheme?: boolean;
}

const SuccessStoriesSection = ({
    isDarkTheme = false,
}: SuccessStoriesSectionProps) => {
    const {
        allStrapiCaseStudy: { nodes: successStories },
        // Removing Forward. The order was ["headset", "forward", "prodege"].
    } = useStaticQuery(graphql`
        query GetIntegrationSuccessStories {
            allStrapiCaseStudy(
                filter: { slug: { in: ["headset", "prodege"] } }
                sort: { createdAt: DESC }
            ) {
                nodes {
                    title
                    description
                    slug
                    id
                    hero: logo {
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
        <section>
            <Container
                isVertical
                className={clsx(container, isDarkTheme ? darkContainer : null)}
            >
                <h2>
                    <span>Success</span> stories
                </h2>
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

export default SuccessStoriesSection;
