import Layout from '../../../components/Layout';
import Seo from '../../../components/seo';
import Hero from '../../../components/Solutions/SectionModels/Hero';
import Testimonial from '../../../components/Solutions/SectionModels/Testimonial';
import Highlights from '../../../components/Solutions/SectionModels/Highlights';
import Benefits from '../../../components/Solutions/SectionModels/Benefits';
import Capabilities from '../../../components/Solutions/SectionModels/Capabilities';
import KeyFeatures from '../../../components/Solutions/SectionModels/KeyFeatures';
import { TemplatePageProps } from '../shared';

interface TechnologySolutionsProps {
    pageContext: {
        technologySolution: TemplatePageProps;
    };
}

const TechnologySolutions = ({ pageContext }: TechnologySolutionsProps) => {
    return (
        <Layout>
            <Hero title={pageContext.technologySolution.sections.hero.title} />
            <Testimonial
                data={pageContext.technologySolution.sections.testimonial}
            />
            <Highlights
                data={pageContext.technologySolution.sections.highlights}
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

export const Head = () => {
    // TODO: Ask SEO page title and meta description to Sourabh.
    return (
        <Seo
            title="Data Movement - Estuary"
            description="View all the use case solutions."
        />
    );
};

export default TechnologySolutions;
