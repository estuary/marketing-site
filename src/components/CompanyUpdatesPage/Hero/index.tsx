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
                    title="STAY UP TO DATE WITH THE LATEST UPDATES ABOUT ESTUARY"
                    description="Stay in the loop with the latest news, updates, and feature enhancements for Estuary and Flow. Be the first to discover what's new and how it can benefit you."
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
