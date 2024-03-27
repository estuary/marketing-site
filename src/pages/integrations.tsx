import React from 'react';

import Header from '../layouts/Integrations/components/Head';
import Wrapper from '../layouts/Integrations/components/Wrapper';

import ChangeData from '../layouts/Integrations/sections/ChangeData';
import Hero from '../layouts/Integrations/sections/Hero';
import Pipelines from '../layouts/Integrations/sections/Pipelines';
import RealTime from '../layouts/Integrations/sections/RealTime';
import TakeATour from '../layouts/Integrations/sections/TakeATour';
import TheAutomation from '../layouts/Integrations/sections/TheAutomation';

const Integrations = () => {
  return (
    <Wrapper>
      <Hero />
      <ChangeData />
      <Pipelines />
      <RealTime />
      <TakeATour />
      <TheAutomation />
    </Wrapper>
  );
};

export const Head = Header;

export default Integrations;
