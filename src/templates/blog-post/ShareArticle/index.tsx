import * as React from 'react';
import EmailOutlinedIcon from '../../../svgs/share-social-icons/email-outlined.svg';
import FacebookOutlinedIcon from '../../../svgs/share-social-icons/facebook-outlined.svg';
import LinkedinOutlinedIcon from '../../../svgs/share-social-icons/linkedin-outlined.svg';
import TwitterXOutlinedIcon from '../../../svgs/share-social-icons/twitter-x-outlined.svg';
import CopyToClipboardButton from '../../../components/CopyToClipboardButton';
import { socialShareButton } from '../../../components/styles.module.less';
import { OutboundLink } from '../../../components/OutboundLink';
import { Container, FailedCopyInput, SocialButtonsWrapper } from './styles';

type ShareArticleProps = {
    article: {
        title: string;
        slug: string;
    };
};

const ShareArticle = ({ article: { title, slug } }: ShareArticleProps) => {
    const [isCopied, setIsCopied] = React.useState(false);
    const [isCopyFailed, setIsCopyFailed] = React.useState(false);

    const shareMessage = `Check out the article "${title}"`;

    const articleUrl = `https://estuary.dev/${slug}`;

    const getSocialLinkAriaLabel = (platform: string) =>
        `Click to share article on ${platform}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(articleUrl).then(
            () => {
                setIsCopied(true);
                setIsCopyFailed(false);
                setTimeout(() => setIsCopied(false), 2000);
            },
            () => {
                setIsCopied(false);
                setIsCopyFailed(false);
            }
        );
    };

    return (
        <Container>
            <span>Share this article</span>
            <SocialButtonsWrapper>
                <CopyToClipboardButton
                    isCopied={isCopied}
                    onCopy={copyToClipboard}
                />
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
                {isCopyFailed ? (
                    <FailedCopyInput value={articleUrl} variant="filled" />
                ) : null}
            </SocialButtonsWrapper>
        </Container>
    );
};

export default ShareArticle;
