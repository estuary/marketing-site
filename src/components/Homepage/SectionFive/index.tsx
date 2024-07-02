import * as React from 'react';
import FlowDemoVideo from '../../FlowDemoVideo';
import { Container, Description, Title, Wrapper } from './styles';

const SectionFive = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    <span>Build </span>
                    in minutes
                </Title>
                <Description>
                    Use the UI to quickly build end-to-end pipelines using
                    no-code connectors. Estuary Flow does the rest.
                </Description>
                <FlowDemoVideo />
            </Wrapper>
        </Container>
    );
};

export default SectionFive;
