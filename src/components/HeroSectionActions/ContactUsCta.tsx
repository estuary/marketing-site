import React from 'react';
import LinkOutlined from '../LinksAndButtons/LinkOutlined';

interface ContactUsProps {
    href?: string;
}

const ContactUsCta = ({ href }: ContactUsProps) => {
    return (
        <LinkOutlined href={href ?? '/contact-us/'}>Contact Us</LinkOutlined>
    );
};

export default ContactUsCta;
