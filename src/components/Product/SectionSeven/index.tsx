import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { DefaultWrapperDarkBlue } from '../../../styles/wrappers';
import Advantages from '../Advantages';
import { sectionSevenAdvantages } from '../Advantages/advantages';

const SectionSeven = () => {
    return (
        <DefaultWrapperDarkBlue>
            <Advantages
                isDarkTheme
                isImageOnTheLeft
                icon={
                    <StaticImage
                        placeholder="none"
                        alt="Boost Efficiency with flowctl: Automate DataOps, Integrate Tooling, and Streamline Schema Evolution"
                        src="../../../svgs/product-page/section-seven/use-modern-dataops.svg"
                        layout="constrained"
                    />
                }
                title={
                    <>
                        USE MODERN <span>DATAOPS</span>
                    </>
                }
                subtitle="Rely on built-in data pipeline best practices, integrate tooling, and automate DataOps to improve productivity and reduce downtime."
                image={
                    <StaticImage
                        placeholder="none"
                        alt="Schema evolution options"
                        src="../../../images/product-page/section-seven/schema-evolution-options.png"
                        layout="constrained"
                        quality={100}
                    />
                }
                advantages={sectionSevenAdvantages}
                link={{
                    title: 'See The Docs',
                    href: 'https://docs.estuary.dev/',
                }}
            />
        </DefaultWrapperDarkBlue>
    );
};

export default SectionSeven;
