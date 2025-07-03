import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import { sectionText } from '../../styles.module.less';
import { OneTitleThreeCardsSectionContent } from '../../../../templates/solutions/shared';
import Container from '../../../Container';
import SectionTitle from '../../SectionTitle';
import Card from './Card';
import { container, snowflakeBadgeWrapper, header } from './styles.module.less';

interface OneTitleThreeCardsProps {
    data: OneTitleThreeCardsSectionContent;
    isSnowflakeSolution?: boolean;
}

const OneTitleThreeCards = ({
    data,
    isSnowflakeSolution = false,
}: OneTitleThreeCardsProps) => {
    return (
        <section>
            <Container isVertical className={clsx(sectionText, container)}>
                <div className={header}>
                    {isSnowflakeSolution ? (
                        <div className={snowflakeBadgeWrapper}>
                            <StaticImage
                                src="../../../../images/trusted-partner-badges/ai-data-cloud-products-snowflake-partner.png"
                                alt="AI data-cloud products partner"
                                placeholder="blurred"
                                quality={100}
                                loading="eager"
                                width={100}
                                height={100}
                            />
                        </div>
                    ) : null}
                    <SectionTitle sectionTitle={data.sectionTitle} />
                </div>
                <ul>
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
                </ul>
            </Container>
        </section>
    );
};

export default OneTitleThreeCards;
