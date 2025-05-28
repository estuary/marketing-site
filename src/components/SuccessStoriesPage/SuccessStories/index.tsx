// src/components/SuccessStories/index.tsx
import { useMemo, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import lunr, { type Index } from 'lunr';
import Container from '../../Container';
import Grid from '../../Grid';
import Card from '../../Grid/Card';
import ButtonFilled from '../../LinksAndButtons/ButtonFilled';
import { sectionTitle, searchInput, grid } from '../styles.module.less';
import {
    getSlugifiedText,
    getSortedSuccessStories,
    searchIndex,
} from '../../../../shared';
import SearchInput from '../../SearchInput';

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

    const [visibleSuccessStoriesAmount, setVisibleSuccessStoriesAmount] =
        useState(9);
    const handleShowMore = () => {
        setVisibleSuccessStoriesAmount((prev) => prev + 9);
    };

    const index: Index = useMemo(
        () => lunr.Index.load(JSON.parse(localSearchCases.index)),
        [localSearchCases.index]
    );

    const [query, setQuery] = useState('');
    const handleQueryChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
        setQuery(evt.target.value);

    const results = useMemo(
        () => searchIndex(index, localSearchCases.store, query),
        [query, index, localSearchCases.store]
    );

    const successStoriesToRender =
        query.length > 0 ? results : sortedSuccessStories;
    const noSearchResultsFound = query.length > 0 && results.length === 0;

    return (
        <section>
            <Container isVertical>
                <h2 className={sectionTitle}>Success stories</h2>
                <SearchInput
                    placeholder="Search success stories"
                    handleQueryChange={handleQueryChange}
                    className={searchInput}
                />

                {noSearchResultsFound ? (
                    <p>No results found.</p>
                ) : (
                    <Grid className={grid}>
                        {successStoriesToRender
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

                {visibleSuccessStoriesAmount < successStoriesToRender.length &&
                !noSearchResultsFound ? (
                    <ButtonFilled onClick={handleShowMore}>
                        Show more
                    </ButtonFilled>
                ) : null}
            </Container>
        </section>
    );
};

export default SuccessStories;
