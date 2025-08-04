import { graphql, useStaticQuery } from 'gatsby';
import Carousel from '../Carousel';
import TestimonialSlide from './TestimonialSlide';
import { getSortedTestimonials } from './utils';
import { container } from './styles.module.less';

type TestimonialsCarouselProps = {
    theme?: 'dark' | 'light';
};

const TestimonialsCarousel = ({
    theme = 'dark',
}: TestimonialsCarouselProps) => {
    const {
        allStrapiTestimonial: { nodes: testimonials },
    } = useStaticQuery(graphql`
        query GetTestimonials {
            allStrapiTestimonial(sort: { createdAt: DESC }) {
                nodes {
                    id
                    name: Name
                    text: Text
                    logo: Logo {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: FULL_WIDTH
                                    placeholder: NONE
                                    quality: 100
                                    width: 80
                                )
                            }
                            extension
                            publicURL
                        }
                    }
                    author {
                        name
                        role
                        avatar {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(
                                        layout: CONSTRAINED
                                        placeholder: NONE
                                        quality: 100
                                        width: 80
                                    )
                                }
                                extension
                                publicURL
                            }
                        }
                    }
                    relatedSuccessStory {
                        slug
                    }
                }
            }
        }
    `);

    const orderedTestimonials = getSortedTestimonials(testimonials);

    return (
        <Carousel
            hasArrow
            hasMultipleItemsSlide
            aria-label="Customer testimonials carousel"
            arrowColor={theme === 'dark' ? 'var(--white)' : 'var(--grey)'}
            options={{ align: 'start' }}
            slideSize="30%"
            slideGap="32px"
            className={container}
        >
            {orderedTestimonials.map((item) => (
                <TestimonialSlide key={item.id} {...item} theme={theme} />
            ))}
        </Carousel>
    );
};

export default TestimonialsCarousel;
