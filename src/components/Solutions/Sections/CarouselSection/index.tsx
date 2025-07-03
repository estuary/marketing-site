import React, { useMemo } from 'react';
import clsx from 'clsx';
import { CarouselSectionContent } from '../../../../templates/solutions/shared';
import Container from '../../../Container';
import { sectionText } from '../../styles.module.less';
import Carousel from '../../../Carousel';
import Card from '../../../Grid/Card';
import { getSlugifiedText } from '../../../../../shared';
import { container, slideCard, carousel } from './styles.module.less';

const cardType = {
    successStory: 'Success story',
    article: 'article',
};

interface CarouselSectionProps {
    data: CarouselSectionContent;
}

const CarouselSection: React.FC<CarouselSectionProps> = ({ data }) => {
    const carouselItems = useMemo(() => {
        const successStories = data.successStories ?? [];
        const blogPosts = data.blogPosts ?? [];

        return [
            ...successStories.map(({ slug, ...rest }) => ({
                ...rest,
                slug: `/success-stories/${slug}/`,
                type: cardType.successStory,
            })),
            ...blogPosts.map(({ slug, ...rest }) => ({
                ...rest,
                slug: `/blog/${slug}/`,
                type: cardType.article,
            })),
        ];
    }, [data.successStories, data.blogPosts]);

    return (
        <section>
            <Container
                isVertical
                className={clsx(sectionText, container)}
                isDarkTheme
            >
                <h2>{data.title}</h2>

                <Carousel
                    hasArrow
                    hasMultipleItemsSlide
                    aria-label="Successes and resources carousel"
                    options={{ align: 'start' }}
                    slideSize="30%"
                    slideGap="32px"
                    className={carousel}
                >
                    {carouselItems.map((item) => (
                        <Card
                            key={item.id}
                            data={item}
                            footerTag={item.type}
                            linkId={`${getSlugifiedText(item.title)}-popular-article/solution-page`}
                            target="_blank"
                            containerClassName={slideCard}
                            hasImgBackground={
                                item.type === cardType.successStory
                            }
                        />
                    ))}
                </Carousel>
            </Container>
        </section>
    );
};

export default CarouselSection;
