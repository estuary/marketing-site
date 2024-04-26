import { Button, Container, Link } from './styles';
import React, { useCallback, useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const DEFAULTS = {
  href: '/why',
  message: 'Take a Product Tour',
  version: '',
};

const SETTINGS = {
  ...DEFAULTS,
  // When there is a webinar uncomment below and provide the necessary details
  // href: 'fake/path/name',
  // message: 'This is a fake future Webinar',
  // version: `/webinar_YYYY/MM/DD`,
};

const STORAGE_KEY = `@estuary/closeTour${SETTINGS.version}`;

const TakeATour = () => {
  const [closeTour, setCloseTour] = useState(true);

  const onClick = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, '1');
    setCloseTour(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') setCloseTour(!!localStorage.getItem(STORAGE_KEY));
  }, []);

  if (closeTour) return null;

  return (
    <Container>
      <Link target="_blank" href={SETTINGS.href}>
        {SETTINGS.message}
      </Link>
      <Button onClick={onClick} aria-label={`Close ${SETTINGS.message} Link`}>
        <CloseIcon color="inherit" fontSize="small" />
      </Button>
    </Container>
  );
};

export default TakeATour;
