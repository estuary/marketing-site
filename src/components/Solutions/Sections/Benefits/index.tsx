import Container from '../../../Container';
import { defaultWrapperGrey } from '../../../../globalStyles/wrappers.module.less';
import Card from '../../Card';
import { sectionText } from '../../styles.module.less';
import { BenefitsSectionContent } from '../../../../templates/solutions/shared';
import { wrapper } from './styles.module.less';

interface BenefitsProps {
    data: BenefitsSectionContent;
}

const Benefits = ({ data }: BenefitsProps) => {
    return (
        <section className={defaultWrapperGrey}>
            <Container className={wrapper} isVertical>
                <div className={sectionText}>
                    <h2>
                        <span>{data.title.highlightedText}</span>{' '}
                        {data.title.normalText}
                    </h2>
                    <p>{data.description}</p>
                </div>
                <ul>
                    {data.benefitItems.map((benefit, index) => (
                        <li key={index}>
                            <Card text={benefit} imageIndex={index + 1} />
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default Benefits;
