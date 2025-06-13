import { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Alert } from '@mui/material';
import Container from '../../Container';
import Grid from '../../Grid';
import Card from '../../Grid/Card';
import ButtonFilled from '../../LinksAndButtons/ButtonFilled';
import SearchInput from '../../SearchInput';
import { sectionTitle, searchInput, grid } from '../styles.module.less';
import { getSlugifiedText, getSortedSuccessStories } from '../../../../shared';
import { useSearch } from '../../../hooks/useSearch';
import { getSearchIndexFn } from '../../../hooks/useSearch/searchIndex';
import { successStoriesSearchBlocks } from '../../../hooks/useSearch/searchBlocks';

const SuccessStories = () => {
    const {
        allStrapiCaseStudy: { nodes: successStories },
        localSearchCases,
    } = useStaticQuery(graphql`
        query GetSuccessStories {
            localSearchCases {
                index
                store
            }
            allStrapiCaseStudy(sort: { createdAt: DESC }) {
                nodes {
                    title: Title
                    description: Description
                    slug: Slug
                    id
                    tags {
                        Name
                        Slug
                        Type
                    }
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

    const { results, handleQueryChange, noResults } = useSearch({
        indexJson: localSearchCases.index,
        store: localSearchCases.store,
        defaultItems: sortedSuccessStories,
        searchIndexFn: getSearchIndexFn(successStoriesSearchBlocks),
    });

    const [visibleSuccessStoriesAmount, setVisibleSuccessStoriesAmount] =
        useState(9);
    const handleShowMore = () => {
        setVisibleSuccessStoriesAmount((prev) => prev + 9);
    };

    return (
        <section>
            <Container isVertical>
                <h2 className={sectionTitle}>Success stories</h2>
                <SearchInput
                    placeholder="Search success stories"
                    handleQueryChange={handleQueryChange}
                    className={searchInput}
                />

                {noResults ? (
                    <Alert severity="info">No success stories found.</Alert>
                ) : (
                    <Grid className={grid}>
                        {results
                            .slice(0, visibleSuccessStoriesAmount)
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
                )}

                {!noResults && visibleSuccessStoriesAmount < results.length ? (
                    <ButtonFilled onClick={handleShowMore}>
                        Show more
                    </ButtonFilled>
                ) : null}
            </Container>
        </section>
    );
};

export default SuccessStories;
