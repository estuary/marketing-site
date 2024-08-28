import React from 'react';
import NewsletterSignupForm from '../../NewsletterSignupForm';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import { dashboardRegisterUrl } from '../../../../shared';
import { container, title } from './styles.module.less';

const SectionThree = () => {
    return (
        <section className={defaultWrapperDark}>
            <div className={container}>
                <h2 className={title}>
                    Bring Real-Time Data from Any Source into your Warehouse
                </h2>
                <NewsletterSignupForm
                    inputPlaceholder="name@company.com"
                    buttonTitle="GET STARTED FOR FREE"
                    redirectUrl={dashboardRegisterUrl}
                />
            </div>
        </section>
    );
};

export default SectionThree;
