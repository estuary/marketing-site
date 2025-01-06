import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import HeroSectionActions from '../../HeroSectionActions';

interface HeroProps {
    title: string;
}

const Hero = ({ title }: HeroProps) => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container isDarkTheme>
                <HeroSectionDetails
                    title={title}
                    ctaButtons={<HeroSectionActions />}
                />
                <StaticImage
                    src="../../../images/use-case-solutions-template/use-cases-hero-image.png"
                    alt="Estuary Partner Program" // TODO: Ask alt text to Sourabh.
                    quality={100}
                    placeholder="blurred"
                    loading="eager"
                />
            </Container>
        </section>
    );
};

export default Hero;
