import React from 'react';

import Layout from '../../../components/Layout';

const CaseStudyWrapper = ({ children }) => {
    return (
        <Layout>
            <article
                className="case-study"
                itemScope
                itemType="http://schema.org/Article"
            >
                {children}
            </article>
        </Layout>
    );
};

export default CaseStudyWrapper;
