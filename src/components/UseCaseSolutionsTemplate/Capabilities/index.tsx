import React from 'react';
import clsx from 'clsx';
import { CapabilitiesSectionContent } from '../../../templates/use-case-solutions';
import Container from '../../Container';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import { container, tagStyle } from '../styles.module.less';
import Card from './Card';
import { wrapper, box } from './styles.module.less';

interface CapabilitiesProps {
    data: CapabilitiesSectionContent;
}

const Capabilities = ({ data }: CapabilitiesProps) => {
    return (
        <section className={clsx(defaultWrapperDarkBlue, wrapper)}>
            <Container
                className={container}
                isDarkTheme
                isReverseColumnOnMobile
            >
                <div>
                    <h2>
                        <span>{data.title.highlightedText}</span>{' '}
                        {data.title.normalText}
                    </h2>
                    <p>{data.description}</p>
                </div>
                <div>
                    <div className={box}>
                        <span className={tagStyle}>Capabilities</span>
                        <ul>
                            {data.capabilityItems.map((capability, index) => (
                                <li key={index}>
                                    <Card text={capability} isDarkTheme />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Capabilities;
