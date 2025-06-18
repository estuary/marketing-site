import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import Hero from '../../components/BenchmarkPage/Hero';

const Benchmark = () => {
    return (
        <Layout>
            <Hero />
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
            title="" // TODO: Asked to Sourabh
            description="" // TODO: Asked to Sourabh
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default Benchmark;
