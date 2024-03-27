import React from 'react';

import { ActionLink, Button } from './style';

const TakeATourButtons = () => {
  return (
    <>
      <ActionLink target="_blank" to="/why">
        Self-Guided Tour [1 min]
      </ActionLink>
      <Button target="_blank" href="https://try.estuary.dev/webinar-estuary101-ondemand">
        Product Overview [30 min]
      </Button>
    </>
  );
};

export default TakeATourButtons;
