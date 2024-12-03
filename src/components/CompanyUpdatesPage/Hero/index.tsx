import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import HeroSectionActions from '../../HeroSectionActions';

const Hero = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container>
                <HeroSectionDetails
                    title="STAY CURRENT WITH ESTUARY FLOW"
                    description="Discover the newest advancements in Estuary Flow. From groundbreaking features to performance optimizations, explore how we're continually evolving to streamline real-time and batch data integration for your business. Stay informed and make the most of Flow's powerful capabilities."
                    ctaButtons={<HeroSectionActions />}
                />
                <StaticImage
                    src="../../../images/company-updates/hero-image.png"
                    alt="Hero image"
                    quality={100}
                    placeholder="blurred"
                    loading="eager"
                />
            </Container>
        </section>
    );
};

export default Hero;
