import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import DarkSwoopingLinesLeftDirectionBackground from '../../BackgroundImages/DarkSwoopingLinesLeftDirectionBackground';
import Carousel from '../../Carousel';
import Card from './Card';
import { Title, Wrapper } from './styles';

const SectionThree = () => {
    const {
        allStrapiCaseStudy: { nodes: allCaseStudies },
    } = useStaticQuery(graphql`
        query GetAllHomepageCaseStudies {
            allStrapiCaseStudy(limit: 7) {
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
                <Title>CASE STUDIES</Title>
                <Carousel hasArrow aria-label="Case studies carousel">
                    {allCaseStudies.map((caseStudy) => (
                        <Card
                            key={caseStudy.id}
                            title={caseStudy.Title}
                            description={caseStudy.Description}
                            href={`/customers/${caseStudy.Slug}`}
                            image={
                                <GatsbyImage
                                    image={
                                        caseStudy.Logo.localFile.childImageSharp
                                            .gatsbyImageData
                                    }
                                    alt={`${caseStudy.Title} logo`}
                                />
                            }
                        />
                    ))}
                </Carousel>
            </Wrapper>
        </DarkSwoopingLinesLeftDirectionBackground>
    );
};

export default SectionThree;
