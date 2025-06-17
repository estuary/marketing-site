import { GatsbyImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { ImageType } from '../../../../shared';
import {
    imgWrapper,
    logoWrapper,
    avatarImg,
    img,
    lightLogoWrapper,
    imgExtraPadding,
} from './styles.module.less';

interface LocalFile extends ImageType {
    extension: string;
    publicURL: string;
}

interface TestimonialAvatarProps {
    logo?: {
        localFile: LocalFile;
    };
    name: string;
    isLogo?: boolean;
    isLightTheme?: boolean;
}

const TestimonialAvatar = ({
    logo,
    name,
    isLogo = false,
    isLightTheme = false,
}: TestimonialAvatarProps) => {
    if (!logo?.localFile) {
        return null;
    }

    return (
        <div
            className={clsx(
                imgWrapper,
                isLogo ? logoWrapper : null,
                isLogo && isLightTheme ? lightLogoWrapper : undefined,
                logo.localFile.extension === 'svg' ? imgExtraPadding : undefined
            )}
        >
            {logo.localFile.extension === 'svg' ? (
                <img
                    src={logo.localFile.publicURL}
                    alt={`${name} avatar`}
                    height={80}
                    loading="lazy"
                />
            ) : logo.localFile.childImageSharp?.gatsbyImageData ? (
                <GatsbyImage
                    image={logo.localFile.childImageSharp.gatsbyImageData}
                    alt={`${name} avatar`}
                    className={clsx(img, isLogo ? null : avatarImg)}
                />
            ) : null}
        </div>
    );
};

export default TestimonialAvatar;
