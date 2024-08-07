import React from 'react';
import NewsletterSignupForm from '../../NewsletterSignupForm';
import { section, container, title } from './styles.module.less';

const SectionThree = () => {
    return (
        <section className={section}>
            <div className={container}>
                <h2 className={title}>
                    Bring Real-Time Data from Any Source into your Warehouse
                </h2>
                <NewsletterSignupForm
                    inputPlaceholder="name@company.com"
                    buttonTitle="GET STARTED FOR FREE"
                    redirectUrl="https://dashboard.estuary.dev/register"
                />
            </div>
        </section>
    );
};

export default SectionThree;
