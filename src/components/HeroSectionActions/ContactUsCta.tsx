import LinkOutlined from '../LinksAndButtons/LinkOutlined';
import LinkFilled from '../LinksAndButtons/LinkFilled';
import { ContactUsProps } from './types';

const ContactUsCta = ({
    href,
    pageId,
    linkVariant = 'outlined',
}: ContactUsProps) => {
    const LinkComponent = linkVariant === 'filled' ? LinkFilled : LinkOutlined;

    return (
        <LinkComponent
            id={`contact-us-button/hero-section/${pageId}`}
            href={href ?? '/contact-us/'}
        >
            Contact Us
        </LinkComponent>
    );
};

export default ContactUsCta;
