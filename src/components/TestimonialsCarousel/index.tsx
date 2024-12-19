import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import Carousel from '../Carousel';
import TestimonialAvatar from './TestimonialAvatar';
import { description, isDarkTheme, slide, title } from './styles.module.less';

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
            arrowColor={theme === 'light' ? 'var(--white)' : 'var(--grey)'}
            hasFullWidthSlide
            options={{ loop: true }}
        >
            {testimonials.map(({ id, logo, name, text }: Testimonial) => (
                <div key={id} className={slide}>
                    <TestimonialAvatar name={name} logo={logo} />
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
            ))}
        </Carousel>
    );
};

export default TestimonialsCarousel;
