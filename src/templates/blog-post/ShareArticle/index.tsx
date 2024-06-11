import CheckIcon from '@mui/icons-material/Check';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import CopyIcon from '../../../svgs/share-social-icons/copy.svg';
import EmailOutlinedIcon from '../../../svgs/share-social-icons/email-outlined.svg';
import FacebookOutlinedIcon from '../../../svgs/share-social-icons/facebook-outlined.svg';
import LinkedinOutlinedIcon from '../../../svgs/share-social-icons/linkedin-outlined.svg';
import TwitterXOutlinedIcon from '../../../svgs/share-social-icons/twitter-x-outlined.svg';
import {
    Container,
    CopyButton,
    FailedCopyInput,
    SocialButtonsWrapper,
    SocialLink,
} from './styles';

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
                <Tooltip
                    title="Copied"
                    arrow
                    open={isCopied}
                    slotProps={{
                        popper: {
                            modifiers: [
                                {
                                    name: 'offset',
                                    options: {
                                        offset: [0, -4],
                                    },
                                },
                            ],
                        },
                    }}
                >
                    <CopyButton onClick={copyToClipboard} $isCopied={isCopied}>
                        {isCopied ? (
                            <CheckIcon fontSize="small" htmlColor="#00A99D" />
                        ) : (
                            <CopyIcon />
                        )}
                    </CopyButton>
                </Tooltip>
                <SocialLink
                    target="_blank"
                    aria-label={getSocialLinkAriaLabel('Linkedin')}
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURI(articleUrl)}`}
                >
                    <LinkedinOutlinedIcon />
                </SocialLink>
                <SocialLink
                    target="_blank"
                    aria-label={getSocialLinkAriaLabel('X (Twitter)')}
                    href={`https://twitter.com/intent/tweet?url=${encodeURI(articleUrl)}&text=${encodeURI(`${shareMessage}:`)}`}
                >
                    <TwitterXOutlinedIcon />
                </SocialLink>
                <SocialLink
                    target="_blank"
                    aria-label={getSocialLinkAriaLabel('Facebook')}
                    href={`https://facebook.com/sharer/sharer.php?u=${encodeURI(articleUrl)}`}
                >
                    <FacebookOutlinedIcon />
                </SocialLink>
                <SocialLink
                    target="_blank"
                    aria-label={getSocialLinkAriaLabel('email')}
                    href={`mailto:?subject=${encodeURI('Checkout this amazing article!')}&body=${encodeURI(`${`${shareMessage}:`} ${articleUrl}`)}`}
                >
                    <EmailOutlinedIcon />
                </SocialLink>
                {isCopyFailed ? (
                    <FailedCopyInput value={articleUrl} variant="filled" />
                ) : null}
            </SocialButtonsWrapper>
        </Container>
    );
};

export default ShareArticle;
