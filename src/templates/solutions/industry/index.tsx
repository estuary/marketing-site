import Layout from '../../../components/Layout';
import Seo from '../../../components/seo';
import Hero from '../../../components/Solutions/SectionModels/Hero';
import Testimonial from '../../../components/Solutions/SectionModels/Testimonial';
import Highlights from '../../../components/Solutions/SectionModels/Highlights';
import Benefits from '../../../components/Solutions/SectionModels/Benefits';
import Capabilities from '../../../components/Solutions/SectionModels/Capabilities';
import KeyFeatures from '../../../components/Solutions/SectionModels/KeyFeatures';
import { TemplatePageProps } from '../shared';

interface IndustrySolutionsProps {
    pageContext: {
        industrySolution: TemplatePageProps;
    };
}

const IndustrySolutions = ({ pageContext }: IndustrySolutionsProps) => {
    return (
        <Layout>
            <Hero title={pageContext.industrySolution.sections.hero.title} />
            <Testimonial
                data={pageContext.industrySolution.sections.testimonial}
            />
            <Highlights
                data={pageContext.industrySolution.sections.highlights}
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

export const Head = () => {
    // TODO: Ask SEO page title and meta description to Sourabh.
    return (
        <Seo
            title="Data Movement - Estuary"
            description="View all the use case solutions."
        />
    );
};

export default IndustrySolutions;
