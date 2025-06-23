import { ImageType } from '../../../shared';

export interface SectionTitle {
    highlightedText: string;
    normalText: string;
    normalTextComesFirst?: boolean;
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
    images: any[]; // TODO: Check this type
}

export interface CapabilitiesSectionContent extends SectionText {
    capabilityItems: StrapiJsonValue;
}

export interface KeyFeaturesSectionContent extends SectionText {
    keyFeatureItems: StrapiJsonValue;
}

export interface OneTitleThreeCardsSectionContent extends SectionText {
    cardItems: {
        title: string;
        description: string;
    }[];
}

export interface CarouselSectionContent extends SectionText {
    successStories?: {
        id: string;
        slug: string;
        title: string;
        description: string;
        logo: {
            localFile: Required<ImageType>;
        };
    }[];
    blogPosts?: {
        id: string;
        slug: string;
        title: string;
        description: string;
        hero: {
            localFile: Required<ImageType>;
        };
    }[];
}

export interface HeroButton {
    title: string;
    urlOrPath: string;
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
        primaryButton: HeroButton;
        secondaryButton: HeroButton;
    };
    testimonial: TestimonialSectionContent;
    highlights: HighlightsSectionContent;
    benefits: BenefitsSectionContent;
    capabilities: CapabilitiesSectionContent;
    keyFeatures: KeyFeaturesSectionContent;
    oneTitleThreeCards: OneTitleThreeCardsSectionContent;
    carouselSection: CarouselSectionContent;
}

export interface SolutionTemplateProps {
    data: {
        solution: TemplatePageProps;
    };
}
