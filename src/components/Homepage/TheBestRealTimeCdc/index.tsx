import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import RealTimeCdc from '../../../svgs/real-time-cdc.svg';
import Container from '../../Container';
import Advantage from './Advantage';
import {
    AdvantagesList,
    Wrapper,
    Description,
    IconWrapper,
    LeftColumn,
    Link,
    RightColumn,
    Title,
} from './styles';

const TheBestRealTimeCdc = () => {
    return (
        <Wrapper>
            <Container>
                <LeftColumn>
                    <IconWrapper>
                        <RealTimeCdc />
                    </IconWrapper>
                    <Title>
                        <span>Use the best </span>
                        real-time CDC
                    </Title>
                    <Description>
                        Estuary Flow is the most real-time, most reliable change
                        data capture (CDC) available today. It is the only CDC
                        with the:
                    </Description>
                    <AdvantagesList>
                        <Advantage title="Fastest captures, with sub-100ms end-to-end latency" />
                        <Advantage title="Most reliable delivery via stream-store-replay" />
                        <Advantage title="Most flexible materializations that run at your speed of choice" />
                        <Advantage title="Most automated pipelines with schema evolution" />
                        <Advantage title="Most versatile writes that maintain a current view or all change history" />
                        <Advantage title="Most scalable pipelines, with true elastic scaling" />
                    </AdvantagesList>
                    <Link href="/integrations">View Connectors</Link>
                </LeftColumn>
                <RightColumn>
                    <StaticImage
                        src="../../../images/real-time-graphic.png"
                        alt="Real-time ETL with Estuary Flow: Seamlessly move data from source to destination for immediate analysis and actionable insights."
                        placeholder="none"
                        quality={100}
                    />
                </RightColumn>
            </Container>
        </Wrapper>
    );
};

export default TheBestRealTimeCdc;
