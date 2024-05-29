import React from 'react';

import Cards from './components/Cards';

import { Container, ContainerContent, Title, Description } from './style';

// TODO (connector content)
// Requested to be removed and tweaked by Rob. He has several issues with it
//  so removing. I also think ending the page with an action (Take a tour) makes a lot of sense
const TheAutomation = () => {
    return (
        <Container>
            <ContainerContent>
                <Title>
                    THE <span>AUTOMATION</span> YOU WANT,{' '}
                    <span className="break-line" /> WITH THE{' '}
                    <span>CONTROL</span> YOU NEED.
                </Title>
                <Description>Platform Features</Description>
            </ContainerContent>
            <Cards />
        </Container>
    );
};

export default TheAutomation;
