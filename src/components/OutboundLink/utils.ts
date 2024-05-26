export const handleOutboundLinkClick = (e, props) => {
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

    const hasGtag = typeof window !== 'undefined' && typeof window.gtag === 'function';

    if (hasGtag) {
        window.gtag('event', 'click', {
            event_category: 'outbound',
            event_label: props.href,
            transport_type: redirect ? 'beacon' : '',
            event_callback: () => {
                if (redirect) {
                    document.location = props.href;
                }
            },
        });
    } else if (redirect) {
        document.location = props.href;
    }

    return false;
};
