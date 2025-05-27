import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import ContactUsCta from '../../HeroSectionActions/ContactUsCta';
import { wrapper } from './styles.module.less';

const Hero = () => (
    <section className={wrapper}>
        <Container isDarkTheme>
            <HeroSectionDetails
                title={
                    <>
                        <span>Estuary Flow</span> powers organizations worldwide
                    </>
                }
                description="See how our customers build with Estuary Flow to solve their challanges."
                ctaButtons={
                    <ContactUsCta
                        pageId="success-stories-page"
                        linkVariant="filled"
                    />
                }
            />
            <StaticImage
                src="../../../images/customers-page/hero-image.png"
                alt="Estuary - ETL tool"
                quality={100}
                placeholder="blurred"
                loading="eager"
            />
        </Container>
    </section>
);

export default Hero;
