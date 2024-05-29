import React from 'react';

import Layout from '../../../../components/layout';

const ProductWrapper = ({ children }) => {
    return (
        <Layout>
            <article
                className="product-page"
                itemScope
                itemType="http://schema.org/Article"
            >
                {children}
            </article>
        </Layout>
    );
};

export default ProductWrapper;
