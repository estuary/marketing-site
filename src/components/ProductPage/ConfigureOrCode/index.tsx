import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { DefaultWrapperDark } from '../../../styles/wrappers';

import Advantages from '../../Advantages';
import { sectionSixAdvantages } from '../advantages';

const ConfigureOrCode = () => {
    return (
        <DefaultWrapperDark>
            <Advantages
                icon={
                    <StaticImage
                        placeholder="none"
                        alt="Coding optional"
                        src="../../../svgs/product-page/section-six/code.svg"
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
                    />
                }
                advantages={sectionSixAdvantages}
            />
        </DefaultWrapperDark>
    );
};

export default ConfigureOrCode;
