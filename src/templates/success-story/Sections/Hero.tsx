import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { heroContent } from '../styles.module.less';
import Container from '../../../components/Container';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';

const Hero = ({ title, description, image }) => {
    return (
        <section className={defaultWrapperDark}>
            <Container>
                <div className={heroContent}>
                    <span>{title}</span>
                    <h1>{description}</h1>
                </div>
                <GatsbyImage
                    alt={`${title} logo`}
                    image={image}
                    loading="eager"
                />
            </Container>
        </section>
    );
};

export default Hero;
