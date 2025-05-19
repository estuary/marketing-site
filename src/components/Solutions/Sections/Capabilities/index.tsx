import clsx from 'clsx';
import Container from '../../../Container';

import { sectionText } from '../../styles.module.less';
import { CapabilitiesSectionContent } from '../../../../templates/solutions/shared';
import { SectionTheme } from '../shared';
import Card from './Card';
import { wrapper, box, darkBox } from './styles.module.less';

interface CapabilitiesProps extends SectionTheme {
    data: CapabilitiesSectionContent;
}

const Capabilities = ({ data, isDarkTheme = false }: CapabilitiesProps) => {
    return (
        <section className={wrapper}>
            <Container
                className={sectionText}
                isDarkTheme={isDarkTheme}
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
                    <div className={clsx(box, isDarkTheme ? darkBox : null)}>
                        <ul>
                            {data.capabilityItems.strapi_json_value.map(
                                (capability, index) => (
                                    <li key={index}>
                                        <Card
                                            text={capability}
                                            isDarkTheme={isDarkTheme}
                                        />
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
