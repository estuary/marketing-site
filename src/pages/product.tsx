import { graphql, useStaticQuery } from 'gatsby';
import Seo from '../components/seo';
import Layout from '../components/Layout';
import Hero from '../components/ProductPage/Hero';
import HowItWorks from '../components/ProductPage/HowItWorks';
import KeyFeatures from '../components/ProductPage/KeyFeatures';
import ConfigureOrCode from '../components/ProductPage/ConfigureOrCode';
import ModernDataops from '../components/ProductPage/ModernDataops';
import CreateADataPipelineInMinutes from '../components/ProductPage/CreateADataPipelineInMinutes';
import TheSameData from '../components/ProductPage/TheSameData';
import IncreaseProductivity from '../components/ProductPage/IncreaseProductivity';
import DeliverRealTimeData from '../components/ProductPage/DeliverRealTimeData';
import Streaming from '../components/ProductPage/Streaming';
import HowEstuaryFlowCompares from '../components/ProductPage/HowEstuaryFlowCompares';
import DontMissAThing from '../components/ProductPage/DontMissAThing';
import SecurityCertificatesSection from '../components/ProductPage/SecurityCertificatesSection';
import ReadyToStart from '../components/ProductPage/ReadyToStart';

const Product = () => {
    return (
        <Layout>
            <article
                className="product-page"
                itemScope
                itemType="http://schema.org/Article"
            >
                <Hero />
                <HowItWorks />
                <KeyFeatures />
                <CreateADataPipelineInMinutes />
                <TheSameData />
                <ConfigureOrCode />
                <ModernDataops />
                <IncreaseProductivity />
                <DeliverRealTimeData />
                <SecurityCertificatesSection />
                <Streaming />
                <HowEstuaryFlowCompares />
                <DontMissAThing />
                <ReadyToStart />
            </article>
        </Layout>
    );
};

export const Head = () => {
    const { metaImg } = useStaticQuery(graphql`
        query {
            metaImg: file(relativePath: { eq: "real-time-graphic.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 1072)
                }
            }
        }
    `);

    return (
        <Seo
            title="Estuary Flow | Real-time Data Pipeline & Integration Platform"
            description="Estuary Flow is a real-time ETL and data pipeline platform for quick data integration. Build pipelines in minutes and handle both real-time and batch operations efficiently."
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default Product;
