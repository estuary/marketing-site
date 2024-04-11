import React, { useCallback, useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';

import { Button, Container, Link } from './styles';

const STORAGE_NAME = '@estuary/closeTour';

// If there is an upcoming webinar: `webinar_{date}`
// If there is no webinar: `demo`
const LATEST_VERSION = 'demo';

// defaults
// href: '/why',
// message: 'Take a Product Tour',
const SETTINGS = {
  href: '/why',
  message: 'Take a Product Tour',
};

const TakeATour = () => {
  const [closeTour, setCloseTour] = useState(true);

  const onClick = useCallback(() => {
    localStorage.setItem(`${STORAGE_NAME}_${LATEST_VERSION}`, '1');
    setCloseTour(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') setCloseTour(!!localStorage.getItem(STORAGE_NAME));
  }, []);

  if (closeTour) return null;

  return (
    <Container>
      <Link target="_blank" href={SETTINGS.href}>
        {SETTINGS.message}
      </Link>
      <Button onClick={onClick}>
        <CloseIcon color="inherit" fontSize="small" />
      </Button>
    </Container>
  );
};

export default TakeATour;
