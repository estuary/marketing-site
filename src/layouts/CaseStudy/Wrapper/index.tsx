import React from 'react';

import Layout from '../../../components/layout';

const CaseStudyWrapper = ({ children }) => {
    return (
        <Layout headerTheme="light">
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
