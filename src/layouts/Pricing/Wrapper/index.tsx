import React from 'react';
import Layout from '../../../components/layout';

const PricingWrapper = ({ children }) => {
    return (
        <Layout headerTheme="light">
            <div className="pricing-page">
                <div className="pricing-page-container">{children}</div>
            </div>
        </Layout>
    );
};

export default PricingWrapper;
