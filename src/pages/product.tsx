import React from 'react';

import Header from '../layouts/Product/components/Head';
import Wrapper from '../layouts/Product/components/Wrapper';

import DataIntoStream from '../layouts/Product/sections/DataIntoStream';
import Hero from '../layouts/Product/sections/Hero';
import OurConnectors from '../layouts/Product/sections/OurConnectors';
import Pipelines from '../layouts/Product/sections/Pipelines';
import SectionNine from '../layouts/Product/sections/SectionNine';
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
        </Wrapper>
    );
};

export const Head = Header;

export default Product;
