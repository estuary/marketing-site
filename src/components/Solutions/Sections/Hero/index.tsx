import { GatsbyImage } from 'gatsby-plugin-image';
import Container from '../../../Container';
import HeroSectionDetails from '../../../HeroSectionDetails';
import HeroSectionActions from '../../../HeroSectionActions';
import { container, heroImageWrapper } from './styles.module.less';

interface HeroProps {
    title: string;
    description: string;
    image: any; // TODO: Check this type
}

const Hero = ({ title, description, image }: HeroProps) => {
    return (
        <section>
            <Container isDarkTheme className={container}>
                <HeroSectionDetails
                    title={title}
                    description={description}
                    ctaButtons={<HeroSectionActions pageId="solutions-page" />}
                />
                <div className={heroImageWrapper}>
                    <GatsbyImage
                        image={image.localFile.childImageSharp.gatsbyImageData}
                        alt={image.alternativeText}
                        loading="eager"
                    />
                </div>
            </Container>
        </section>
    );
};

export default Hero;
