import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import Hero from '../../components/UseCaseSolutionsTemplate/Hero';
import Testimonial from '../../components/UseCaseSolutionsTemplate/Testimonial';
import Highlights from '../../components/UseCaseSolutionsTemplate/Highlights';
import Benefits from '../../components/UseCaseSolutionsTemplate/Benefits';

interface SectionTitle {
    highlightedText: string;
    normalText: string;
}

export interface TestimonialSectionContent {
    title: SectionTitle;
    description: string;
    quote: {
        author: {
            name: string;
            role: string;
        };
        text: string;
    };
}

export interface HighlightsSectionContent {
    title: SectionTitle;
    description: string;
    highlightItems: string[];
}

export interface BenefitsSectionContent {
    title: SectionTitle;
    description: string;
    benefitItems: string[];
}

interface UseCaseSolution {
    slug: string;
    sections: {
        hero: {
            title: string;
        };
        testimonial: TestimonialSectionContent;
        highlights: HighlightsSectionContent;
        benefits: BenefitsSectionContent;
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
