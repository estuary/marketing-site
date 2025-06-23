import { sectionText } from '../../styles.module.less';
import { OneTitleThreeCardsSectionContent } from '../../../../templates/solutions/shared';
import Container from '../../../Container';
import SectionTitle from '../../SectionTitle';
import Card from './Card';
import { container } from './styles.module.less';

interface OneTitleThreeCardsProps {
    data: OneTitleThreeCardsSectionContent;
}

const OneTitleThreeCards = ({ data }: OneTitleThreeCardsProps) => {
    return (
        <section>
            <Container isVertical className={container}>
                <div className={sectionText}>
                    <SectionTitle sectionTitle={data.sectionTitle} />
                    {data.description ? <p>{data.description}</p> : null}
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
