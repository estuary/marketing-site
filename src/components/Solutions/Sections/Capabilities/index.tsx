import clsx from 'clsx';
import Container from '../../../Container';
import { defaultWrapperDarkBlue } from '../../../../globalStyles/wrappers.module.less';
import { sectionText } from '../../styles.module.less';
import { CapabilitiesSectionContent } from '../../../../templates/solutions/shared';
import Card from './Card';
import { wrapper, box } from './styles.module.less';

interface CapabilitiesProps {
    data: CapabilitiesSectionContent;
}

const Capabilities = ({ data }: CapabilitiesProps) => {
    return (
        <section className={clsx(defaultWrapperDarkBlue, wrapper)}>
            <Container
                className={sectionText}
                isDarkTheme
                isReverseColumnOnMobile
            >
                <div>
                    <h2>
                        <span>{data.sectionTitle.highlightedText}</span>{' '}
                        {data.sectionTitle.normalText}
                    </h2>
                    <p>{data.description}</p>
                </div>
                <div>
                    <div className={box}>
                        <ul>
                            {data.capabilityItems.strapi_json_value.map(
                                (capability, index) => (
                                    <li key={index}>
                                        <Card text={capability} isDarkTheme />
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Capabilities;
