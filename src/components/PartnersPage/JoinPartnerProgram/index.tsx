import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import PartnerProgramDetails from '../PartnerProgramDetails';
import { Partner } from '../shared';
import { container } from './styles.module.less';

const partners: Partner[] = [
    {
        icon: (
            <StaticImage
                src="../../../images/partners-page/partner-logos/database-tycoon.png"
                alt="Database Tycoon logo"
                placeholder="blurred"
            />
        ),
        name: 'Database Tycoon',
    },
    {
        icon: (
            <StaticImage
                src="../../../images/partners-page/partner-logos/outlier.png"
                alt="Outlier logo"
                placeholder="blurred"
            />
        ),
        name: 'Outlier',
    },
];

const JoinPartnerProgram = () => (
    <section className={defaultWrapperGrey}>
        <div className={container}>
            <h2>JOIN THE ESTUARY PARTNER PROGRAM</h2>
            <p>
                Join leaders in the data integration space. If you have the
                technology, solutions, and expertise to drive faster, smarter
                data integration, we want to partner with you.
            </p>
            <PartnerProgramDetails
                title="SERVICE INTEGRATION PARTNERS"
                description="Enable clients to build efficient, real-time data pipelines using Estuary Flow, transforming their data management and analytics capabilities."
                partners={partners}
            />
        </div>
    </section>
);

export default JoinPartnerProgram;
