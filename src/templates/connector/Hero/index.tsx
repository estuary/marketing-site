import {
    GatsbyImage,
    ImageDataLike,
    StaticImage,
    getImage,
} from 'gatsby-plugin-image';
import React from 'react';

import { ConnectorType } from '../../../../shared';
import { SwoopingLinesBackground } from '../../../styles/heros';
import Content from './components/Content';

import {
    Container,
    ContainerImage,
    FlowStepOne,
    FlowStepThree,
    FlowStepTwo,
    FrameContainer,
    LogoContainer,
    logoImageStyle,
} from './styles';

type HeroProps = {
    connector: {
        title: string;
        logo: ImageDataLike;
        type: ConnectorType;
    };
};

const Hero = ({ connector: { title, logo, type } }: HeroProps) => {
    const logoImage = getImage(logo);

    return (
        <SwoopingLinesBackground>
            <Container>
                <Content
                    connector={{
                        title,
                        type,
                    }}
                />
                <ContainerImage>
                    <FlowStepOne>
                        <span>01.</span>{' '}
                        {type === 'capture'
                            ? `Move from ${title}`
                            : 'Select a source'}
                    </FlowStepOne>
                    <FlowStepTwo>
                        <span>02.</span> Transform in-flight
                    </FlowStepTwo>
                    <FlowStepThree>
                        <span>03.</span>{' '}
                        {type === 'materialization'
                            ? `Deliver to ${title}`
                            : 'Select a destination'}
                    </FlowStepThree>
                    <LogoContainer $connectorType={type}>
                        <GatsbyImage
                            alt={`${title} logo`}
                            image={logoImage}
                            style={logoImageStyle}
                        />
                    </LogoContainer>
                    <FrameContainer>
                        {type === 'capture' ? (
                            <StaticImage
                                placeholder="none"
                                alt="take a tour"
                                src="../../../images/lp-connector/hero/FlowFromSource.png"
                                imgStyle={{
                                    objectFit: 'contain',
                                }}
                            />
                        ) : (
                            <StaticImage
                                placeholder="none"
                                alt="take a tour"
                                src="../../../images/lp-connector/hero/FlowToDestination.png"
                                imgStyle={{
                                    objectFit: 'contain',
                                }}
                            />
                        )}
                    </FrameContainer>
                </ContainerImage>
            </Container>
        </SwoopingLinesBackground>
    );
};

export default Hero;
