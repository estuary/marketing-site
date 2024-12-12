import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import Grid from '../../Grid';
import Card from '../../Grid/Card';
import { sectionTitle } from './styles.module.less';

const CaseStudies = () => {
    const {
        allStrapiCaseStudy: { nodes: caseStudies },
    } = useStaticQuery(graphql`
        query GetCaseStudies {
            allStrapiCaseStudy(limit: 9) {
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

    return (
        <section className={defaultWrapperGrey}>
            <Container isVertical>
                <h2 className={sectionTitle}>CASE STUDIES</h2>
                <Grid>
                    {caseStudiesWithPrefixedSlugs.map((caseStudy) => (
                        <Card
                            key={caseStudy.id}
                            data={caseStudy}
                            footerTag="Case study"
                        />
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default CaseStudies;
