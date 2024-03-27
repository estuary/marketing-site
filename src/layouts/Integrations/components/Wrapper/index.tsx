import React from 'react';

import Layout from '../../../../components/layout';

const BigQueryWrapper = ({ children }) => {
  return (
    <Layout headerTheme="light">
      <article itemScope itemType="http://schema.org/Article">
        {children}
      </article>
    </Layout>
  );
};

export default BigQueryWrapper;
