import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { Author } from '../shared';
import SocialLinks from '../../../components/SocialLinks';
import LightSwoopingLinesRightDirectionBackground from '../../../components/BackgroundImages/LightSwoopingLinesRightDirectionBackground';
import {
    container,
    authorPicture,
    authorPictureWrapper,
    authorInfo,
    socialIconsWrapper,
    centralizeContainer,
    centralizeAuthorInfo,
} from './styles.module.less';

interface SectionOneProps {
    author: Partial<Author>;
}

const SectionOne = ({
    author: { name, picture, role, bio, socials },
}: SectionOneProps) => {
    return (
        <LightSwoopingLinesRightDirectionBackground>
            <div
                className={clsx(
                    container,
                    bio?.data.bio ? null : centralizeContainer
                )}
            >
                {picture?.localFile.childImageSharp.gatsbyImageData ? (
                    <div className={authorPictureWrapper}>
                        <GatsbyImage
                            alt={`Picture of ${name}`}
                            className={authorPicture}
                            image={
                                picture?.localFile.childImageSharp
                                    .gatsbyImageData
                            }
                            loading="eager"
                        />
                    </div>
                ) : null}
                <div
                    className={clsx(
                        authorInfo,
                        bio?.data.bio ? null : centralizeAuthorInfo
                    )}
                >
                    <h1>{name}</h1>
                    {role ? <span>{role}</span> : null}
                    {bio?.data.bio ? (
                        <div
                            dangerouslySetInnerHTML={{ __html: bio.data.bio }}
                        />
                    ) : null}
                    <div
                        className={clsx(
                            socialIconsWrapper,
                            bio?.data.bio ? null : centralizeAuthorInfo
                        )}
                    >
                        <SocialLinks
                            socialLinks={socials}
                            hasHighlightedIcons
                        />
                    </div>
                </div>
            </div>
        </LightSwoopingLinesRightDirectionBackground>
    );
};

export default SectionOne;
