import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import Grid from '../../Grid';
import Card from '../../Grid/Card';
import ButtonFilled from '../../LinksAndButtons/ButtonFilled';
import { sectionTitle } from '../styles.module.less';

const CaseStudies = () => {
    const {
        allStrapiCaseStudy: { nodes: caseStudies },
    } = useStaticQuery(graphql`
        query GetCaseStudies {
            allStrapiCaseStudy {
                nodes {
                    title: Title
                    description: Description
                    slug: Slug
                    id
                    hero: Logo {
                        alternativeText
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    quality: 100
                                    placeholder: BLURRED
                                    height: 172
                                    layout: FULL_WIDTH
                                )
                            }
                        }
                    }
                }
            }
        }
    `);

    const caseStudiesWithPrefixedSlugs = caseStudies.map((post) => ({
        ...post,
        slug: `customers/${post.slug}/`,
    }));

    const [visiblePosts, setVisiblePosts] = useState(9);

    const handleShowMore = () => {
        setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 9);
    };

    return (
        <section className={defaultWrapperGrey}>
            <Container isVertical>
                <h2 className={sectionTitle}>CASE STUDIES</h2>
                <Grid>
                    {caseStudiesWithPrefixedSlugs
                        .slice(0, visiblePosts)
                        .map((caseStudy) => (
                            <Card
                                key={caseStudy.id}
                                data={caseStudy}
                                footerTag="Case study"
                                hasImgBackground
                            />
                        ))}
                </Grid>
                {visiblePosts < caseStudiesWithPrefixedSlugs.length ? (
                    <ButtonFilled onClick={handleShowMore}>
                        Show more
                    </ButtonFilled>
                ) : null}
            </Container>
        </section>
    );
};

export default CaseStudies;
