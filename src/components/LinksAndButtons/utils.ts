import { MouseEvent } from 'react';

interface OutboundLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
    href?: string;
}

// We have a similar funciton in gatsby-srr (clickTrackingScript)
export const handleOutboundLinkClick = (
    e: MouseEvent<HTMLAnchorElement>,
    props: OutboundLinkProps
) => {
    if (typeof props.onClick === 'function') {
        props.onClick(e);
    }

    let redirect = true;

    if (
        e.button !== 0 ||
        e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.defaultPrevented
    ) {
        redirect = false;
    }

    if (props.target && props.target.toLowerCase() !== '_self') {
        redirect = false;
    }

    const href = props.href;
    if (!href) return false;

    const hasGtag =
        typeof window !== 'undefined' && typeof window.gtag === 'function';

    if (hasGtag) {
        window.gtag('event', 'click', {
            event_category: 'outbound',
            event_label: href,
            transport_type: redirect ? 'beacon' : '',
            event_callback: () => {
                if (redirect) {
                    window.location.href = href;
                }
            },
        });
    } else if (redirect) {
        window.location.href = href;
    }

    return false;
};
