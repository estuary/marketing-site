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

interface TechnologySolutionsProps {
    pageContext: {
        technologySolution: TemplatePageProps;
    };
}

const TechnologySolutions = ({ pageContext }: TechnologySolutionsProps) => {
    return (
        <Layout>
            <Hero
                title={pageContext.technologySolution.sections.hero.title}
                heroImage={
                    <StaticImage
                        src="../../../images/technology-solutions-template/hero-image.png"
                        alt="Estuary Flow's Iceberg Materialization Connector enabling streaming and batch data loads into Iceberg"
                        quality={100}
                        placeholder="blurred"
                        loading="eager"
                    />
                }
            />
            <Testimonial
                data={pageContext.technologySolution.sections.testimonial}
            />
            <Highlights
                data={pageContext.technologySolution.sections.highlights}
                image={
                    <StaticImage
                        src="../../../images/industry-solutions-template/apache-iceberg-integration.png"
                        alt="Visualizing real-time data lake capabilities with Apache Iceberg integration"
                        quality={100}
                        placeholder="blurred"
                    />
                }
            />
            <Benefits data={pageContext.technologySolution.sections.benefits} />
            <Capabilities
                data={pageContext.technologySolution.sections.capabilities}
            />
            <KeyFeatures
                data={pageContext.technologySolution.sections.keyFeatures}
            />
        </Layout>
    );
};

export const Head = ({ pageContext }: TechnologySolutionsProps) => {
    return (
        <Seo
            title={pageContext.technologySolution.metadata.title}
            description={pageContext.technologySolution.metadata.description}
        />
    );
};

export default TechnologySolutions;
