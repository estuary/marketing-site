import React from 'react';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import SecurityCertificates from '../../SecurityCertificates';

const SecurityCertificatesSection = () => {
    return (
        <section className={defaultWrapperDark}>
            <SecurityCertificates />
        </section>
    );
};

export default SecurityCertificatesSection;
