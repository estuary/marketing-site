import React from 'react';

import { webinarsUrl } from '../../../../../shared';
import { ActionLink, Button } from './style';

const TakeATourButtons = () => {
  return (
    <>
      <ActionLink target="_blank" to="/why">
        Self-Guided Tour [1 min]
      </ActionLink>
      <Button target="_blank" href={webinarsUrl}>
        Product Overview [30 min]
      </Button>
    </>
  );
};

export default TakeATourButtons;
