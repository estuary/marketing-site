import React from 'react';
import SecurityCertificates from '../../SecurityCertificates';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';

const AlwaysSecure = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <SecurityCertificates
                isDarkTheme
                title={
                    <>
                        YOUR DATA IS <span>ALWAYS SECURE</span>
                    </>
                }
                subtitle="Estuary is built from the ground up to be as secure as possible."
            />
        </section>
    );
};

export default AlwaysSecure;
