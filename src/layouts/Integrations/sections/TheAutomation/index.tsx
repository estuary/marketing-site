import React from 'react';

import Cards from './components/Cards';

import { Container, ContainerContent, Description, Title } from './style';

const TheAutomation = () => {
  return (
    <Container>
      <ContainerContent>
        <Title>
          THE <span>AUTOMATION</span> YOU WANT, <span className="break-line" /> WITH THE <span>CONTROL</span> YOU NEED.
        </Title>
        <Description>Platform Features</Description>
      </ContainerContent>
      <Cards />
    </Container>
  );
};

export default TheAutomation;
