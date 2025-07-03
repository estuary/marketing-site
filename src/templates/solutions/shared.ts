import { ImageData, ImageType } from '../../../shared';

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

export interface OneTitleThreeCardsSectionContent {
    sectionTitle: SectionTitle;
    cardItems: {
        title: string;
        description: string;
    }[];
}

export interface CarouselSectionContent {
    title: string;
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

export const SECTION_CTA_TYPE = {
    button: 'Button',
    banner: 'Banner',
} as const;

export interface GraphicSectionContent extends SectionText {
    id: string;
    description: string;
    list?: {
        title: string;
        items: SolutionSectionListItem[];
    };
    sectionCta?: {
        link: Button;
        type: (typeof SECTION_CTA_TYPE)[keyof typeof SECTION_CTA_TYPE];
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
        image?: {
            localFile: ImageType;
        };
    };
    hero: {
        title: string;
        description: string;
        image: ImageData;
        videoUrl?: string;
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
        site: {
            siteMetadata: {
                siteName: string;
                siteUrl: string;
            };
        };
        solution: TemplatePageProps;
    };
}

const snowflakeSolutionSlugInStrapi =
    '/technology/real-time-snowflake-streaming';

export const checkSnowflakeSolution = (slug: string) =>
    slug.includes(snowflakeSolutionSlugInStrapi);
