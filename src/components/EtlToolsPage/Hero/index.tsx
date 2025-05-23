import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
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
        <section>
            <Container className={container}>
                <HeroSectionDetails
                    title="ETL, ELT and CDC tools comparison center"
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
            </Container>
        </section>
    );
};

export default Hero;
