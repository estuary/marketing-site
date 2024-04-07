import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Card from '../Card';

import { Container, ContainerCards } from './style';

const TheAutomationCards = () => {
  return (
    <Container>
      <ContainerCards>
        <Card
          title="Automated Schema Drift"
          description="Ensure that your destination matches your source, even if you change primary keys."
          $reverseDesktop
        >
          <StaticImage
            alt="icon-1"
            src="../../../../../../images/lp-product/TheAutomation/icon-1.png"
            layout="constrained"
          />
        </Card>
        <Card title="Automated Backfills" description="Automatically backfill data and transition to streaming mode.">
          <StaticImage
            alt="icon-2"
            src="../../../../../../images/lp-product/TheAutomation/icon-2.png"
            layout="constrained"
          />
        </Card>
        <Card
          title="Streaming Storage"
          description="Optionally connect your own cloud storage for cost-effective change history."
          $reverseDesktop
        >
          <StaticImage
            alt="icon-3"
            src="../../../../../../images/lp-product/TheAutomation/icon-3.png"
            layout="constrained"
          />
        </Card>
      </ContainerCards>
      <ContainerCards>
        <Card
          title="Exactly Once"
          description="Idempotent pipelines provide assurance that your numbers are exactly correct."
          $reverse
          $reverseDesktop
        >
          <StaticImage
            alt="icon-4"
            src="../../../../../../images/lp-product/TheAutomation/icon-4.png"
            layout="constrained"
          />
        </Card>
        <Card title="Cleaned Data" description="Captured data is de-duped and stored in your cloud " $reverse>
          <StaticImage
            alt="icon-5"
            src="../../../../../../images/lp-product/TheAutomation/icon-5.png"
            layout="constrained"
          />
        </Card>
        <Card
          title="Share Data"
          description="Seamlessly share data with any other Estuary account enabling cross-provider data access."
          $reverse
          $reverseDesktop
        >
          <StaticImage
            alt="icon-6"
            src="../../../../../../images/lp-product/TheAutomation/icon-6.png"
            layout="constrained"
          />
        </Card>
      </ContainerCards>
    </Container>
  );
};

export default TheAutomationCards;
