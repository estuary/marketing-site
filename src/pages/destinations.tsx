import React from 'react';
import { Connectors } from '../components/Connectors';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { estuaryHelpsYourTeam } from '../content/seo';

const Sources = () => {
  return (
    <Layout headerTheme={'light'}>
      <Connectors
        connectorType={'materialization'}
        title={'Destinations'}
        description={estuaryHelpsYourTeam}
        bottomTitle={'Sources'}
        bottomDescription={
          'Open-source integrations guarantee that you’re covered, and real-time, no matter whether you’re pulling data from a database, filestore, or SaaS application.'
        }
      />
    </Layout>
  );
};

export const Head = () => {
  return (
    <Seo
      title={'Destinations'}
      description={'Stream your data anywhere with efficient, low latency pipelines to all your destinations.'}
    />
  );
};

export default Sources;
