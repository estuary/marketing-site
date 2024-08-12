import React from 'react';
import Layout from '../../../components/Layout';

const PricingWrapper = ({ children }) => {
    return (
        <Layout>
            <div className="pricing-page">
                <div className="pricing-page-container">{children}</div>
            </div>
        </Layout>
    );
};

export default PricingWrapper;
