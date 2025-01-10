interface SectionTitle {
    highlightedText: string;
    normalText: string;
}

interface SectionText {
    title: SectionTitle;
    description: string;
}

export interface TestimonialSectionContent extends SectionText {
    quote: {
        company?: string;
        successStoryUrl?: string;
        text: string;
    };
}

export interface HighlightsSectionContent extends SectionText {
    highlightItems: string[];
}

export interface BenefitsSectionContent extends SectionText {
    benefitItems: string[];
}

export interface CapabilitiesSectionContent extends SectionText {
    capabilityItems: string[];
}

export interface KeyFeaturesSectionContent extends SectionText {
    keyFeatureItems: string[];
}

export interface TemplatePageProps {
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
