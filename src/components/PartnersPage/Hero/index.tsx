import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import { LinkFilled } from '../../../globalStyles';
import { container } from './styles.module.less';

const Hero = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container isDarkTheme className={container}>
                <HeroSectionDetails
                    title="THE ESTUARY PARTNER PROGRAM"
                    description="Become an Estuary Partner to accelerate business results through real-time data integrations."
                    ctaButtons={
                        <LinkFilled href="/contact-us/">Contact Us</LinkFilled>
                    }
                />
                <StaticImage
                    src="../../../images/partners-page/handshake.png"
                    alt="" // Ask alt text to Sourabh.
                    quality={100}
                    placeholder="blurred"
                    loading="eager"
                />
            </Container>
        </section>
    );
};

export default Hero;
