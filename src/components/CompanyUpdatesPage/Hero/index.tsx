import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import HeroSectionActions from '../../HeroSectionActions';
import { container, baseImage } from './styles.module.less';

const Hero = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container className={container}>
                <HeroSectionDetails
                    title="STAY CURRENT WITH ESTUARY FLOW"
                    description="Discover the newest advancements in Estuary Flow. From groundbreaking features to performance optimizations, explore how we're continually evolving to streamline real-time and batch data integration for your business. Stay informed and make the most of Flow's powerful capabilities."
                    ctaButtons={<HeroSectionActions />}
                />
                <div className={baseImage}>
                    <span>Fully managed connectors</span>
                    <span>Materialize</span>
                    <span>Store and Transform</span>
                    <span>Streaming CDC</span>
                    <span>Real-time</span>
                    <span>Batch</span>
                    <span>SaaS</span>
                    <span>Analytics</span>
                    <span>Ops</span>
                    <span>AI</span>
                    <StaticImage
                        src="../../../images/company-updates/hero-image.png"
                        alt="Data Pipeline diagram - store, transform, and materialize processes with real-time and batch data integration."
                        quality={100}
                        placeholder="blurred"
                        loading="eager"
                    />
                </div>
            </Container>
        </section>
    );
};

export default Hero;
