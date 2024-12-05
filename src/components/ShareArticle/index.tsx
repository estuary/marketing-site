import * as React from 'react';
import EmailOutlinedIcon from '../../svgs/share-social-icons/email-outlined.svg';
import FacebookOutlinedIcon from '../../svgs/share-social-icons/facebook-outlined.svg';
import LinkedinOutlinedIcon from '../../svgs/share-social-icons/linkedin-outlined.svg';
import TwitterXOutlinedIcon from '../../svgs/share-social-icons/twitter-x-outlined.svg';
import CopyToClipboardButton from '../CopyToClipboardButton';
import { socialShareButton } from '../styles.module.less';
import useWindowExistence from '../../hooks/useWindowExistence';
import OutboundLink from '../LinksAndButtons/OutboundLink';
import { container, socialButtonsWrapper } from './styles.module.less';

type ShareArticleProps = {
    article: {
        title: string;
        slug: string;
    };
    sectionTitle?: string | null;
};

const ShareArticle = ({
    article: { title, slug },
    sectionTitle = 'Share this article',
}: ShareArticleProps) => {
    const hasWindow = useWindowExistence();

    const shareMessage = `Check out the article "${title}"`;

    const articleUrl = hasWindow ? `${window.location.origin}/${slug}` : '';

    const getSocialLinkAriaLabel = (platform: string) =>
        `Click to share article on ${platform}`;

    return (
        <div className={container}>
            <span>{sectionTitle}</span>
            <div className={socialButtonsWrapper}>
                <CopyToClipboardButton contentToCopy={articleUrl} />
                <OutboundLink
                    target="_blank"
                    aria-label={getSocialLinkAriaLabel('Linkedin')}
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURI(articleUrl)}`}
                    className={socialShareButton}
                >
                    <LinkedinOutlinedIcon />
                </OutboundLink>
                <OutboundLink
                    target="_blank"
                    aria-label={getSocialLinkAriaLabel('X (Twitter)')}
                    href={`https://twitter.com/intent/tweet?url=${encodeURI(articleUrl)}&text=${encodeURI(`${shareMessage}:`)}`}
                    className={socialShareButton}
                >
                    <TwitterXOutlinedIcon />
                </OutboundLink>
                <OutboundLink
                    target="_blank"
                    aria-label={getSocialLinkAriaLabel('Facebook')}
                    href={`https://facebook.com/sharer/sharer.php?u=${encodeURI(articleUrl)}`}
                    className={socialShareButton}
                >
                    <FacebookOutlinedIcon />
                </OutboundLink>
                <OutboundLink
                    target="_blank"
                    aria-label={getSocialLinkAriaLabel('email')}
                    href={`mailto:?subject=${encodeURI('Checkout this amazing article!')}&body=${encodeURI(`${`${shareMessage}:`} ${articleUrl}`)}`}
                    className={socialShareButton}
                >
                    <EmailOutlinedIcon />
                </OutboundLink>
            </div>
        </div>
    );
};

export default ShareArticle;
