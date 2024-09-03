import React from 'react';
import ContactUsForm from '../../ContactUsForm';
import { OutboundLink } from '../../OutboundLink';
import { section, contactUsFormHelpText } from './styles.module.less';

const SectionOne = () => {
    return (
        <section className={section}>
            <ContactUsForm titleHeadingLevel="h1" />
            <p className={contactUsFormHelpText}>
                If you don't see the form, please{' '}
                <OutboundLink
                    href="https://share.hsforms.com/1aY5nFvOLS9WRBd-boiDimw553hf"
                    target="__blank"
                >
                    click here
                </OutboundLink>{' '}
                to open it in a new tab.
            </p>
        </section>
    );
};

export default SectionOne;
