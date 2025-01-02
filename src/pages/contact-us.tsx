import Layout from '../components/Layout';
import Seo from '../components/seo';
import FormSection from '../components/ContactUsPage/FormSection';
import Address from '../components/ContactUsPage/Address';
import GetEmail from '../components/ContactUsPage/GetEmail';

const ContactUsPage = () => {
    return (
        <Layout>
            <FormSection />
            <Address />
            <GetEmail />
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
