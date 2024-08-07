import * as React from 'react';
import { SectionOne, SectionTwo } from '../components/ContactUs';
import Layout from '../components/layout';
import Seo from '../components/seo';

const ContactUsPage = () => {
    return (
        <Layout>
            <SectionOne />
            <SectionTwo />
        </Layout>
    );
};

export const Head = () => (
    <Seo
        // TODO: Ask Sourabh title and description
        title="Estuary | Contact Us"
        description="Estuary Flow is the most reliable real-time data integration platform for ETL, ELT, CDC and streaming pipelines. Build and automate data pipelines. Try it free!"
    />
);

export default ContactUsPage;
