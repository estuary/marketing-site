import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Carousel from '../../Carousel';
import {
    AvatarImg,
    AvatarSvg,
    AvatarWrapper,
    Container,
    Description,
    Slide,
    Title,
    Wrapper,
} from './styles';

type Testimonial = {
    id: string;
    logo: any;
    name: string;
    text: string;
};

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
                <Carousel hasArrow aria-label="Customer testimonials carousel">
                    {testimonials.map(
                        ({ id, logo, name, text }: Testimonial) => {
                            const isImageSvg =
                                !logo.localFile.childImageSharp &&
                                logo.localFile.extension === 'svg';

                            return (
                                <Slide key={id}>
                                    <AvatarWrapper>
                                        {isImageSvg ? (
                                            <AvatarSvg
                                                src={logo.localFile.publicURL}
                                                alt={`${name} avatar`}
                                                width={110}
                                                height={110}
                                            />
                                        ) : (
                                            <AvatarImg
                                                image={
                                                    logo.localFile
                                                        .childImageSharp
                                                        ?.gatsbyImageData
                                                }
                                                $isSeattleDataGuyLogo={
                                                    name === 'Seattle Data Guy'
                                                }
                                                alt={`${name} avatar`}
                                            />
                                        )}
                                    </AvatarWrapper>
                                    <Title>{name}</Title>
                                    <Description>{text}</Description>
                                </Slide>
                            );
                        }
                    )}
                </Carousel>
            </Wrapper>
        </Container>
    );
};

export default SectionNine;
