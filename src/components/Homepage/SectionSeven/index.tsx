import * as React from 'react';
import MainConnectors from '../../MainConnectors';
import { Container, Description, Title, Wrapper } from './styles';

const SectionSeven = () => {
    return (
        <Container>
            <Wrapper>
                <Title>INNOVATE FASTER</Title>
                <Description>
                    Innovate faster with a single data pipeline that decouples
                    sources and destinations so you can share data across
                    analytics, apps, and AI, and add or change systems, all
                    without impacting others.
                </Description>
                <MainConnectors />
            </Wrapper>
        </Container>
    );
};

export default SectionSeven;
