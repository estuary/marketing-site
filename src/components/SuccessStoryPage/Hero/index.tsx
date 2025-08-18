import { GatsbyImage } from 'gatsby-plugin-image';
import { Connector } from '../../../../shared';
import HeroSectionActions from '../../HeroSectionActions';
import HeroSectionDetails from '../../HeroSectionDetails';
import { ContactUsProps } from '../../HeroSectionActions/types';
import { header, logoWrapper } from './styles.module.less';

interface HeroProps {
    title: string;
    description: string;
    image: Connector['logo'];
    linkOutlinedVariant?: ContactUsProps['linkOutlinedVariant'];
}

const Hero = ({ title, description, image }: HeroProps) => {
    return (
        <section>
            <div className={header}>
                <div className={logoWrapper}>
                    {image.childImageSharp?.gatsbyImageData ? (
                        <GatsbyImage
                            alt={`${title} logo`}
                            image={image.childImageSharp.gatsbyImageData}
                            loading="eager"
                        />
                    ) : null}
                </div>
                <HeroSectionDetails
                    title={description}
                    ctaButtons={
                        <HeroSectionActions
                            pageId="success-story-page"
                            linkOutlinedVariant="secondary"
                        />
                    }
                />
            </div>
        </section>
    );
};

export default Hero;
