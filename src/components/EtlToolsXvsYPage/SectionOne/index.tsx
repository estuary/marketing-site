import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import VendorsLink from '../../VendorsLink';
import { Vendor } from '../../../../shared';
import NewTabLink from '../../NewTabLink';
import ChevronRightIcon from '../../../svgs/chevron-right.svg';
import { container, leftColumn, rightColumn } from './styles.module.less';

interface SectionThreeProps {
    vendors: Vendor[];
    xVendor: Vendor;
    yVendor: Vendor;
}

const SectionOne = ({ vendors, xVendor, yVendor }: SectionThreeProps) => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <div className={container}>
                <div className={leftColumn}>
                    <h1>
                        <span>{xVendor.name}</span> VS{' '}
                        <span>{yVendor.name}</span>
                    </h1>
                    <p>
                        Read this detailed 2024 comparison of {xVendor.name} vs{' '}
                        {yVendor.name}. Understand their key differences, core
                        features, and pricing to choose the right platform for
                        your data integration needs.
                    </p>
                    <VendorsLink
                        vendors={vendors}
                        xVendor={xVendor}
                        yVendor={yVendor}
                        isDarkTheme
                    />
                    <NewTabLink href="/etl-tools">
                        View all comparisons
                        <ChevronRightIcon color="#5072EB" />
                    </NewTabLink>
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
