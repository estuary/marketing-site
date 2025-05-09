import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import LinkFilled from '../../LinksAndButtons/LinkFilled';
import { container } from './styles.module.less';

const Hero = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container isDarkTheme className={container}>
                <HeroSectionDetails
                    title="Estuary visual identity guidelines"
                    ctaButtons={
                        <LinkFilled id="download-guidelines/hero-section/visual-identity-page">
                            Download Guidelines
                        </LinkFilled>
                    }
                />
                <StaticImage
                    src="../../../images/visual-identity-page/visual-identity-hero-image.png"
                    alt="" // TODO: Ask to Sourabh
                    quality={100}
                    placeholder="blurred"
                    loading="eager"
                />
            </Container>
        </section>
    );
};

export default Hero;
