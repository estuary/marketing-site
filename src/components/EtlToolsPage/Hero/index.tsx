import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import VendorsLink from '../../VendorsLink';
import { Vendor } from '../../../../shared';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import { container, rightColumn } from './styles.module.less';

interface SectionOneProps {
    vendors: Vendor[];
}

const Hero = ({ vendors }: SectionOneProps) => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container className={container}>
                <HeroSectionDetails
                    title="ETL, ELT AND CDC TOOLS COMPARISON CENTER"
                    additionalElements={
                        <VendorsLink vendors={vendors} isDarkTheme />
                    }
                />
                <div className={rightColumn}>
                    <StaticImage
                        src="../../../images/lp-comparison/vendor-comparison-base-image.png"
                        alt="Vendor logos around Estuary Flow logo"
                        loading="eager"
                        placeholder="blurred"
                        quality={100}
                    />
                    {vendors.slice(0, 9).map((vendor) => {
                        const vendorLogoLocalFile = vendor.logo.localFile;

                        return (
                            // TODO: Maybe we need to create a function to not duplicate this condition.
                            vendorLogoLocalFile.extension === 'svg' ? (
                                <img
                                    key={vendor.id}
                                    alt={`${vendor.name} logo`}
                                    src={vendorLogoLocalFile.publicURL}
                                    loading="eager"
                                />
                            ) : vendorLogoLocalFile.childImageSharp ? (
                                <GatsbyImage
                                    key={vendor.id}
                                    alt={`${vendor.name} logo`}
                                    image={
                                        vendorLogoLocalFile.childImageSharp
                                            .gatsbyImageData
                                    }
                                    loading="eager"
                                />
                            ) : null
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default Hero;
