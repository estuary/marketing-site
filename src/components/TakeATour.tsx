import { useCallback, useEffect, useState } from 'react';

import { OutboundLink } from '../components/OutboundLink';

import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const STORAGE_NAME = '@estuary/closeTour';

const TakeATour = () => {
    const [closeTour, setCloseTour] = useState(true);
    const onClick = useCallback(() => {
        localStorage.setItem(STORAGE_NAME, '1');
        setCloseTour(true);
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') setCloseTour(!!localStorage.getItem(STORAGE_NAME));
    }, []);

    if (closeTour) {
        return null;
    }

    return (
        <div className="take-a-tour">
            <OutboundLink target="_blank" href="https://try.estuary.dev/intro_to_cdc_webinar/">
                CDC Best Practices - Join our February 13th webinar
            </OutboundLink>
            <IconButton onClick={onClick}>
                <CloseIcon color="inherit" fontSize="small" />
            </IconButton>
        </div>
    );
};

export default TakeATour;
