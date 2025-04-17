import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import ContactUsCta from '../../HeroSectionActions/ContactUsCta';
import { container } from './styles.module.less';

const Hero = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container isDarkTheme className={container}>
                <HeroSectionDetails
                    title="The Estuary Partner Program"
                    description="Become an Estuary Partner to accelerate business results through real-time data integrations."
                    ctaButtons={
                        <ContactUsCta
                            pageId="parterns-page"
                            href="/partners/#contact-us-form-section"
                        />
                    }
                />
                <StaticImage
                    src="../../../images/partners-page/handshake.png"
                    alt="Estuary Partner Program"
                    quality={100}
                    placeholder="blurred"
                    loading="eager"
                />
            </Container>
        </section>
    );
};

export default Hero;
