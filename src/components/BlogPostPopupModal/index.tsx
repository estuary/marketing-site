import { IconButton, Dialog } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { dashboardRegisterUrl } from '../../../shared';
import FlowDiagram from '../CompanyUpdatesPage/Hero/FlowDiagram';
import OutboundLinkFilled from '../LinksAndButtons/OutboundLinkFilled';
import OutboundLinkOutlined from '../LinksAndButtons/OutboundLinkOutlined';
import Checkmark from '../../svgs/checkmark.svg';
import {
    leftColumn,
    rightColumn,
    closeButtonWrapper,
    diagramCards,
} from './styles.module.less';

const DEFAULT = {
    id: '1',
    title: 'Instantly Move Your Data - No Code Needed',
    description:
        'Move Data from Any Source to Any Destination in Minutes - No Coding Required.',
    keyPoints: [
        'Real-time or batch data integration',
        'Enterprise-ready support for all private networking environments',
        'Load data into multiple destinations simultaneously',
        'Single dataflow up to 7GB+/sec',
    ],
    primaryLink: {
        id: 'start-for-free-now-button/pop-up/blog-post-page',
        label: 'Start For Free Now',
        href: dashboardRegisterUrl,
    },
    secondaryLink: {
        id: 'contact-us-button/pop-up/blog-post-page',
        label: 'Contact Us',
        href: '/contact-us/',
    },
    image: <FlowDiagram diagramCardsClassName={diagramCards} />,
    footerText: 'No credit card required',
    version: `/blogPostPopup_2025/03/12`,
};

const SETTINGS = {
    ...DEFAULT,
    // When there is another popup, uncomment below and provide the necessary details
    // id: 'Next integer',
    // title: 'This is a fake future Webinar',
    // description: 'This is a fake future Webinar',
    // keyPoints: ['Fake text 1', 'Fake text 2']
    // primaryLink: {
    //  id: 'fake-button/pop-up/blog-post-page',
    //  label: 'Fake label',
    //  href: 'fake/path/name',
    // },
    // secondaryLink: {
    //  id: 'fake-button/pop-up/blog-post-page',
    //  label: 'Fake label',
    //  href: 'fake/path/name',
    // },
    // image: <StaticImage
    //  src="../../../images/fake-image.png"
    //  alt="Fake alt text"
    //  placeholder="none"
    //  loading="eager"
    // >,
    // footerText: 'Fake text',
    // version: `/blogPostPopup_YYYY/MM/DD`,
};

const STORAGE_KEY = `@estuary/closeBlogPostPopup${SETTINGS.version}`;

const dialogStyle = {
    '& .MuiPaper-root': {
        'boxShadow': 'none',
        'borderRadius': '16px',
        'maxWidth': '1280px',
        'width': '70%',
        'display': 'grid',
        'gridTemplateColumns': '1fr 1fr',
        'padding': 0,
        'color': 'var(--white)',
        'marginTop': '120px',
        'maxHeight': 'calc(100% - 160px)',
        'minHeight': '100px',
        '@media (max-width: 1530px)': {
            maxWidth: '1380px',
            width: '100%',
        },
        '@media (max-width: 1024px)': {
            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr auto',
        },
    },
};

const checkmarkIcon = 'var(--white)';

const BlogPostPopupModalTutorial = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const hasOpened = useRef(false);

    const handleExitIntent = useCallback((e: MouseEvent) => {
        const isPopupRejected = localStorage.getItem(STORAGE_KEY);

        if (!isPopupRejected && !hasOpened.current && e.clientY <= 0) {
            setOpenDialog(true);
            hasOpened.current = true;
        }
    }, []);

    useEffect(() => {
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
        <Dialog open={openDialog} fullWidth sx={dialogStyle}>
            <div className={leftColumn}>
                <h2>{SETTINGS.title}</h2>
                <p>{SETTINGS.description}</p>
                <ul>
                    {SETTINGS.keyPoints.map((keyPoint, index) => (
                        <li key={`pop-up-key-point_${index}`}>
                            <div>
                                <Checkmark width={12} color={checkmarkIcon} />
                            </div>
                            <p>{keyPoint}</p>
                        </li>
                    ))}
                </ul>
                <div>
                    <OutboundLinkFilled
                        id={SETTINGS.primaryLink.id}
                        href={SETTINGS.primaryLink.href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {SETTINGS.primaryLink.label}
                        <FlashOnIcon htmlColor="#FFC107" />
                    </OutboundLinkFilled>
                    <OutboundLinkOutlined
                        id={SETTINGS.secondaryLink.id}
                        href={SETTINGS.secondaryLink.href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {SETTINGS.secondaryLink.label}
                    </OutboundLinkOutlined>
                </div>
                <span>
                    <Checkmark width={12} color={checkmarkIcon} />
                    {SETTINGS.footerText}
                </span>
            </div>
            <div className={rightColumn}>
                <div className={closeButtonWrapper}>
                    <IconButton onClick={handlePopupClose}>
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </div>
                {SETTINGS.image}
            </div>
        </Dialog>
    );
};

export default BlogPostPopupModalTutorial;
