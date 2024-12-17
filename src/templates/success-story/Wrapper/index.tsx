import React from 'react';
import Layout from '../../../components/Layout';
import Breadcrumbs from '../../../components/Breadcrumbs';

const SuccessStoryWrapper = ({ children, successStoryTitle }) => {
    return (
        <Layout>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        title: 'Home',
                        href: '/',
                    },
                    {
                        title: 'Success Stories',
                        href: '/success-stories',
                    },
                    {
                        title: successStoryTitle,
                    },
                ]}
            />
            <article itemScope itemType="http://schema.org/Article">
                {children}
            </article>
        </Layout>
    );
};

export default SuccessStoryWrapper;
