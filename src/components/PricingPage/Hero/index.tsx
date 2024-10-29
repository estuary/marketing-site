import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';

const Hero = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container>
                <HeroSectionDetails
                    title="SIMPLY PRICED, PAY AS YOU GO"
                    description={
                        <>
                            <span>
                                Stop trying to guess your monthly bill based on
                                &apos;monthly active rows.&apos; We price
                                predictably, based on
                            </span>{' '}
                            <span>data moved each month</span> <span>and</span>{' '}
                            <span>active connector instances</span>.
                        </>
                    }
                    hasCtaButtons
                />
                <StaticImage
                    src="../../../images/pricing/illustration.png"
                    alt="It was just one insert though."
                    quality={100}
                    placeholder="blurred"
                    loading="eager"
                />
            </Container>
        </section>
    );
};

export default Hero;
