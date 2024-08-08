import React from 'react';
import ContactUsForm from '../../ContactUsForm';
import { section } from './styles.module.less';

const SectionOne = () => {
    return (
        <section className={section}>
            <ContactUsForm titleHeadingLevel="h1" />
        </section>
    );
};

export default SectionOne;
