import React from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import VendorsLink from '../../VendorsLink';
import { Vendor } from '../../../../shared';
import { container, leftColumn, rightColumn } from './styles.module.less';

interface SectionOneProps {
    vendors: Vendor[];
}

const Hero = ({ vendors }: SectionOneProps) => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <div className={container}>
                <div className={leftColumn}>
                    <h1>ETL, ELT and CDC Tools Comparison Center</h1>
                    <VendorsLink vendors={vendors} isDarkTheme />
                </div>
                <div className={rightColumn}>
                    <StaticImage
                        src="../../../images/lp-comparison/vendor-comparison-base-image.png"
                        alt="Vendor logos around Estuary Flow logo"
                        loading="eager"
                        placeholder="blurred"
                        quality={100}
                    />
                    {vendors.slice(0, 9).map((vendor) => (
                        <GatsbyImage
                            key={vendor.id}
                            alt={`${vendor.name} logo`}
                            image={
                                vendor.logo.localFile.childImageSharp
                                    .gatsbyImageData
                            }
                            loading="eager"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
