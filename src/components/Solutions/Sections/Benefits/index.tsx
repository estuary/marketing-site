import Container from '../../../Container';
import {
    defaultWrapperGrey,
    defaultWrapperDarkBlue,
} from '../../../../globalStyles/wrappers.module.less';
import Card from '../../Card';
import { sectionText } from '../../styles.module.less';
import { BenefitsSectionContent } from '../../../../templates/solutions/shared';
import { SectionTheme } from '../shared';
import { wrapper } from './styles.module.less';

interface BenefitsProps extends SectionTheme {
    data: BenefitsSectionContent;
}

const Benefits = ({ data, isDarkTheme = false }: BenefitsProps) => {
    return (
        <section
            className={
                isDarkTheme ? defaultWrapperDarkBlue : defaultWrapperGrey
            }
        >
            <Container className={wrapper} isVertical isDarkTheme={isDarkTheme}>
                <div className={sectionText}>
                    <h2>
                        <span>{data.sectionTitle.highlightedText}</span>{' '}
                        {data.sectionTitle.normalText}
                    </h2>
                    <p>{data.description}</p>
                </div>
                <ul>
                    {data.benefitItems.strapi_json_value.map(
                        (benefit, index) => (
                            <li key={index}>
                                <Card
                                    text={benefit}
                                    imageIndex={index + 1}
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
