import Container from '../../../Container';
import Card from '../../Card';
import { sectionText } from '../../styles.module.less';
import { BenefitsSectionContent } from '../../../../templates/solutions/shared';
import { SectionTheme } from '../shared';
import SectionTitle from '../../SectionTitle';
import { wrapper } from './styles.module.less';

interface BenefitsProps extends SectionTheme {
    data: BenefitsSectionContent;
}

const Benefits = ({ data, isDarkTheme = false }: BenefitsProps) => {
    return (
        <section>
            <Container className={wrapper} isVertical isDarkTheme={isDarkTheme}>
                <div className={sectionText}>
                    <SectionTitle sectionTitle={data.sectionTitle} />
                    <p>{data.description}</p>
                </div>
                <ul>
                    {data.benefitItems.strapi_json_value.map(
                        (benefit, index) => (
                            <li key={index}>
                                <Card
                                    text={benefit}
                                    image={
                                        data.images[index].localFile
                                            .childrenImageSharp[0]
                                            .gatsbyImageData
                                    }
                                    isDarkTheme={isDarkTheme}
                                />
                            </li>
                        )
                    )}
                </ul>
            </Container>
        </section>
    );
};

export default Benefits;
