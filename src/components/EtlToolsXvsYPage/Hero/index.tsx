import React from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import VendorsLink from '../../VendorsLink';
import { Vendor } from '../../../../shared';
import InternalLink from '../../InternalLink';
import ChevronRightIcon from '../../../svgs/chevron-right.svg';
import HeroSectionDetails from '../../HeroSectionDetails';
import Container from '../../Container';
import {
    rightColumn,
    vendorLogo,
    leftVendorLogo,
    rightVendorLogo,
} from './styles.module.less';

interface SectionOneProps {
    vendors: Vendor[];
    xVendor: Vendor;
    yVendor: Vendor;
}

const Hero = ({ vendors, xVendor, yVendor }: SectionOneProps) => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container>
                <HeroSectionDetails
                    title={
                        <>
                            <span>{xVendor.name}</span> <span>VS</span>{' '}
                            <span>{yVendor.name}</span>
                        </>
                    }
                    description={
                        <>
                            Read this detailed 2024 comparison of {xVendor.name}{' '}
                            vs {yVendor.name}. Understand their key differences,
                            core features, and pricing to choose the right
                            platform for your data integration needs.
                        </>
                    }
                    additionalElements={
                        <>
                            <VendorsLink
                                vendors={vendors}
                                xVendor={xVendor}
                                yVendor={yVendor}
                                isDarkTheme
                            />
                            <InternalLink href="/etl-tools/">
                                View all comparisons
                                <ChevronRightIcon color="#5072EB" />
                            </InternalLink>
                        </>
                    }
                />
                <div className={rightColumn}>
                    <div className={clsx(vendorLogo, leftVendorLogo)}>
                        <GatsbyImage
                            alt={`${xVendor.name} logo`}
                            image={
                                xVendor.logo.localFile.childImageSharp
                                    .gatsbyImageData
                            }
                            loading="eager"
                        />
                    </div>
                    <StaticImage
                        src="../../../images/lp-comparison/xVendor-vs-yVendor.png"
                        alt={`Comparison between ${xVendor.name} and ${yVendor.name}`}
                        loading="eager"
                        placeholder="blurred"
                    />
                    <div className={clsx(vendorLogo, rightVendorLogo)}>
                        <GatsbyImage
                            alt={`${yVendor.name} logo`}
                            image={
                                yVendor.logo.localFile.childImageSharp
                                    .gatsbyImageData
                            }
                            loading="eager"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
