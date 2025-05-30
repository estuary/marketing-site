interface LinkType {
    id: string;
    label: string;
    href: string;
}

export interface CardProps {
    title: string;
    link?: LinkType;
    outboundLink?: LinkType;
}
