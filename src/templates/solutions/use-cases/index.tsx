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

interface UseCaseSolutionsProps {
    pageContext: {
        useCaseSolution: TemplatePageProps;
    };
}

const UseCaseSolutions = ({ pageContext }: UseCaseSolutionsProps) => {
    return (
        <Layout>
            <Hero
                title={pageContext.useCaseSolution.sections.hero.title}
                heroImage={
                    <StaticImage
                        src="../../../images/use-case-solutions-template/hero-image.png"
                        alt="Seamless data flow between systems for real-time integration"
                        quality={100}
                        placeholder="blurred"
                        loading="eager"
                    />
                }
            />
            <Testimonial
                data={pageContext.useCaseSolution.sections.testimonial}
            />
            <Highlights
                data={pageContext.useCaseSolution.sections.highlights}
                image={
                    <StaticImage
                        src="../../../images/use-case-solutions-template/estuary-solutions-highlights.png"
                        alt="Highly available and reliable cloud data pipeline architecture"
                        quality={100}
                        placeholder="blurred"
                    />
                }
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

export const Head = ({ pageContext }: UseCaseSolutionsProps) => {
    return (
        <Seo
            title={pageContext.useCaseSolution.metadata.title}
            description={pageContext.useCaseSolution.metadata.description}
        />
    );
};

export default UseCaseSolutions;
