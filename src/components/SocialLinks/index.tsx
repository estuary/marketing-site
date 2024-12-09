import React from 'react';
import GithubIcon from '@mui/icons-material/GitHub';
import YoutubeIcon from '@mui/icons-material/YouTube';
import LinkedinIcon from '../../svgs/share-social-icons/linkedin-outlined.svg';
import TwitterXIcon from '../../svgs/share-social-icons/twitter-x-outlined.svg';
import WebsiteIcon from '../../svgs/share-social-icons/website-outlined.svg';
import OutboundLink from '../LinksAndButtons/OutboundLink';
import { container, highlightedIconStyle } from './styles.module.less';

const iconColor = 'var(--grey)';

interface SocialLinks {
    socialLinks: {
        linked_in: string;
        twitter: string;
        other: string;
    };
    hasHighlightedIcons: boolean;
}

const SocialLinks = ({ socialLinks, hasHighlightedIcons = false }) => {
    return (
        <div className={container}>
            {socialLinks?.linked_in ? (
                <OutboundLink
                    href={socialLinks.linked_in}
                    target="_blank"
                    className={
                        hasHighlightedIcons ? highlightedIconStyle : null
                    }
                >
                    <LinkedinIcon color={iconColor} />
                </OutboundLink>
            ) : null}
            {socialLinks?.twitter ? (
                <OutboundLink
                    href={socialLinks.twitter}
                    target="_blank"
                    className={
                        hasHighlightedIcons ? highlightedIconStyle : null
                    }
                >
                    <TwitterXIcon />
                </OutboundLink>
            ) : null}
            {socialLinks?.other ? (
                <OutboundLink
                    href={socialLinks.other}
                    target="_blank"
                    className={
                        hasHighlightedIcons ? highlightedIconStyle : null
                    }
                >
                    {socialLinks.other.includes('github.com') ? (
                        <GithubIcon htmlColor={iconColor} />
                    ) : socialLinks.other.includes('youtube.com') ? (
                        <YoutubeIcon htmlColor={iconColor} />
                    ) : (
                        <WebsiteIcon color={iconColor} />
                    )}
                </OutboundLink>
            ) : null}
        </div>
    );
};

export default SocialLinks;
