import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Carousel from '../Carousel';
import {
    avatarImg,
    avatarSvg,
    avatarWrapper,
    description,
    isDarkTheme,
    isSeattleDataGuyLogo,
    slide,
    title,
} from './styles.module.less';

type Testimonial = {
    id: string;
    logo: any;
    name: string;
    text: string;
};

type TestimonialsCarouselProps = {
    theme?: 'light' | 'dark';
};

const TestimonialsCarousel = ({
    theme = 'light',
}: TestimonialsCarouselProps) => {
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
        <Carousel
            hasArrow
            aria-label="Customer testimonials carousel"
            arrowColor={theme === 'light' ? '#ffffff' : '#47506D'}
            hasFullWidthSlide
            options={{ loop: true }}
        >
            {testimonials.map(({ id, logo, name, text }: Testimonial) => {
                const isImageSvg =
                    !logo.localFile.childImageSharp &&
                    logo.localFile.extension === 'svg';

                return (
                    <div key={id} className={slide}>
                        <div className={avatarWrapper}>
                            {isImageSvg ? (
                                <img
                                    src={logo.localFile.publicURL}
                                    alt={`${name} avatar`}
                                    width={110}
                                    height={110}
                                    className={avatarSvg}
                                    loading="lazy"
                                />
                            ) : (
                                <GatsbyImage
                                    image={
                                        logo.localFile.childImageSharp
                                            ?.gatsbyImageData
                                    }
                                    alt={`${name} avatar`}
                                    className={clsx(
                                        avatarImg,
                                        name === 'Seattle Data Guy' &&
                                            isSeattleDataGuyLogo
                                    )}
                                />
                            )}
                        </div>
                        <h3 className={title}>{name}</h3>
                        <p
                            className={clsx(
                                description,
                                theme === 'dark' && isDarkTheme
                            )}
                        >
                            {text}
                        </p>
                    </div>
                );
            })}
        </Carousel>
    );
};

export default TestimonialsCarousel;
