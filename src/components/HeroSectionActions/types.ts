export interface CommonCtaProps {
    linkVariant?: 'filled' | 'outlined';
}

export interface ContactUsProps extends CommonCtaProps {
    pageId: string;
    href?: string;
    title?: string;
}
