import { GatsbyImage } from 'gatsby-plugin-image';
import { useMemo } from 'react';
import Container from '../../../Container';
import HeroSectionDetails from '../../../HeroSectionDetails';
import HeroSectionActions from '../../../HeroSectionActions';
import { Button } from '../../../../templates/solutions/shared';
import Video from '../../../Video';
import { ImageData } from '../../../../../shared';
import { container, heroImageWrapper } from './styles.module.less';

interface HeroProps {
    title: string;
    description: string;
    image: ImageData;
    videoUrl?: string;
    primaryButton: Button;
    secondaryButton: Button;
}

const pageId = 'solutions-page';

const Hero = ({
    title,
    description,
    image,
    videoUrl,
    primaryButton,
    secondaryButton,
}: HeroProps) => {
    const heroImage = useMemo(
        () => (
            <GatsbyImage
                image={image.localFile.childImageSharp.gatsbyImageData}
                alt={image.alternativeText ?? ''}
                loading="eager"
            />
        ),
        [image]
    );

    return (
        <section>
            <Container isDarkTheme className={container}>
                <HeroSectionDetails
                    title={title}
                    description={description}
                    ctaButtons={
                        <HeroSectionActions
                            pageId={pageId}
                            registerButtonTitle={primaryButton.title}
                            contactUsButtonTitle={secondaryButton.title}
                        />
                    }
                />
                <div className={heroImageWrapper}>
                    {videoUrl ? (
                        <Video
                            thumbnail={heroImage}
                            url={videoUrl}
                            pageId={pageId}
                        />
                    ) : (
                        heroImage
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Hero;
