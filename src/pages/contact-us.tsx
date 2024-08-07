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
        title="Contact Us - Connect with our Team"
        description="Get in touch with Estuary for inquiries on support, sales, and partnerships. Learn how we can streamline your data processes today!"
    />
);

export default ContactUsPage;
