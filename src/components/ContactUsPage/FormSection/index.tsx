import React from 'react';
import ContactUsForm from '../../ContactUsForm';
import { section } from './styles.module.less';

const FormSection = () => {
    return (
        <section className={section}>
            <ContactUsForm titleHeadingLevel="h1" />
        </section>
    );
};

export default FormSection;
