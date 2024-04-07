import React from 'react';

import BigQueryHead from '../layouts/BigQuery/components/Head';
import Wrapper from '../layouts/BigQuery/components/Wrapper';

import ChangeData from '../layouts/BigQuery/sections/ChangeData';
import Hero from '../layouts/BigQuery/sections/Hero';
import Pipelines from '../layouts/BigQuery/sections/Pipelines';
import RealTime from '../layouts/BigQuery/sections/RealTime';
import TakeATour from '../layouts/BigQuery/sections/TakeATour';
import TheAutomation from '../layouts/BigQuery/sections/TheAutomation';

const BigQuery = () => {
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

export const Head = BigQueryHead;

export default BigQuery;
