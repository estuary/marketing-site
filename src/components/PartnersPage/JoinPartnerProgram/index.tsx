import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import PartnerProgramDetails from '../PartnerProgramDetails';
import { Partner } from '../shared';
import { container } from './styles.module.less';

const techPartners: Partner[] = [
    {
        icon: (
            <StaticImage
                src="../../../images/partners-page/partner-logos/bytewax.png"
                alt="Bytewax logo"
                placeholder="blurred"
            />
        ),
        name: 'Bytewax',
        href: 'https://docs.estuary.dev/reference/Connectors/dekaf/dekaf-bytewax/',
    },
    {
        icon: (
            <StaticImage
                src="../../../images/partners-page/partner-logos/materialize.png"
                alt="Materialize logo"
                placeholder="blurred"
            />
        ),
        name: 'Materialize',
        href: 'https://docs.estuary.dev/reference/Connectors/dekaf/dekaf-materialize/',
    },
    {
        icon: (
            <StaticImage
                src="../../../images/partners-page/partner-logos/motherduck.svg"
                alt="MotherDuck logo"
                placeholder="blurred"
            />
        ),
        name: 'MotherDuck',
        href: 'https://motherduck.com/?utm_source=estuary&utm_medium=referral/',
    },
    {
        icon: (
            <StaticImage
                src="../../../images/partners-page/partner-logos/singlestore.png"
                alt="SingleStore logo"
                placeholder="blurred"
            />
        ),
        name: 'SingleStore',
        href: 'https://docs.estuary.dev/reference/Connectors/dekaf/dekaf-singlestore/',
    },
    {
        icon: (
            <StaticImage
                src="../../../images/partners-page/partner-logos/snowflake.png"
                alt="Snowflake logo"
                placeholder="blurred"
            />
        ),
        name: 'Snowflake',
        href: 'https://estuary.dev/destination/snowflake/',
    },
    {
        icon: (
            <StaticImage
                src="../../../images/partners-page/partner-logos/startree.png"
                alt="StarTree logo"
                placeholder="blurred"
            />
        ),
        name: 'StarTree',
        href: 'https://docs.estuary.dev/reference/Connectors/dekaf/dekaf-startree/',
    },
    {
        icon: (
            <StaticImage
                src="../../../images/partners-page/partner-logos/tinybird.png"
                alt="Tinybird logo"
                placeholder="blurred"
            />
        ),
        name: 'Tinybird',
        href: 'https://www.tinybird.co/docs/guides/ingesting-data/ingest-with-estuary/',
    },
    {
        icon: (
            <StaticImage
                src="../../../images/partners-page/partner-logos/databricks.svg"
                alt="Databricks logo"
                placeholder="blurred"
            />
        ),
        name: 'Databricks',
        href: 'https://estuary.dev/destination/databricks/',
    },
];

const JoinPartnerProgram = () => (
    <section className={defaultWrapperGrey}>
        <div className={container}>
            <h2>Join the Estuary partner program</h2>
            <p>
                Join leaders in the data integration space. If you have the
                technology, solutions, and expertise to drive faster, smarter
                data integration, we want to partner with you.
            </p>
            <PartnerProgramDetails
                title="Technology partners"
                description="Integrate seamlessly with Estuary Flow to enhance the data ecosystem. The Estuary Partner Program is designed to simplify the process for developers and businesses looking to integrate real-time data solutions."
                partners={techPartners}
            />
        </div>
    </section>
);

export default JoinPartnerProgram;
