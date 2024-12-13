import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
    defaultWrapperDarkBlue,
    globalMaxWidth,
} from '../../../globalStyles/wrappers.module.less';
import PartnerProgramDetails from '../PartnerProgramDetails';
import { Partner } from '../shared';

const serviceIntegrationPartners: Partner[] = [
    {
        icon: (
            <StaticImage
                src="../../../images/partners-page/partner-logos/database-tycoon.png"
                alt="Database Tycoon logo"
                placeholder="blurred"
            />
        ),
        name: 'Database Tycoon',
        href: 'https://www.databasetycoon.com/',
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
        href: 'https://weareoutlier.com/',
    },
    {
        icon: (
            <StaticImage
                src="../../../images/partners-page/partner-logos/seattle-data-guy.png"
                alt="Seattle Data Guy logo"
                placeholder="blurred"
            />
        ),
        name: 'Seattle Data Guy',
        href: 'https://www.theseattledataguy.com/',
    },
    {
        icon: (
            <StaticImage
                src="../../../images/partners-page/partner-logos/corrdyn.png"
                alt="Corrdyn logo"
                placeholder="blurred"
            />
        ),
        name: 'Corrdyn',
        href: 'https://www.corrdyn.com/',
    },
    {
        icon: (
            <StaticImage
                src="../../../images/partners-page/partner-logos/brooklyn.png"
                alt="Brooklyn logo"
                placeholder="blurred"
            />
        ),
        name: 'Brooklyn',
        href: 'https://www.brooklyndata.co/',
    },
];

const SIPartners = () => (
    <section className={defaultWrapperDarkBlue}>
        <div className={globalMaxWidth}>
            <PartnerProgramDetails
                title="SERVICE INTEGRATION PARTNERS"
                description="Enable clients to build efficient, real-time data pipelines using Estuary Flow, transforming their data management and analytics capabilities."
                partners={serviceIntegrationPartners}
                isReverse
                isDarkTheme
            />
        </div>
    </section>
);

export default SIPartners;
