import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import Hero from '../../components/UseCaseSolutionsTemplate/Hero';
import Testimonial from '../../components/UseCaseSolutionsTemplate/Testimonial';
import Highlights from '../../components/UseCaseSolutionsTemplate/Highlights';
import Benefits from '../../components/UseCaseSolutionsTemplate/Benefits';
import Capabilities from '../../components/UseCaseSolutionsTemplate/Capabilities';
import KeyFeatures from '../../components/UseCaseSolutionsTemplate/KeyFeatures';
import {
    TestimonialSectionContent,
    HighlightsSectionContent,
    BenefitsSectionContent,
    CapabilitiesSectionContent,
    KeyFeaturesSectionContent,
} from './shared';

interface UseCaseSolution {
    slug: string;
    sections: {
        hero: {
            title: string;
        };
        testimonial: TestimonialSectionContent;
        highlights: HighlightsSectionContent;
        benefits: BenefitsSectionContent;
        capabilities: CapabilitiesSectionContent;
        keyFeatures: KeyFeaturesSectionContent;
    };
}

interface UseCaseSolutionsProps {
    pageContext: {
        useCaseSolution: UseCaseSolution;
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
