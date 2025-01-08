import Layout from '../../../components/Layout';
import Seo from '../../../components/seo';
import Hero from '../../../components/Solutions/SectionModels/Hero';
import Testimonial from '../../../components/Solutions/SectionModels/Testimonial';
import Highlights from '../../../components/Solutions/SectionModels/Highlights';
import Benefits from '../../../components/Solutions/SectionModels/Benefits';
import Capabilities from '../../../components/Solutions/SectionModels/Capabilities';
import KeyFeatures from '../../../components/Solutions/SectionModels/KeyFeatures';
import { TemplatePageProps } from '../shared';

interface UseCaseSolutionsProps {
    pageContext: {
        useCaseSolution: TemplatePageProps;
    };
}

const UseCaseSolutions = ({ pageContext }: UseCaseSolutionsProps) => {
    return (
        <Layout>
            <Hero title={pageContext.useCaseSolution.sections.hero.title} />
            <Testimonial
                data={pageContext.useCaseSolution.sections.testimonial}
            />
            <Highlights
                data={pageContext.useCaseSolution.sections.highlights}
            />
            <Benefits data={pageContext.useCaseSolution.sections.benefits} />
            <Capabilities
                data={pageContext.useCaseSolution.sections.capabilities}
            />
            <KeyFeatures
                data={pageContext.useCaseSolution.sections.keyFeatures}
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

export default UseCaseSolutions;
