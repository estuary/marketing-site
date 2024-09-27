import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import VendorsLink from '../../VendorsLink';
import { Vendor } from '../../../../shared';
import { container, leftColumn, rightColumn } from './styles.module.less';

interface SectionThreeProps {
    vendors: Vendor[];
}

const SectionOne = ({ vendors }: SectionThreeProps) => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <div className={container}>
                <div className={leftColumn}>
                    <h1>ETL, ELT and CDC Tools Comparison Center</h1>
                    <VendorsLink vendors={vendors} isDarkTheme />
                </div>
                <div className={rightColumn}>
                    <StaticImage
                        src="../../../images/lp-comparison/vendor-logos.png"
                        alt="Vendor logos around Estuary Flow logo"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionOne;
