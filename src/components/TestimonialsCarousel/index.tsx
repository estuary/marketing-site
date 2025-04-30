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
    headerWithAuthor,
} from './styles.module.less';
import { getSortedTestimonials } from './utils';

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
            allStrapiTestimonial(sort: { createdAt: DESC }) {
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
                                        width: 80
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
                                    width: 80
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

    const orderedTestimonials = getSortedTestimonials(testimonials);

    return (
        <Carousel
            hasArrow
            hasMultipleItemsSlide
            aria-label="Customer testimonials carousel"
            arrowColor={theme === 'light' ? 'var(--white)' : 'var(--grey)'}
            options={{ align: 'start' }}
            slideSize="30%"
            slideGap="32px"
            className={container}
        >
            {orderedTestimonials.map(
                ({ id, logo, name, text, author, relatedSuccessStory }) => (
                    <div key={id} className={slide}>
                        <div
                            className={clsx(
                                header,
                                author ? headerWithAuthor : null
                            )}
                        >
                            <TestimonialAvatar
                                name={name}
                                logo={author?.avatar ?? logo}
                                isLogo={!author?.avatar}
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
                                <TestimonialAvatar
                                    name={name}
                                    logo={logo}
                                    isLogo
                                />
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
