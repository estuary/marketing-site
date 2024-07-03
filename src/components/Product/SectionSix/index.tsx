import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { DefaultWrapperDark } from '../../../styles/wrappers';

import Advantages from '../Advantages';
import { sectionSixAdvantages } from '../Advantages/advantages';

const SectionSix = () => {
    return (
        <DefaultWrapperDark>
            <Advantages
                icon={
                    <StaticImage
                        placeholder="none"
                        alt="Coding optional"
                        src="../../../svgs/product-page/section-six/code.svg"
                        layout="constrained"
                        loading="lazy"
                    />
                }
                title={
                    <>
                        <span>CONFIGURE</span> OR CODE
                    </>
                }
                subtitle="Choose the best combination of no-code configuration and coding to move and transform data."
                image={
                    <StaticImage
                        placeholder="none"
                        alt="Coding optional"
                        src="../../../images/product-page/section-six/optional-code.png"
                        layout="constrained"
                        loading="lazy"
                    />
                }
                advantages={sectionSixAdvantages}
            />
        </DefaultWrapperDark>
    );
};

export default SectionSix;
