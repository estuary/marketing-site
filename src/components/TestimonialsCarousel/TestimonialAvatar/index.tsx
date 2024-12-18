import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import clsx from 'clsx';
import {
    avatarWrapper,
    avatarSvg,
    avatarImg,
    isSeattleDataGuyLogo,
} from './styles.module.less';

const imgSize = 110;

const TestimonialAvatar = ({ logo, name }) => {
    const isImageSvg = logo.localFile.extension === 'svg';

    return (
        <div className={avatarWrapper}>
            {isImageSvg ? (
                <img
                    src={logo.localFile.publicURL}
                    alt={`${name} avatar`}
                    width={imgSize}
                    height={imgSize}
                    className={avatarSvg}
                    loading="lazy"
                />
            ) : (
                <GatsbyImage
                    image={logo.localFile.childImageSharp?.gatsbyImageData}
                    alt={`${name} avatar`}
                    className={clsx(
                        avatarImg,
                        name === 'Seattle Data Guy' && isSeattleDataGuyLogo
                    )}
                />
            )}
        </div>
    );
};

export default TestimonialAvatar;
