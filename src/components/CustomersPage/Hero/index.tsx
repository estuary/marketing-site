import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import ContactUsCta from '../../HeroSectionActions/ContactUsCta';
import { container } from './styles.module.less';

const Hero = () => {
  return (
    <section className={defaultWrapperDarkBlue}>
      <Container className={container}>
        <HeroSectionDetails
          title={
            <>
              ESTUARY FLOW <span>POWERS ORGANIZATIONS WORLDWIDE</span>
            </>
          }
          description='See how our customers build with Estuary Flow to solve their challanges.'
          ctaButtons={<ContactUsCta href="/partners/#contact-us-form-section" linkVariant='filled' />}
        />
        <StaticImage
          src="../../../images/customers-page/hero-image.png"
          alt="" // TODO: Ask an alternative text to Sourabh
          quality={100}
          placeholder="blurred"
          loading="eager"
        />
      </Container>
    </section>
  );
};

export default Hero;
