import React from 'react';

import Header from '../layouts/Product/components/Head';
import Wrapper from '../layouts/Product/components/Wrapper';

import DataIntoStream from '../layouts/Product/sections/DataIntoStream';
import Hero from '../layouts/Product/sections/Hero';
import OurConnectors from '../layouts/Product/sections/OurConnectors';
import Pipelines from '../layouts/Product/sections/Pipelines';
import SectionEleven from '../layouts/Product/sections/SectionEleven';
import SectionNine from '../layouts/Product/sections/SectionNine';
import SectionTen from '../layouts/Product/sections/SectionTen';
import TakeATour from '../layouts/Product/sections/TakeATour';
import TakeControlBack from '../layouts/Product/sections/TakeControlBack';
import TheAutomation from '../layouts/Product/sections/TheAutomation';
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
            <SectionNine />
            <SectionTen />
            <SectionEleven />
        </Wrapper>
    );
};

export const Head = Header;

export default Product;
