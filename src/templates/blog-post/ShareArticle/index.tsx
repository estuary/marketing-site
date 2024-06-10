import * as React from 'react';
import CopyIcon from '../../../svgs/share-social-icons/copy.svg';
import EmailOutlinedIcon from '../../../svgs/share-social-icons/email-outlined.svg';
import FacebookOutlinedIcon from '../../../svgs/share-social-icons/facebook-outlined.svg';
import SlackOutlinedIcon from '../../../svgs/share-social-icons/slack-outlined.svg';
import TwitterXOutlinedIcon from '../../../svgs/share-social-icons/twitter-x-outlined.svg';
import {
    Container,
    CopyButton,
    SocialButtonsWrapper,
    SocialLink,
} from './styles';

type ShareArticleProps = {
    articleTitle: string;
};

const ShareArticle = ({ articleTitle }: ShareArticleProps) => {
    const shareMessage = `Check out the article "${articleTitle}"`;

    const articleUrl = window.location.href;

    const copyArticleUrlToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(articleUrl);
        } catch (error) {
            // Todo: treat this possible error
        }
    };

    return (
        <Container>
            <span>Share this article</span>
            <SocialButtonsWrapper>
                <CopyButton>
                    <CopyIcon onClick={copyArticleUrlToClipboard} />
                </CopyButton>
                <SocialLink
                    target="_blank"
                    aria-label="Share article in Linkedin"
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURI(articleUrl)}`}
                >
                    <SlackOutlinedIcon />{' '}
                    {/* TODO: replace this icon with Linkedin one */}
                </SocialLink>
                <SocialLink
                    target="_blank"
                    aria-label="Share article in X (Twitter)"
                    href={`https://twitter.com/intent/tweet?url=${encodeURI(articleUrl)}&text=${encodeURI(`${shareMessage}:`)}`}
                >
                    <TwitterXOutlinedIcon />
                </SocialLink>
                <SocialLink
                    target="_blank"
                    aria-label="Share article in Facebook"
                    href={`https://facebook.com/sharer/sharer.php?u=${encodeURI(articleUrl)}`}
                >
                    <FacebookOutlinedIcon />
                </SocialLink>
                <SocialLink
                    target="_blank"
                    aria-label="Share article in email"
                    href={`mailto:?subject=${encodeURI('Checkout this amazing article!')}&body=${encodeURI(`${`${shareMessage}:`} ${articleUrl}`)}`}
                >
                    <EmailOutlinedIcon />
                </SocialLink>
            </SocialButtonsWrapper>
        </Container>
    );
};

export default ShareArticle;
