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
                    title="ESTUARY UPDATES"
                    description="Stay up to date with the latest news, feature releases, and improvements for Estuary and Flow."
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
