import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { dashboardRegisterUrl } from '../../../../shared';
import {
    Button,
    ContainerWrapper,
    Container,
    ContainerImage,
    Content,
    Title,
    Wrapper,
} from './style';

const RealTime = () => {
    return (
        <Wrapper>
            <ContainerWrapper>
                <Container>
                    <Content>
                        <Title>
                            Deliver <span>real-time</span> and{' '}
                            <span>batch</span> data from DBs, SaaS, APIs, and
                            more
                        </Title>
                        <Button target="_blank" href={dashboardRegisterUrl}>
                            Build Free Pipeline
                        </Button>
                    </Content>
                    <ContainerImage>
                        <StaticImage
                            alt="Connection-1"
                            src="../../../images/lp-connector/real-time/icons.png"
                            width={520}
                            height={240}
                            quality={100}
                        />
                    </ContainerImage>
                </Container>
            </ContainerWrapper>
        </Wrapper>
    );
};

export default RealTime;
