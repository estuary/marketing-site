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
            id={`contact-us-button-${pageId}-hero-section`}
            href={href ?? '/contact-us/'}
        >
            Contact Us
        </LinkComponent>
    );
};

export default ContactUsCta;
