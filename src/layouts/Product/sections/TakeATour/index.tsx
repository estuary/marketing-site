import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { webinarsUrl } from '../../../../../shared';
import { SwoopingLinesBackground } from '../../../../styles/heros';
import {
    ActionLink,
    Button,
    ContainerButton,
    ContainerContent,
    ContainerIcon,
    ContainerIcons,
    ContainerImage,
    Description,
    Title,
    Wrapper,
} from './styles';

const TakeATour = () => {
    return (
        <SwoopingLinesBackground>
            <Wrapper>
                <ContainerImage>
                    <StaticImage
                        alt="Laptop"
                        src="../../../../images/lp-product/laptop.png"
                        layout="constrained"
                    />
                </ContainerImage>
                <ContainerContent>
                    <ContainerIcons>
                        <ContainerIcon>
                            <StaticImage
                                alt="Microsoft Logo"
                                src="../../../../images/microsoft-logo.png"
                                width={46}
                                height={46}
                                quality={100}
                            />
                        </ContainerIcon>
                        <ContainerIcon>
                            <StaticImage
                                alt="AWS Logo"
                                src="../../../../images/aws-logo.png"
                                width={46}
                                height={46}
                                quality={100}
                            />
                        </ContainerIcon>
                        <ContainerIcon>
                            <StaticImage
                                alt="Google Cloud Logo"
                                src="../../../../images/google-cloud-logo.png"
                                width={46}
                                height={46}
                                quality={100}
                            />
                        </ContainerIcon>
                    </ContainerIcons>
                    <Title>TAKE A TOUR</Title>
                    <Description>
                        Learn more about how Estuary can help with real-time
                        replication.
                    </Description>
                    <ContainerButton>
                        <ActionLink target="_blank" to="/why">
                            Self-Guided Tour [1 min]
                        </ActionLink>
                        <Button target="_blank" href={webinarsUrl}>
                            Product Overview [30 min]
                        </Button>
                    </ContainerButton>
                </ContainerContent>
            </Wrapper>
        </SwoopingLinesBackground>
    );
};

export default TakeATour;
