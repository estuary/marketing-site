import { IconButton, Dialog } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { webinarsUrl } from '../../../shared';
import EstuaryLogo from '../../svgs/colored-logo.svg';

import {
    leftColumn,
    rightColumn,
    closeButtonWrapper,
} from './styles.module.less';

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
            placeholder="blurred"
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

const dialogStyle = {
    '& .MuiPaper-root': {
        'boxShadow': 'none',
        'borderRadius': '16px',
        'maxWidth': '1280px',
        'width': '70%',
        'display': 'grid',
        'gridTemplateColumns': '0.6fr 0.4fr',
        'padding': 0,
        'color': '#ffffff',
        'marginTop': '124px',
        'maxHeight': 'calc(100% - 160px)',
        'minHeight': '100px',
        '@media (max-width: 1024px)': {
            width: '90%',
        },
        '@media (max-width: 780px)': {
            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr auto',
        },
    },
};

const BlogPostPopupModal = () => {
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
        <Dialog open={openDialog} fullWidth sx={dialogStyle}>
            <div className={closeButtonWrapper}>
                <IconButton onClick={handlePopupClose}>
                    <CloseIcon fontSize="large" />
                </IconButton>
            </div>
            <div className={leftColumn}>
                <span>
                    <span>Webinar:</span>
                    <span>{SETTINGS.title}</span>
                </span>
                {SETTINGS.image}
            </div>
            <div className={rightColumn}>
                <EstuaryLogo width={38} />
                <span>{SETTINGS.subtitle}</span>
                <a href={SETTINGS.link.href} target="_blank" rel="noreferrer">
                    {SETTINGS.link.label}
                </a>
                <button onClick={handlePopupClose}>No, thanks</button>
            </div>
        </Dialog>
    );
};

export default BlogPostPopupModal;
