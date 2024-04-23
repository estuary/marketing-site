import React from 'react';

import Wrapper from '../layouts/Product/components/Wrapper';
import Header from '../layouts/Product/components/Head';

import Hero from '../layouts/Product/sections/Hero';
import DataIntoStream from '../layouts/Product/sections/DataIntoStream';
import TakeATour from '../layouts/Product/sections/TakeATour';
import OurConnectors from '../layouts/Product/sections/OurConnectors';
import TakeControlBack from '../layouts/Product/sections/TakeControlBack';
import TheAutomation from '../layouts/Product/sections/TheAutomation';
import Pipelines from '../layouts/Product/sections/Pipelines';
import UnifiedDataStack from '../layouts/Product/sections/UnifiedDataStack';

const Product = () => {
  return (
    <Wrapper>
      <Hero />
      <DataIntoStream />
      <TakeATour />
      <OurConnectors />
      <TakeControlBack />
      <TheAutomation />
      <Pipelines />
      <UnifiedDataStack />
    </Wrapper>
  );
};

export const Head = Header;

export default Product;
