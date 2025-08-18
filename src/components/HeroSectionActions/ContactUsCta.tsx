import LinkOutlined from '../LinksAndButtons/LinkOutlined';
import LinkFilled from '../LinksAndButtons/LinkFilled';
import { ContactUsProps } from './types';

const ContactUsCta = ({
    href,
    pageId,
    linkVariant = 'outlined',
    linkOutlinedVariant = 'primary',
    title = 'Contact Us',
}: ContactUsProps) => {
    const LinkComponent = linkVariant === 'filled' ? LinkFilled : LinkOutlined;

    return (
        <LinkComponent
            id={`${title}-button/hero-section/${pageId}`}
            href={href ?? '/contact-us/'}
            target="_blank"
            variant={
                linkVariant === 'outlined' ? linkOutlinedVariant : undefined
            }
        >
            {title}
        </LinkComponent>
    );
};

export default ContactUsCta;
