import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
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

type LoadingType = 'eager' | 'lazy' | undefined;

const Hero = ({ vendors, xVendor, yVendor }: SectionOneProps) => {
    const commonXvendorImageProps = {
        alt: `${xVendor.name} logo`,
        loading: 'eager' as LoadingType,
    };

    const commonYvendorImageProps = {
        alt: `${yVendor.name} logo`,
        loading: 'eager' as LoadingType,
    };

    return (
        <section>
            <Container isDarkTheme>
                <HeroSectionDetails
                    title={
                        <>
                            {xVendor.name} <span>VS</span> {yVendor.name}
                        </>
                    }
                    description={
                        <>
                            Read this detailed {new Date().getFullYear()}{' '}
                            comparison of {xVendor.name} vs {yVendor.name}.
                            Understand their key differences, core features, and
                            pricing to choose the right platform for your data
                            integration needs.
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
                            <InternalLink
                                id="view-all-comparisons-link/hero-section/comparison-page"
                                href="/etl-tools/"
                            >
                                View all comparisons
                                <ChevronRightIcon color="var(--blue)" />
                            </InternalLink>
                        </>
                    }
                />
                <div className={rightColumn}>
                    <div className={clsx(vendorLogo, leftVendorLogo)}>
                        <GatsbyImage
                            image={
                                xVendor.logo.localFile.childImageSharp
                                    .gatsbyImageData
                            }
                            {...commonXvendorImageProps}
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
                            image={
                                yVendor.logo.localFile.childImageSharp
                                    .gatsbyImageData
                            }
                            {...commonYvendorImageProps}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
