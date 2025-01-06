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
        author: {
            name: string;
            role: string;
        };
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
