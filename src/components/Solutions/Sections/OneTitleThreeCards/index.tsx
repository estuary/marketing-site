import clsx from 'clsx';
import { sectionText } from '../../styles.module.less';
import { OneTitleThreeCardsSectionContent } from '../../../../templates/solutions/shared';
import { SectionTheme } from '../shared';
import Card from './Card';
import { grid, darkGrid, atLeastOneKeyFeature } from './styles.module.less';

interface OneTitleThreeCardsProps extends SectionTheme {
    data: OneTitleThreeCardsSectionContent;
}

const OneTitleThreeCards = ({
    data,
    isDarkTheme = false,
}: OneTitleThreeCardsProps) => {
    return (
        <section>
            <div
                className={clsx(
                    grid,
                    isDarkTheme ? darkGrid : null,
                    data.cardItems.strapi_json_value.length > 0
                        ? atLeastOneKeyFeature
                        : null
                )}
            >
                <div className={sectionText}>
                    <h2>
                        <span>{data.sectionTitle.highlightedText}</span>{' '}
                        {data.sectionTitle.normalText}
                    </h2>
                    <p>{data.description}</p>
                </div>
                {data.cardItems[0] ? (
                    <Card
                        title={data.cardItems[0].title}
                        description={data.cardItems[0].description}
                    />
                ) : null}
                {data.cardItems[1] ? (
                    <Card
                        title={data.cardItems[1].title}
                        description={data.cardItems[1].description}
                    />
                ) : null}
                {data.cardItems[2] ? (
                    <Card
                        title={data.cardItems[2].title}
                        description={data.cardItems[2].description}
                    />
                ) : null}
            </div>
        </section>
    );
};

export default OneTitleThreeCards;
