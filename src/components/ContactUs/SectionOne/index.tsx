import React from 'react';
import HubSpotFormWrapper from '../../HubSpot/FormWrapper';
import { section, container, title, description } from './styles.module.less';

const SectionOne = () => {
    return (
        <section className={section}>
            <div className={container}>
                <h1 className={title}>Let&apos;s talk about your data</h1>
                <p className={description}>
                    Have a specific question or comment? Send us a note and a
                    team member will reach out to you shortly.
                </p>
                <HubSpotFormWrapper />
            </div>
        </section>
    );
};

export default SectionOne;
