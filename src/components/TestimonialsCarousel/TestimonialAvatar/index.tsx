import { GatsbyImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { ImageType } from '../../../../shared';
import {
    avatarWrapper,
    avatarImg,
    wideLogo,
    notRoundedLogo,
} from './styles.module.less';

const imgSize = 80;

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
}

const TestimonialAvatar = ({
    logo,
    name,
    isLogo = false,
}: TestimonialAvatarProps) => {
    if (!logo?.localFile) {
        return null;
    }

    return (
        <div
            className={clsx(
                avatarWrapper,
                isLogo &&
                    [
                        'Resend',
                        'Forward',
                        'Headset',
                        'Recart',
                        'Revunit',
                    ].includes(name)
                    ? wideLogo
                    : null,
                ['Flashpack', 'Pompato'].includes(name) ? notRoundedLogo : null
            )}
        >
            {logo.localFile.extension === 'svg' ? (
                <img
                    src={logo.localFile.publicURL}
                    alt={`${name} avatar`}
                    width={imgSize}
                    height={imgSize}
                    loading="lazy"
                />
            ) : logo.localFile.childImageSharp?.gatsbyImageData ? (
                <GatsbyImage
                    image={logo.localFile.childImageSharp.gatsbyImageData}
                    alt={`${name} avatar`}
                    className={avatarImg}
                />
            ) : null}
        </div>
    );
};

export default TestimonialAvatar;
