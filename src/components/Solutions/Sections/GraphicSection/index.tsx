import React from 'react';
import clsx from 'clsx';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GraphicSectionContent } from '../../../../templates/solutions/shared';
import Container from '../../../Container';
import SectionTitle from '../../SectionTitle';
import { sectionText } from '../../styles.module.less';
import List from '../../List';
import TextCardsList from '../../TextCardsList';
import {
    container,
    graphicContainer,
    cardsContainer,
    graphicWrapper,
    sectionDescription,
    graphicOnTheLeft,
    darkGraphicWrapper,
    centralizeGraphicTitle,
} from './styles.module.less';

interface GraphicSectionProps {
    data: GraphicSectionContent;
    isDarkTheme?: boolean;
    isGraphicOnTheLeft?: boolean;
    isGraphicTitleCentralized?: boolean;
}

const GraphicSection: React.FC<GraphicSectionProps> = ({
    data,
    isDarkTheme = false,
    isGraphicOnTheLeft = false,
    isGraphicTitleCentralized = false,
}) => {
    return (
        <section>
            <Container
                isVertical
                className={clsx(sectionText, container)}
                isDarkTheme={isDarkTheme}
            >
                <Container
                    className={clsx(
                        graphicContainer,
                        isGraphicOnTheLeft ? graphicOnTheLeft : null
                    )}
                    isDarkTheme={isDarkTheme}
                >
                    <div>
                        <SectionTitle sectionTitle={data.sectionTitle} />
                        {data.description ? (
                            <p className={sectionDescription}>
                                {data.description}
                            </p>
                        ) : null}
                        {data.list ? (
                            <List
                                title={data.list.title}
                                items={data.list.items}
                            />
                        ) : null}
                    </div>
                    <div
                        className={clsx(
                            graphicWrapper,
                            isDarkTheme ? darkGraphicWrapper : null,
                            isGraphicTitleCentralized
                                ? centralizeGraphicTitle
                                : null
                        )}
                    >
                        {data.graphic.title ? (
                            <h3>{data.graphic.title}</h3>
                        ) : null}
                        <GatsbyImage
                            image={
                                data.graphic.image.localFile.childImageSharp
                                    .gatsbyImageData
                            }
                            alt={data.graphic.image.alternativeText ?? ''}
                            loading="eager"
                        />
                        {data.graphic.subtitles &&
                        data.graphic.subtitles.length > 0 ? (
                            <ul>
                                {data.graphic.subtitles.map(
                                    (subtitle, index) => (
                                        <li
                                            key={`graphic-subtitle-${index + 1}`}
                                        >
                                            <div
                                                style={{
                                                    backgroundColor:
                                                        subtitle.color,
                                                }}
                                            />
                                            <span>{subtitle.name}</span>
                                        </li>
                                    )
                                )}
                            </ul>
                        ) : null}
                    </div>
                </Container>
                {data.cardsTitle ?? data.cardItems ? (
                    <Container
                        isVertical
                        className={cardsContainer}
                        isDarkTheme={isDarkTheme}
                    >
                        {data.cardsTitle ? (
                            <SectionTitle sectionTitle={data.cardsTitle} />
                        ) : null}
                        {data.cardItems ? (
                            <TextCardsList
                                items={data.cardItems.strapi_json_value}
                            />
                        ) : null}
                    </Container>
                ) : null}
            </Container>
        </section>
    );
};

export default GraphicSection;
