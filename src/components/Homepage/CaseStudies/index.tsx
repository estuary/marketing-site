import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import DarkSwoopingLinesLeftDirectionBackground from '../../BackgroundImages/DarkSwoopingLinesLeftDirectionBackground';
import Container from '../../Container';
import SlideDeckCarousel from '../../SlideDeckCarousel';
import Card from './Card';
import { sectionTitle } from './styles.module.less';

const CaseStudies = () => {
    const {
        allStrapiCaseStudy: { nodes: allCaseStudies },
    } = useStaticQuery(graphql`
        query GetAllHomepageCaseStudies {
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
                <h2 className={sectionTitle}>CASE STUDIES</h2>
                <SlideDeckCarousel
                    items={allCaseStudies}
                    itemsPerSlide={3}
                    ariaLabel="Case studies carousel"
                    renderCard={({ id, title, description, slug, logo }) => (
                        <Card
                            key={id}
                            title={title}
                            description={description}
                            href={`/customers/${slug}/`}
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

export default CaseStudies;
