import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';

const Hero = () => {
    return (
        <section>
            <Container isDarkTheme>
                <HeroSectionDetails
                    title={
                        <>
                            Uncompromising data security with{' '}
                            <span>Estuary Flow</span>
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
