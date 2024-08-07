import React from 'react';
import HubSpotFormWrapper from '../../HubSpot/FormWrapper';
import { title, description } from './styles.module.less';

const SectionOne = () => {
    return (
        <div className="about-section-five">
            <h1 className={title} id="contact-us">
                Let&apos;s talk about your data
            </h1>
            <p className={description}>
                Have a specific question or comment? Send us a note and a team
                member will reach out to you shortly.
            </p>
            <HubSpotFormWrapper />
        </div>
    );
};

export default SectionOne;
