import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import DarkSwoopingLinesLeftDirectionBackground from '../../BackgroundImages/DarkSwoopingLinesLeftDirectionBackground';
import Carousel from '../../Carousel';
import Card from './Card';
import { Cards, SectionTitle, Wrapper } from './styles';

const SectionThree = () => {
    const {
        allStrapiCaseStudy: { nodes: allCaseStudies },
    } = useStaticQuery(graphql`
        query GetAllHomepageCaseStudies {
            allStrapiCaseStudy(limit: 10) {
                nodes {
                    LinkOneLiner
                    Description
                    Title
                    Slug
                    id
                    Logo {
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

    const cardsPerSlide = 3;

    return (
        <DarkSwoopingLinesLeftDirectionBackground>
            <Wrapper>
                <SectionTitle>CASE STUDIES</SectionTitle>
                <Carousel
                    hasArrow
                    aria-label="Case studies carousel"
                    hasMultipleItemsSlide
                >
                    {Array.from(
                        {
                            length: Math.ceil(
                                allCaseStudies.length / cardsPerSlide
                            ),
                        },
                        (_, index) => (
                            <Cards key={index}>
                                {allCaseStudies
                                    .slice(
                                        index * cardsPerSlide,
                                        index * cardsPerSlide + cardsPerSlide
                                    )
                                    .map((caseStudy) => (
                                        <Card
                                            key={caseStudy.id}
                                            title={caseStudy.Title}
                                            description={caseStudy.Description}
                                            href={`/customers/${caseStudy.Slug}`}
                                            image={
                                                <GatsbyImage
                                                    image={
                                                        caseStudy.Logo.localFile
                                                            .childImageSharp
                                                            .gatsbyImageData
                                                    }
                                                    alt={`${caseStudy.Title} logo`}
                                                />
                                            }
                                        />
                                    ))}
                            </Cards>
                        )
                    )}
                </Carousel>
            </Wrapper>
        </DarkSwoopingLinesLeftDirectionBackground>
    );
};

export default SectionThree;
