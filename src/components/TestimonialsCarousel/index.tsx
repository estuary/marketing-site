import { graphql, useStaticQuery } from 'gatsby';
import { Divider } from '@mui/material';
import Carousel from '../Carousel';
import InternalLink from '../InternalLink';
import ArrowRightIcon from '../../svgs/arrow-right-2.svg';
import TestimonialAvatar from './TestimonialAvatar';
import {
    container,
    isDarkTheme,
    slide,
    header,
    authorInfoWrapper,
} from './styles.module.less';

type Testimonial = {
    id: string;
    logo: any;
    name: string;
    text: string;
    author?: {
        // TODO: Remove optional chaining (added for testing)
        name?: string;
        role?: string;
        avatar?: any;
    };
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
                    # author {
                    #     name
                    #     role
                    #     avatar {
                    #         localFile {
                    #             childImageSharp {
                    #                 gatsbyImageData(
                    #                     layout: CONSTRAINED
                    #                    placeholder: NONE
                    #                    quality: 100
                    #                    width: 67
                    #                )
                    #           }
                    #           extension
                    #           publicURL
                    #      }
                    #    }
                    # }
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
            hasMultipleItemsSlide
            aria-label="Customer testimonials carousel"
            arrowColor={theme === 'light' ? 'var(--white)' : 'var(--grey)'}
            options={{ align: 'start' }}
            slideSize="30%"
            slideHorizontalMargin="0"
            slideGap="32px"
            className={container}
        >
            {testimonials.map(({ id, logo, name, text }: Testimonial) => (
                <div key={id} className={slide}>
                    <div className={header}>
                        <TestimonialAvatar name={name} logo={logo} />
                        <div className={authorInfoWrapper}>
                            <span>{name}</span>
                            <span>Position, Company</span>
                        </div>
                        <TestimonialAvatar name={name} logo={logo} />
                    </div>
                    <Divider />
                    <h3>Lorem ipsum dolor sit amet, consectetur elit.</h3>
                    <p className={theme === 'dark' ? isDarkTheme : null}>
                        {text}
                    </p>
                    <InternalLink href="/" target="_blank">
                        Read the Success Story
                        <ArrowRightIcon />
                    </InternalLink>
                </div>
            ))}
        </Carousel>
    );
};

export default TestimonialsCarousel;
