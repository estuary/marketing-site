import { GatsbyImage } from 'gatsby-plugin-image';
import { Author } from '../shared';
import SocialLinks from '../../../components/SocialLinks';
import LightSwoopingLinesRightDirectionBackground from '../../../components/BackgroundImages/LightSwoopingLinesRightDirectionBackground';
import {
    container,
    authorPicture,
    authorPictureWrapper,
    authorInfo,
    centralizeContainer,
} from './styles.module.less';

interface SectionOneProps {
    author: Partial<Author>;
}

const SectionOne = ({
    author: { name, picture, role, bio, socials },
}: SectionOneProps) => {
    return (
        <LightSwoopingLinesRightDirectionBackground
            className={bio?.data.bio ? null : centralizeContainer}
        >
            <div className={container}>
                {picture?.localFile?.childImageSharp?.gatsbyImageData ? (
                    <div className={authorPictureWrapper}>
                        <GatsbyImage
                            alt={`Picture of ${name}`}
                            className={authorPicture}
                            image={
                                picture.localFile.childImageSharp
                                    .gatsbyImageData
                            }
                            loading="eager"
                        />
                    </div>
                ) : null}
                <div className={authorInfo}>
                    <h1>{name}</h1>
                    {role ? <span>{role}</span> : null}
                    {bio?.data.bio ? (
                        <div
                            dangerouslySetInnerHTML={{ __html: bio.data.bio }}
                        />
                    ) : null}
                    <SocialLinks socialLinks={socials} hasHighlightedIcons />
                </div>
            </div>
        </LightSwoopingLinesRightDirectionBackground>
    );
};

export default SectionOne;
