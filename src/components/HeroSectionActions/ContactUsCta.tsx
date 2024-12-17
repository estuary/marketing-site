import React from 'react';
import LinkOutlined from '../LinksAndButtons/LinkOutlined';
import LinkFilled from '../LinksAndButtons/LinkFilled';

interface ContactUsProps {
    href?: string;
    linkVariant?: 'filled' | 'outlined';
}

const ContactUsCta = ({ href, linkVariant = 'outlined' }: ContactUsProps) => {
    const LinkComponent = linkVariant === 'filled' ? LinkFilled : LinkOutlined;

    return (
        <LinkComponent href={href ?? '/contact-us/'}>Contact Us</LinkComponent>
    );
};

export default ContactUsCta;
