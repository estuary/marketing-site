import { graphql, useStaticQuery } from 'gatsby';
import Container from '../../Container';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import TestimonialAvatar from '../../TestimonialsCarousel/TestimonialAvatar';
import SlideDeckCarousel from '../../SlideDeckCarousel';
import { sectionTitle } from '../styles.module.less';
import Card from './Card';

const WhatCustomersSay = () => {
    const {
        allStrapiTestimonial: { nodes: testimonials },
    } = useStaticQuery(graphql`
        query GetAllTestimonials {
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
                            publicURL
                            extension
                        }
                    }
                }
            }
        }
    `);

    return (
        <section className={defaultWrapperDarkBlue}>
            <Container isVertical isDarkTheme>
                <h2 className={sectionTitle}>
                    What <span>our customers</span> say about us
                </h2>
                <SlideDeckCarousel
                    items={testimonials}
                    itemsPerSlide={3}
                    ariaLabel="Testimonials carousel"
                    renderCard={({ id, name, logo, text }) => (
                        <Card
                            key={id}
                            avatar={
                                <TestimonialAvatar name={name} logo={logo} />
                            }
                            name={name}
                            description={text}
                        />
                    )}
                />
            </Container>
        </section>
    );
};

export default WhatCustomersSay;
