import React from 'react';
import HubSpotFormWrapper from '../HubSpot/FormWrapper';
import { container, title, description } from './styles.module.less';

interface ContactUsFormProps {
    titleHeadingLevel?: 'h1' | 'h2';
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
        </div>
    );
};

export default ContactUsForm;
