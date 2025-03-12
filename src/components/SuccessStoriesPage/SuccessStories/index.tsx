import { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import Grid from '../../Grid';
import Card from '../../Grid/Card';
import ButtonFilled from '../../LinksAndButtons/ButtonFilled';
import { sectionTitle } from '../styles.module.less';
import { getSlugifiedText } from '../../../../shared';

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

    const priorityOrder = ['forward', 'headset', 'prodege'];

    const sortedSuccessStories = [...successStories].sort((a, b) => {
        const indexA = priorityOrder.findIndex((keyword) =>
            a.slug.includes(keyword)
        );
        const indexB = priorityOrder.findIndex((keyword) =>
            b.slug.includes(keyword)
        );

        if (indexA === -1 && indexB === -1) return 0;
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
    });

    const [visiblePostsAmount, setVisiblePostsAmount] = useState(9);

    const handleShowMore = () => {
        setVisiblePostsAmount(
            (prevVisiblePostsAmount) => prevVisiblePostsAmount + 9
        );
    };

    return (
        <section className={defaultWrapperGrey}>
            <Container isVertical>
                <h2 className={sectionTitle}>SUCCESS STORIES</h2>
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
