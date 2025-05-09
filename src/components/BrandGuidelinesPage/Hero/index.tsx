import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import LinkFilled from '../../LinksAndButtons/LinkFilled';
import { container } from './styles.module.less';

const pdfTitle = 'Estuary-visual-identity-guidelines.pdf';

const Hero = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container isDarkTheme className={container}>
                <HeroSectionDetails
                    title="Estuary visual identity guidelines"
                    ctaButtons={
                        <LinkFilled
                            id="download-guidelines/hero-section/brand-guidelines-page"
                            href={`/${pdfTitle}`}
                            download={pdfTitle}
                        >
                            Download Guidelines
                        </LinkFilled>
                    }
                />
                <StaticImage
                    src="../../../images/brand-guidelines-page/brand-guidelines-hero-image.png"
                    alt="Estuary one-color logo on dark background"
                    quality={100}
                    placeholder="blurred"
                    loading="eager"
                />
            </Container>
        </section>
    );
};

export default Hero;
