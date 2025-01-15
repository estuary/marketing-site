import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../../../components/Layout';
import Seo from '../../../components/seo';
import Hero from '../../../components/Solutions/Sections/Hero';
import Testimonial from '../../../components/Solutions/Sections/Testimonial';
import Highlights from '../../../components/Solutions/Sections/Highlights';
import Benefits from '../../../components/Solutions/Sections/Benefits';
import Capabilities from '../../../components/Solutions/Sections/Capabilities';
import KeyFeatures from '../../../components/Solutions/Sections/KeyFeatures';
import { TemplatePageProps } from '../shared';

interface IndustrySolutionsProps {
    pageContext: {
        industrySolution: TemplatePageProps;
    };
}

const IndustrySolutions = ({ pageContext }: IndustrySolutionsProps) => {
    return (
        <Layout>
            <Hero
                title={pageContext.industrySolution.sections.hero.title}
                heroImage={
                    <StaticImage
                        src="../../../images/industry-solutions-template/hero-image.png"
                        alt="Unified data flow for data lake and warehouse solutions"
                        quality={100}
                        placeholder="blurred"
                        loading="eager"
                    />
                }
            />
            <Testimonial
                data={pageContext.industrySolution.sections.testimonial}
            />
            <Highlights
                data={pageContext.industrySolution.sections.highlights}
                image={
                    <StaticImage
                        src="../../../images/industry-solutions-template/graphic.png"
                        alt="Visualizing real-time data lake capabilities with Apache Iceberg integration"
                        quality={100}
                        placeholder="blurred"
                    />
                }
            />
            <Benefits data={pageContext.industrySolution.sections.benefits} />
            <Capabilities
                data={pageContext.industrySolution.sections.capabilities}
            />
            <KeyFeatures
                data={pageContext.industrySolution.sections.keyFeatures}
            />
        </Layout>
    );
};

export const Head = ({ pageContext }: IndustrySolutionsProps) => {
    return (
        <Seo
            title={pageContext.industrySolution.metadata.title}
            description={pageContext.industrySolution.metadata.description}
        />
    );
};

export default IndustrySolutions;
