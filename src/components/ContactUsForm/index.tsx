import React from 'react';
import HubSpotFormWrapper from '../HubSpot/FormWrapper';
import { OutboundLink } from '../OutboundLink';
import {
    container,
    title,
    description,
    contactUsFormHelpText,
    redirectLink,
} from './styles.module.less';

interface ContactUsFormProps {
    titleHeadingLevel?: 'h1' | 'h2' | 'h3';
}

const ContactUsForm = ({ titleHeadingLevel = 'h2' }: ContactUsFormProps) => {
    const HeadingTag = titleHeadingLevel;

    return (
        <div className={container}>
            <HeadingTag className={title} id="contact-us">
                Let&apos;s talk about your data
            </HeadingTag>
            <p className={description}>
                Have a specific question or comment? Send us a note and a team
                member will reach out to you shortly.
            </p>
            <HubSpotFormWrapper />
            <p className={contactUsFormHelpText}>
                If you don&apos;t see the form, please{' '}
                <OutboundLink
                    href="https://share.hsforms.com/1aY5nFvOLS9WRBd-boiDimw553hf"
                    target="__blank"
                    className={redirectLink}
                >
                    click here
                </OutboundLink>{' '}
                to open it in a new tab.
            </p>
        </div>
    );
};

export default ContactUsForm;
