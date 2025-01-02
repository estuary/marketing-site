import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import Hero from '../../components/UseCaseSolutionsTemplate/Hero';
import Testimonial from '../../components/UseCaseSolutionsTemplate/Testimonial';

export interface TestimonialSectionContent {
    title: {
        highlightedText: string;
        normalText: string;
    };
    description: string;
    quote: {
        author: {
            name: string;
            role: string;
        };
        text: string;
    };
}

interface UseCaseSolution {
    slug: string;
    sections: {
        hero: {
            title: string;
        };
        testimonial: TestimonialSectionContent;
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
