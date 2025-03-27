import { GatsbyImage } from 'gatsby-plugin-image';
import { heroContent } from '../styles.module.less';
import Container from '../../../components/Container';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import { Connector } from '../../../../shared';

interface HeroProps {
    title: string;
    description: string;
    image: Connector['logo'];
}

const Hero = ({ title, description, image }: HeroProps) => {
    return (
        <section className={defaultWrapperDark}>
            <Container>
                <div className={heroContent}>
                    <span>{title}</span>
                    <h1>{description}</h1>
                </div>
                {image?.extension === 'svg' ? (
                    <img
                        alt={`${title} logo`}
                        src={image.publicURL}
                        loading="eager"
                    />
                ) : image?.childImageSharp ? (
                    <GatsbyImage
                        alt={`${title} logo`}
                        image={image.childImageSharp.gatsbyImageData}
                        loading="eager"
                    />
                ) : null}
            </Container>
        </section>
    );
};

export default Hero;
