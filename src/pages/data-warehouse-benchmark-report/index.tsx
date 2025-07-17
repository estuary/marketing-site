import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import Hero from '../../components/BenchmarkPage/Hero';
import KeyHighlights from '../../components/BenchmarkPage/KeyHighlights';
import HowEstuaryMakesADifferenceSection from '../../components/HowEstuaryMakesADifferenceSection';

const Benchmark = () => {
    return (
        <Layout>
            <Hero />
            <KeyHighlights />
            <HowEstuaryMakesADifferenceSection />
        </Layout>
    );
};

export const Head = () => {
    const { metaImg } = useStaticQuery(graphql`
        query GetBenchmarkPageMetadata {
            metaImg: file(
                relativePath: { eq: "benchmark-page/hero-image.png" }
            ) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 1200, height: 630)
                }
            }
        }
    `);

    return (
        <Seo
            title="Top 5 Data Warehouses of 2025: Performance Benchmark Report"
            description="Compare the top 5 data warehouses of 2025 on cost, speed, scalability, and reliability. Unbiased benchmark report to guide your data platform decisions."
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default Benchmark;
