import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import RealTimeCdc from '../../../svgs/real-time-cdc.svg';
import Advantage from './Advantage';
import {
    AdvantagesList,
    Container,
    Description,
    IconWrapper,
    LeftColumn,
    Link,
    RightColumn,
    Title,
    Wrapper,
} from './styles';

const SectionFour = () => {
    return (
        <Container>
            <Wrapper>
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
                    <Link
                        to="/integrations"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Connectors
                    </Link>
                </LeftColumn>
                <RightColumn>
                    <StaticImage
                        src="../../../images/real-time-graphic.png"
                        alt="Real-time graphic"
                        placeholder="none"
                        loading="lazy"
                        layout="constrained"
                        quality={100}
                    />
                </RightColumn>
            </Wrapper>
        </Container>
    );
};

export default SectionFour;
