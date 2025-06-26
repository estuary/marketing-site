import { ImageData } from '../../../shared';

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
        logo: ImageData;
    }[];
    blogPosts?: {
        id: string;
        slug: string;
        title: string;
        description: string;
        hero: ImageData;
    }[];
}

export interface SolutionSectionListItem {
    text: {
        data: {
            text: string;
        };
    };
}

export interface GraphicSectionContent extends SectionText {
    id: string;
    description: string;
    list?: {
        title: string;
        items: SolutionSectionListItem[];
    };
    graphic: {
        title?: string;
        image: ImageData;
        subtitles?: {
            name: string;
            color: string;
        }[];
    };
    cardsTitle?: SectionTitle;
    cardItems?: StrapiJsonValue;
}
export interface Button {
    title: string;
    urlOrPath: string;
}

export interface ButtonsSectionContent extends SectionText {
    description: string;
    primaryButton: Button;
    secondaryButton: Button;
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
        primaryButton: Button;
        secondaryButton: Button;
    };
    testimonial: TestimonialSectionContent;
    highlights: HighlightsSectionContent;
    benefits: BenefitsSectionContent;
    capabilities: CapabilitiesSectionContent;
    keyFeatures: KeyFeaturesSectionContent;
    oneTitleThreeCards: OneTitleThreeCardsSectionContent;
    carouselSection: CarouselSectionContent;
    graphicSections: GraphicSectionContent[];
    buttonsSection: ButtonsSectionContent;
}

export interface SolutionTemplateProps {
    data: {
        solution: TemplatePageProps;
    };
}
