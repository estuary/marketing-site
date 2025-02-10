interface SectionTitle {
    highlightedText: string;
    normalText: string;
}

interface SectionText {
    sectionTitle: SectionTitle;
    description: string;
}

interface StrapiJsonValue {
    strapi_json_value: string[];
}

export interface TestimonialSectionContent extends SectionText {
    quote: {
        companyName?: string;
        companyLogo?: any; // TODO: Check this type
        successStoryUrl?: string;
        text: string;
    };
}

export interface HighlightsSectionContent extends SectionText {
    highlightItems: StrapiJsonValue;
}

export interface BenefitsSectionContent extends SectionText {
    benefitItems: StrapiJsonValue;
}

export interface CapabilitiesSectionContent extends SectionText {
    capabilityItems: StrapiJsonValue;
}

export interface KeyFeaturesSectionContent extends SectionText {
    keyFeatureItems: StrapiJsonValue;
}

export interface TemplatePageProps {
    slug: string;
    metadata: {
        title: string;
        description: string;
    };
    hero: {
        title: string;
        description: string;
        image: any; // TODO: Check this type
    };
    testimonial: TestimonialSectionContent;
    highlights: HighlightsSectionContent;
    benefits: BenefitsSectionContent;
    capabilities: CapabilitiesSectionContent;
    keyFeatures: KeyFeaturesSectionContent;
}

export interface SolutionTemplateProps {
    data: {
        solution: TemplatePageProps;
    };
}
