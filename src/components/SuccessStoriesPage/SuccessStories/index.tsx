import { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import Grid from '../../Grid';
import Card from '../../Grid/Card';
import ButtonFilled from '../../LinksAndButtons/ButtonFilled';
import { sectionTitle } from '../styles.module.less';
import { getSlugifiedText, getSortedSuccessStories } from '../../../../shared';

const SuccessStories = () => {
    const {
        allStrapiCaseStudy: { nodes: successStories },
    } = useStaticQuery(graphql`
        query GetSuccessStories {
            allStrapiCaseStudy(sort: { fields: [createdAt], order: DESC }) {
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

    const sortedSuccessStories = getSortedSuccessStories(successStories);

    const [visiblePostsAmount, setVisiblePostsAmount] = useState(9);

    const handleShowMore = () => {
        setVisiblePostsAmount(
            (prevVisiblePostsAmount) => prevVisiblePostsAmount + 9
        );
    };

    return (
        <section className={defaultWrapperGrey}>
            <Container isVertical>
                <h2 className={sectionTitle}>Success stories</h2>
                <Grid>
                    {sortedSuccessStories
                        .slice(0, visiblePostsAmount)
                        .map((successStory) => (
                            <Card
                                key={successStory.id}
                                data={successStory}
                                footerTag="Success story"
                                hasImgBackground
                                linkId={`${getSlugifiedText(successStory.title)}-card-button/success-stories-page`}
                            />
                        ))}
                </Grid>
                {visiblePostsAmount < successStories.length ? (
                    <ButtonFilled onClick={handleShowMore}>
                        Show more
                    </ButtonFilled>
                ) : null}
            </Container>
        </section>
    );
};

export default SuccessStories;
