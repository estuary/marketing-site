import React from 'react';

import Layout from '../../../components/Layout';
import Breadcrumbs from '../../../components/Breadcrumbs';

const CaseStudyWrapper = ({ children, caseStudyTitle }) => {
    return (
        <Layout>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        title: 'Home',
                        href: '/',
                    },
                    {
                        title: 'Customers',
                        href: '/customers',
                    },
                    {
                        title: caseStudyTitle,
                    },
                ]}
            />
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
