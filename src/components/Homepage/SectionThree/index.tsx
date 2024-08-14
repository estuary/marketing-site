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

    return (
        <DarkSwoopingLinesLeftDirectionBackground>
            <Wrapper>
                <SectionTitle>CASE STUDIES</SectionTitle>
                <Carousel hasArrow aria-label="Case studies carousel">
                    {Array.from(
                        { length: Math.ceil(allCaseStudies.length / 3) },
                        (_, index) => (
                            <Cards key={index}>
                                {allCaseStudies
                                    .slice(index * 3, index * 3 + 3)
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
