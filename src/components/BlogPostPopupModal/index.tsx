import { IconButton } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { webinarsUrl } from '../../../shared';
import EstuaryLogo from '../../svgs/colored-logo.svg';
import {
    CloseButtonWrapper,
    Container,
    LeftColumn,
    NoThanksButton,
    RightColumn,
    Subtitle,
    TitleWrapper,
    WatchNowLink,
    WebinarTitle,
    XIcon,
} from './styles';

const DEFAULT = {
    id: '1',
    title: 'Change Data Capture 101',
    subtitle:
        'Learn how to stand up no-code real-time CDC pipelines in minutes with Estuary',
    link: {
        label: 'Watch now',
        href: webinarsUrl,
    },
    image: (
        <StaticImage
            src="../../images/blog-post-popup-image.png"
            alt="Change data capture webinar"
            placeholder="none"
            loading="eager"
        />
    ),
    version: '',
};

const SETTINGS = {
    ...DEFAULT,
    // When there is another popup, uncomment below and provide the necessary details
    // id: 'Next integer',
    // title: 'This is a fake future Webinar',
    // subtitle: 'This is a fake future Webinar',
    // link: {
    //  label: 'Fake label',
    //  href: 'fake/path/name',
    // },
    // image: <StaticImage
    //  src="../../images/fake-image.png"
    //  alt="Fake alt text"
    //  placeholder="none"
    //  loading="eager"
    // >,
    // version: `/blogPostPopup_YYYY/MM/DD`,
};

const STORAGE_KEY = `@estuary/closeBlogPostPopup${SETTINGS.version}`;

function BlogPostPopupModal() {
    const imageData = useStaticQuery(graphql`
        query {
            imageData: file(
                relativePath: { eq: "blog-post-popup-background-image.png" }
            ) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 1385) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
        }
    `);

    const [openDialog, setOpenDialog] = React.useState(false);

    const hasOpened = React.useRef(false);

    const handleExitIntent = React.useCallback((e: MouseEvent) => {
        const isPopupRejected = localStorage.getItem(STORAGE_KEY);

        if (!isPopupRejected && !hasOpened.current && e.clientY <= 0) {
            setOpenDialog(true);
            hasOpened.current = true;
        }
    }, []);

    React.useEffect(() => {
        window.addEventListener('mouseout', handleExitIntent);

        return () => {
            window.removeEventListener('mouseout', handleExitIntent);
        };
    }, [handleExitIntent]);

    function handlePopupClose() {
        setOpenDialog(false);
        localStorage.setItem(STORAGE_KEY, '1');
    }

    return (
        <Container open={openDialog} fullWidth>
            <CloseButtonWrapper>
                <IconButton onClick={handlePopupClose}>
                    <XIcon fontSize="large" />
                </IconButton>
            </CloseButtonWrapper>
            <LeftColumn
                fluid={imageData.imageData.childImageSharp.fluid}
                fadeIn={false}
                critical={true}
            >
                <TitleWrapper>
                    <span>Webinar:</span>
                    <WebinarTitle>{SETTINGS.title}</WebinarTitle>
                </TitleWrapper>
                {SETTINGS.image}
            </LeftColumn>
            <RightColumn>
                <EstuaryLogo width={38} />
                <Subtitle>{SETTINGS.subtitle}</Subtitle>
                <WatchNowLink href={SETTINGS.link.href} target="_blank">
                    {SETTINGS.link.label}
                </WatchNowLink>
                <NoThanksButton onClick={handlePopupClose}>
                    No, thanks
                </NoThanksButton>
            </RightColumn>
        </Container>
    );
}

export default BlogPostPopupModal;
