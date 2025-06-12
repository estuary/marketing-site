import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import PricingCalculatorSection from '../components/PricingPage/PricingCalculatorSection';
import Hero from '../components/PricingPage/Hero';
import ChooseYourPlan from '../components/PricingPage/ChooseYourPlan';
import Faq from '../components/PricingPage/Faq';
import { faqs } from '../components/PricingPage/Faq/faqs';
import { reactNodeToString } from '../shared';

const PricingPage = () => {
    return (
        <Layout hasLightSections>
            <Hero />
            <ChooseYourPlan />
            <PricingCalculatorSection />
            <Faq />
        </Layout>
    );
};

export const Head = () => {
    const { metaImg } = useStaticQuery(graphql`
        query {
            metaImg: file(
                relativePath: { eq: "pricing/pay-once-for-new-target-data.png" }
            ) {
                childImageSharp {
                    gatsbyImageData(
                        layout: FIXED
                        width: 1200
                        height: 630
                        transformOptions: { fit: CONTAIN }
                        backgroundColor: "#fff"
                    )
                }
            }
        }
    `);

    return (
        <>
            <Seo
                title="Pricing & Plans | Get Started for Free"
                description="Estuary Flow offers simple pay-as-you-go pricing for real-time data integration and ETL. Build free pipelines, estimate costs with the calculator, and scale with flexible plans."
                image={
                    metaImg.childImageSharp.gatsbyImageData.images.fallback.src
                }
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        'mainEntity': faqs.map(({ question, answer }) => ({
                            '@type': 'Question',
                            'name': question,
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': reactNodeToString(answer),
                            },
                        })),
                    }),
                }}
            />
        </>
    );
};

export default PricingPage;
