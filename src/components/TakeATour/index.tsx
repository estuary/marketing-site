import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import React, { useCallback, useEffect, useState } from 'react';
import { Container, Link } from './styles';

const DEFAULTS = {
    href: '/why',
    message: 'Take a Product Tour',
    version: '',
};

const SETTINGS = {
    ...DEFAULTS,
    // When there is a webinar uncomment below and provide the necessary details
    // href: 'https://content.estuary.dev/how-to-build-and-fix-cdc-pipelines-the-right-way',
    // message: 'How to Build and Fix CDC Pipelines the Right Way Webinar',
    // version: `/webinar_2024/05/13`,
};

const STORAGE_KEY = `@estuary/closeTour${SETTINGS.version}`;

const TakeATour = () => {
    const [closeTour, setCloseTour] = useState(true);

    const onClick = useCallback(() => {
        localStorage.setItem(STORAGE_KEY, '1');
        setCloseTour(true);
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCloseTour(!!localStorage.getItem(STORAGE_KEY));
        }
    }, []);

    if (closeTour) return null;

    return (
        <Container>
            <Link target="_blank" href={SETTINGS.href}>
                {SETTINGS.message}
            </Link>
            <IconButton onClick={onClick} aria-label="Close banner">
                <CloseIcon color="inherit" fontSize="small" />
            </IconButton>
        </Container>
    );
}

export default TakeATour;
