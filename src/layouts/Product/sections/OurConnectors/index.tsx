import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { DefaultWrapper } from '../../../../styles/wrappers';
import {
    Button,
    ContainerContent,
    ContainerImage,
    ContainerTopics,
    PrimaryTextColor,
    SecondaryTextColor,
    Title,
    Topic,
    Wrapper,
} from './style';

const OurConnectors = () => {
    return (
        <DefaultWrapper>
            <Wrapper>
                <ContainerImage>
                    <StaticImage
                        className="mobile-image"
                        placeholder="none"
                        alt="our connectors"
                        src="../../../../images/lp-product/our-connectors-mobile.png"
                        layout="constrained"
                        width={336}
                        height={748}
                        quality={100}
                    />
                    <StaticImage
                        className="desktop-image"
                        placeholder="none"
                        alt="our connectors"
                        src="../../../../images/lp-product/our-connectors-desktop.png"
                        layout="constrained"
                    />
                </ContainerImage>
                <ContainerContent>
                    <div>
                        <Title>
                            USE <PrimaryTextColor>OUR</PrimaryTextColor>{' '}
                            <SecondaryTextColor>CONNECTORS,</SecondaryTextColor>
                        </Title>
                        <Title>
                            ADD <PrimaryTextColor>YOUR</PrimaryTextColor>{' '}
                            <SecondaryTextColor>CONNECTORS.</SecondaryTextColor>
                        </Title>
                    </div>
                    <ContainerTopics>
                        <Topic>
                            Capture using log-based CDC or SaaS systems in
                            real-time with custom-built Estuary connectors
                        </Topic>
                        <Topic>
                            Bring your own connector through open protocol
                        </Topic>
                    </ContainerTopics>
                    <Button target="_blank" to="/integrations">
                        View connectors
                    </Button>
                </ContainerContent>
            </Wrapper>
        </DefaultWrapper>
    );
};

export default OurConnectors;
