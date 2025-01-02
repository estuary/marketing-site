import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import DarkSwoopingLinesLeftDirectionBackground from '../../BackgroundImages/DarkSwoopingLinesLeftDirectionBackground';
import Container from '../../Container';
import SlideDeckCarousel from '../../SlideDeckCarousel';
import Card from './Card';
import { sectionTitle } from './styles.module.less';

const SuccessStories = () => {
    const {
        allStrapiCaseStudy: { nodes: allSuccessStories },
    } = useStaticQuery(graphql`
        query GetAllHomepageSuccessStories {
            allStrapiCaseStudy(limit: 10) {
                nodes {
                    description: Description
                    title: Title
                    slug: Slug
                    id
                    logo: Logo {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `);

    return (
        <DarkSwoopingLinesLeftDirectionBackground>
            <Container isVertical>
                <h2 className={sectionTitle}>SUCCESS STORIES</h2>
                <SlideDeckCarousel
                    items={allSuccessStories}
                    itemsPerSlide={3}
                    ariaLabel="Success stories carousel"
                    renderCard={({ id, title, description, slug, logo }) => (
                        <Card
                            key={id}
                            title={title}
                            description={description}
                            href={`/success-stories/${slug}/`}
                            image={
                                <GatsbyImage
                                    image={
                                        logo.localFile.childImageSharp
                                            .gatsbyImageData
                                    }
                                    alt={`${title} logo`}
                                />
                            }
                        />
                    )}
                />
            </Container>
        </DarkSwoopingLinesLeftDirectionBackground>
    );
};

export default SuccessStories;
