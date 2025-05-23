import { StaticImage } from 'gatsby-plugin-image';
import { globalMaxWidth } from '../../../globalStyles/wrappers.module.less';
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
                src="../../../images/partners-page/partner-logos/brooklyn-data-co.png"
                alt="Brooklyn Data Co. logo"
                placeholder="blurred"
            />
        ),
        name: 'Brooklyn Data Co.',
        href: 'https://www.brooklyndata.co/',
    },
    {
        icon: (
            <StaticImage
                src="../../../images/partners-page/partner-logos/dashlytix.png"
                alt="Dashlytix logo"
                placeholder="blurred"
            />
        ),
        name: 'Dashlytix',
        href: 'https://www.dashlytix.com/',
    },
    {
        icon: (
            <StaticImage
                src="../../../images/partners-page/partner-logos/fornax.png"
                alt="Fornax logo"
                placeholder="blurred"
            />
        ),
        name: 'Fornax',
        href: 'https://www.fornaxhq.co/?utm_source=estuary&utm_medium=partnership',
    },
];

const SIPartners = () => (
    <section>
        <div className={globalMaxWidth}>
            <PartnerProgramDetails
                title="Service integration partners"
                description="Enable clients to build efficient, real-time data pipelines using Estuary Flow, transforming their data management and analytics capabilities."
                partners={serviceIntegrationPartners}
                isReverse
                isDarkTheme
            />
        </div>
    </section>
);

export default SIPartners;
