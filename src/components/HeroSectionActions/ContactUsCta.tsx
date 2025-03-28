import LinkOutlined from '../LinksAndButtons/LinkOutlined';
import LinkFilled from '../LinksAndButtons/LinkFilled';
import { getSlugifiedText } from '../../../shared';
import { ContactUsProps } from './types';

const ContactUsCta = ({
    href,
    pageId,
    linkVariant = 'outlined',
    title = 'Contact Us',
}: ContactUsProps) => {
    const LinkComponent = linkVariant === 'filled' ? LinkFilled : LinkOutlined;

    return (
        <LinkComponent
            id={`${getSlugifiedText(title)}-button/hero-section/${pageId}`}
            href={href ?? '/contact-us/'}
        >
            {title}
        </LinkComponent>
    );
};

export default ContactUsCta;
