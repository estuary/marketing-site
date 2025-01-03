import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';

const Hero = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container isDarkTheme>
                <HeroSectionDetails
                    title={
                        <>
                            UNCOMPROMISING DATA SECURITY WITH{' '}
                            <span>ESTUARY FLOW</span>
                        </>
                    }
                    description="Estuary Flow ensures the security of your data with a robust architecture and advanced security measures, whether in our cloud or your private environment."
                />
                <StaticImage
                    src="../../../images/security-page/security-hero-image.png"
                    alt="Estuary Flow's data security for cloud and private setups"
                    quality={100}
                    placeholder="blurred"
                    loading="eager"
                />
            </Container>
        </section>
    );
};

export default Hero;
