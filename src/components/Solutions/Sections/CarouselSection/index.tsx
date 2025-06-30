import React, { useMemo } from 'react';
import clsx from 'clsx';
import { useMediaQuery } from '@mui/material';
import { CarouselSectionContent } from '../../../../templates/solutions/shared';
import Container from '../../../Container';
import { sectionText } from '../../styles.module.less';
import Carousel from '../../../Carousel';
import Card from '../../../Grid/Card';
import { getSlugifiedText } from '../../../../../shared';
import {
    container,
    slideCard,
    carousel,
    cardsList,
} from './styles.module.less';

const CARD_TYPE = {
    successStory: 'Success story',
    article: 'Article',
} as const;

type CardItem = {
    id: string;
    title: string;
    slug: string;
    type: (typeof CARD_TYPE)[keyof typeof CARD_TYPE];
};

interface CarouselSectionProps {
    data: CarouselSectionContent;
}

const CarouselSection = ({ data }: CarouselSectionProps) => {
    const isMobile = useMediaQuery('(max-width:768px)');

    const items = useMemo<CardItem[]>(() => {
        const stories = data.successStories ?? [];
        const posts = data.blogPosts ?? [];

        return [
            ...stories.map(({ id, slug, ...rest }) => ({
                id,
                ...rest,
                slug: `/success-stories/${slug}/`,
                type: CARD_TYPE.successStory,
            })),
            ...posts.map(({ id, slug, ...rest }) => ({
                id,
                ...rest,
                slug: `/blog/${slug}/`,
                type: CARD_TYPE.article,
            })),
        ];
    }, [data.successStories, data.blogPosts]);

    const renderCards = () =>
        items.map((item) => (
            <Card
                key={item.id}
                data={item}
                footerTag={item.type}
                linkId={`${getSlugifiedText(item.title)}-popular-article-solution-page`}
                target="_blank"
                containerClassName={slideCard}
                hasImgBackground={item.type === CARD_TYPE.successStory}
            />
        ));

    return (
        <section>
            <Container
                isVertical
                className={clsx(sectionText, container)}
                isDarkTheme
            >
                <h2>{data.title}</h2>

                {isMobile ? (
                    <div className={cardsList}>{renderCards()}</div>
                ) : (
                    <Carousel
                        hasArrow
                        hasMultipleItemsSlide
                        aria-label="Successes and resources carousel"
                        options={{ align: 'start' }}
                        slideSize="30%"
                        slideGap="32px"
                        className={carousel}
                    >
                        {renderCards()}
                    </Carousel>
                )}
            </Container>
        </section>
    );
};

export default CarouselSection;
