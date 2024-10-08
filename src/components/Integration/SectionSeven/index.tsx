import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';
import Advantages from '../../Advantages';

const SectionSeven = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Advantages
                icon={<SingleDataflowIcon color="#5072EB" />}
                title={
                    <>
                        <span>DATAOPS</span> MADE SIMPLE
                    </>
                }
                subtitle="Add advanced capabilities like schema inference and evolution with a few clicks. Or automate your data pipeline and integrate into your existing DataOps using Flow's rich CLI."
                image={
                    <StaticImage
                        quality={100}
                        placeholder="none"
                        alt="Schema evolution options"
                        src="../../../images/schema-evolution-options.png"
                    />
                }
                isImageOnTheLeft
                isDarkTheme
            />
        </section>
    );
};

export default SectionSeven;
