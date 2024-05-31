import { graphql, useStaticQuery } from 'gatsby';
import 'keen-slider/keen-slider.min.css';
import * as React from 'react';
import Carousel from '../../Carousel';
import { Container, Wrapper } from './styles';

const SectionNine = () => {
    const {
        allStrapiTestimonial: { nodes: testimonials },
    } = useStaticQuery(graphql`
        query GetTestimonials {
            allStrapiTestimonial(sort: { Name: DESC }) {
                nodes {
                    name: Name
                    text: Text
                    id
                    logo: Logo {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: CONSTRAINED
                                    placeholder: NONE
                                    quality: 100
                                    width: 110
                                )
                            }
                            extension
                            publicURL
                        }
                    }
                }
            }
        }
    `);

    return (
        <Container>
            <Wrapper>
                <Carousel data={testimonials} />
            </Wrapper>
        </Container>
    );
};

export default SectionNine;
