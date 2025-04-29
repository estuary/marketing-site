import { GatsbyImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { ImageType } from '../../../../shared';
import {
    avatarWrapper,
    avatarSvg,
    avatarImg,
    isSeattleDataGuyLogo,
} from './styles.module.less';

const imgSize = 67;

interface LocalFile extends ImageType {
    extension: string;
    publicURL: string;
}

interface TestimonialAvatarProps {
    logo?: {
        localFile: LocalFile;
    };
    name: string;
    className?: string;
}

const TestimonialAvatar = ({
    logo,
    name,
    className,
}: TestimonialAvatarProps) => {
    if (!logo?.localFile) {
        return null;
    }

    return (
        <div className={clsx(avatarWrapper, className)}>
            {logo.localFile.extension === 'svg' ? (
                <img
                    src={logo.localFile.publicURL}
                    alt={`${name} avatar`}
                    width={imgSize}
                    height={imgSize}
                    className={avatarSvg}
                    loading="lazy"
                />
            ) : logo.localFile.childImageSharp?.gatsbyImageData ? (
                <GatsbyImage
                    image={logo.localFile.childImageSharp.gatsbyImageData}
                    alt={`${name} avatar`}
                    className={clsx(
                        avatarImg,
                        name === 'Seattle Data Guy' && isSeattleDataGuyLogo
                    )}
                />
            ) : null}
        </div>
    );
};

export default TestimonialAvatar;
