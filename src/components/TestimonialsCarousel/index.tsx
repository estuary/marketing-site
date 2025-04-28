import { graphql, useStaticQuery } from 'gatsby';
import { Divider } from '@mui/material';
import clsx from 'clsx';
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
    threeRowsText,
} from './styles.module.less';

type Testimonial = {
    id: string;
    logo: any;
    name: string;
    text: string;
    author?: {
        name: string;
        role: string;
        avatar: any;
    };
    relatedSuccessStory?: {
        slug: string;
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
                                        width: 69
                                    )
                                }
                                extension
                                publicURL
                            }
                        }
                    }
                    text: Text
                    id
                    relatedSuccessStory {
                        slug: Slug
                    }
                    logo: Logo {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: FULL_WIDTH
                                    placeholder: NONE
                                    quality: 100
                                    width: 67
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
            {testimonials.map(
                ({
                    id,
                    logo,
                    name,
                    text,
                    author,
                    relatedSuccessStory,
                }: Testimonial) => (
                    <div
                        key={id}
                        className={clsx(
                            slide,
                            relatedSuccessStory ? threeRowsText : null
                        )}
                    >
                        <div className={header}>
                            <TestimonialAvatar
                                name={name}
                                logo={author?.avatar ?? logo}
                            />
                            <div className={authorInfoWrapper}>
                                <h3>{author?.name ?? name}</h3>
                                {author?.avatar ? (
                                    <span>
                                        {author.role}, {name}
                                    </span>
                                ) : null}
                            </div>
                            {author?.avatar ? (
                                <TestimonialAvatar name={name} logo={logo} />
                            ) : null}
                        </div>
                        <Divider />
                        <p className={theme === 'dark' ? isDarkTheme : null}>
                            {text}
                        </p>
                        {relatedSuccessStory?.slug ? (
                            <InternalLink
                                href={`/success-stories/${relatedSuccessStory.slug}`}
                                target="_blank"
                            >
                                Read the Success Story
                                <ArrowRightIcon />
                            </InternalLink>
                        ) : null}
                    </div>
                )
            )}
        </Carousel>
    );
};

export default TestimonialsCarousel;
