import React, { useCallback, useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';

import { Button, Container, Link } from './styles';

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

  if (closeTour) return null;

  return (
    <Container>
      <Link target="_blank" href="https://try.estuary.dev/how-to-build-an-ai-pipeline/">
        "How to Build Pipelines for Gen AI" - Join our April 10th webinar
      </Link>
      <Button onClick={onClick}>
        <CloseIcon color="inherit" fontSize="small" />
      </Button>
    </Container>
  );
};

export default TakeATour;
