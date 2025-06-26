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
} from './styles.module.less';

interface GraphicSectionProps {
    data: GraphicSectionContent;
}

const GraphicSection: React.FC<GraphicSectionProps> = ({ data }) => {
    return (
        <section>
            <Container isVertical className={clsx(sectionText, container)}>
                <Container className={graphicContainer}>
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
                    <div className={graphicWrapper}>
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
                        <ul>
                            {data.graphic.subtitles?.map((subtitle, index) => (
                                <li key={`graphic-subtitle-${index + 1}`}>
                                    <div
                                        style={{
                                            backgroundColor: subtitle.color,
                                        }}
                                    />
                                    <span>{subtitle.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
                <Container isVertical className={cardsContainer}>
                    {data.cardsTitle ? (
                        <SectionTitle sectionTitle={data.cardsTitle} />
                    ) : null}
                    <TextCardsList items={data.cardItems.strapi_json_value} />
                </Container>
            </Container>
        </section>
    );
};

export default GraphicSection;
