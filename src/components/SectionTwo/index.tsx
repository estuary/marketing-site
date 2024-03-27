import * as React from 'react';
import SectionTwoHeader from './SectionTwoHeader';
import SectionTwoHero from './SectionTwoHero';
import SectionTwoTiles from './SectionTwoTiles';

const SectionTwo = () => {
  return (
    <div className="section-two">
      <SectionTwoHeader />
      <SectionTwoHero />
      <SectionTwoTiles />
    </div>
  );
};

export default SectionTwo;
