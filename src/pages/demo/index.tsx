import Hero from '../../components/DemoPage/Hero';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import WhatsNext from '../../components/DemoPage/WhatsNext';

const Demo = () => {
    return (
        <Layout hasLightSections hasLightHeroSection>
            <Hero />
            <WhatsNext />
        </Layout>
    );
};

export const Head = () => (
    <Seo
        title="Estuary Flow Demo: Automate Data Streaming in Minutes"
        description="Explore Estuary Flow's demo to see how easily you can automate both real-time and batch data integration, manage pipelines, and stream data to your destination in minutes."
    />
);

export default Demo;
