import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getComparisonSlug, Vendor } from '../../../../shared';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import ShareArticle from '../../../templates/blog-post/ShareArticle';
import EstuaryLogo from '../../../svgs/estuary-icon.svg';
import BlogBuildPipelineBanner from '../../BlogBuildPipelineBanner';
import {
    container,
    leftColumn,
    bold,
    tableHeaderVendor,
    tableLogoWrapper,
} from './styles.module.less';

interface SectionTwoProps {
    xVendor: Vendor;
    yVendor: Vendor;
}

const SectionTwo = ({ xVendor, yVendor }: SectionTwoProps) => {
    return (
        <section className={defaultWrapperGrey}>
            <div className={container}>
                <div className={leftColumn}>
                    <ShareArticle
                        article={{
                            title: `${xVendor.name} vs ${yVendor.name}`,
                            slug: getComparisonSlug(
                                xVendor.slugKey,
                                yVendor.slugKey
                            ),
                        }}
                    />
                    {/* <RenderToc items={} /> */}
                </div>
                <div>
                    <h2>Introduction</h2>
                    <p className={bold}>
                        Do you need to load a cloud data warehouse? Synchronize
                        data in real-time across apps or databases? Support
                        real-time analytics? Use generative AI?
                    </p>
                    <p>
                        This guide is designed to help you compare{' '}
                        {xVendor.name} vs {yVendor.name} across nearly 40
                        criteria for these use cases and more, and choose the
                        best option for you based on your current and future
                        needs.
                    </p>
                    <p>
                        Read through the comparison matrix of {xVendor.name} vs{' '}
                        {yVendor.name} vs Estuary across the core criteria and
                        use cases. You can read a detailed explanation of each
                        of the criteria here. Then read an overview of each
                        vendor and recommendations on how to choose the right
                        vendor for you.
                    </p>
                    <h2>Comparison Matrix</h2>
                    <table>
                        <thead>
                            <tr>
                                <th />
                                <th>
                                    <div className={tableHeaderVendor}>
                                        <div className={tableLogoWrapper}>
                                            <GatsbyImage
                                                alt={`${xVendor.name} logo`}
                                                image={
                                                    xVendor.logo.localFile
                                                        .childImageSharp
                                                        .gatsbyImageData
                                                }
                                            />
                                        </div>
                                        <span>{xVendor.name}</span>
                                    </div>
                                </th>
                                <th>
                                    <div className={tableHeaderVendor}>
                                        <div className={tableLogoWrapper}>
                                            <GatsbyImage
                                                alt={`${yVendor.name} logo`}
                                                image={
                                                    yVendor.logo.localFile
                                                        .childImageSharp
                                                        .gatsbyImageData
                                                }
                                            />
                                        </div>
                                        <span>{yVendor.name}</span>
                                    </div>
                                </th>
                                <th>
                                    <div className={tableHeaderVendor}>
                                        <div className={tableLogoWrapper}>
                                            <EstuaryLogo
                                                width={36}
                                                height={36}
                                            />
                                        </div>
                                        <span>Estuary</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colSpan={4}>Use cases</th>
                            </tr>
                            <tr>
                                <td>Database replication (CDC) - sources</td>
                                <td>
                                    MySQL, SQL Server (Debezium), Postgres
                                    (New). No CDC destination, Many-to-many
                                    messaging, ELT load only
                                </td>
                                <td>
                                    Native MySQL, SQL Server, Postgres, Oracle
                                    (ELT load only), Single target only, Batch
                                    CDC only
                                </td>
                                <td>
                                    Native CDC MySQL, SQL Server, Postgres,
                                    AlloyDB, MariaDB, MongoDB, Firestore,
                                    Salesforce Many-to-many ETL and ELT
                                </td>
                            </tr>
                            <tr>
                                <td>Replication to ODS</td>
                                <td>&#10060; (batch CDC only)</td>
                                <td>&#10060; (batch CDC only)</td>
                                <td>&#10004; (real-time CDC)</td>
                            </tr>
                            <tr>
                                <td>Historical Analytics</td>
                                <td>1 destination ELT</td>
                                <td>1 destination ELT</td>
                                <td>Many-to-many ELT/ETL</td>
                            </tr>
                            <tr>
                                <td>Op. data integration</td>
                                <td>&#10060; (batch CDC only)</td>
                                <td>&#10060; (batch CDC only)</td>
                                <td>&#10004; (real-time CDC)</td>
                            </tr>
                            <tr>
                                <td>Data migration</td>
                                <td>&#10060; (batch CDC only)</td>
                                <td>&#10060; (batch CDC only)</td>
                                <td>&#10004; (real-time CDC)</td>
                            </tr>
                            <tr>
                                <td>Stream processing</td>
                                <td>&#10060; (batch CDC only)</td>
                                <td>&#10060; (batch CDC only)</td>
                                <td>&#10004; (real-time CDC)</td>
                            </tr>
                            <tr>
                                <td>Operational Analytics</td>
                                <td>Higher latency, batch ELT only</td>
                                <td>Higher latency, batch ELT only</td>
                                <td>Streaming ETL/ELT</td>
                            </tr>
                            <tr>
                                <td>Data science and ML</td>
                                <td>ELT only</td>
                                <td>ELT only</td>
                                <td>
                                    Support for SQL, Typescript (Python Q2 24)
                                </td>
                            </tr>
                            <tr>
                                <th colSpan={4}>Connectors</th>
                            </tr>
                            <tr>
                                <td>Number of connectors</td>
                                <td>
                                    50+ maintained connectors, 300 marketplace
                                    connectors
                                </td>
                                <td>
                                    &lt;300 connectors, 300+ lite (API)
                                    connectors
                                </td>
                                <td>
                                    150+ high performance connectors built by
                                    Estuary
                                </td>
                            </tr>
                            <tr>
                                <td>Streaming connectors</td>
                                <td>
                                    Batch CDC only, Batch Kafka, Kinesis
                                    (destination only)
                                </td>
                                <td>
                                    Batch CDC only, Batch Kafka & Kinesis both
                                    source only
                                </td>
                                <td>
                                    Streaming CDC, Kafka, Kinesis (source only)
                                </td>
                            </tr>
                            <tr>
                                <td>Support for 3rd party connectors</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <td>Custom SDK</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <td>API &#40;for admin&#41;</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <th colSpan={4}>Core features</th>
                            </tr>
                            <tr>
                                <td>Batch and streaming</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <td>Snapshots</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <td>ETL Transforms</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <td>Workflow</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <td>ELT transforms</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <td>Delivery guarantees</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <td>Multiple destinations</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <td>Backfilling</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <td>Time travel</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <td>Schema inference and drift</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <td>DataOps support</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <th colSpan={4}>Deployment options</th>
                            </tr>
                            <tr>
                                <td>Deployment options</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <th colSpan={4}>The abilities</th>
                            </tr>
                            <tr>
                                <td>Performance &#40;minimum latency&#41;</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <td>Scalability</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <td>Reliability</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <th colSpan={4}>Security</th>
                            </tr>
                            <tr>
                                <td>Data Source Authentication</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <td>Encryption</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <th colSpan={4}>Support</th>
                            </tr>
                            <tr>
                                <td>Support</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <th colSpan={4}>Costs</th>
                            </tr>
                            <tr>
                                <td>Ease of use</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <td>vendor costs</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <td>Data engineering costs</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                            <tr>
                                <td>Admin costs</td>
                                <td>&#10004; (Singer/Stitch connectors)</td>
                                <td>&#10060;</td>
                                <td>
                                    Support for 500+ Airbyte, Stitch, and
                                    Meltano connectors
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <BlogBuildPipelineBanner />
                    <h2>How to choose the best option</h2>
                    <p>
                        For the most part, if you are interested in a cloud
                        option, and the connectivity options exist, you may
                        choose to evaluate Estuary.
                    </p>
                    <p>
                        <span>Modern data pipeline:</span> Estuary has the
                        broadest support for schema evolution and modern
                        DataOps.
                    </p>
                    <p>
                        <span>Lowest latency:</span> If low latency matters,
                        Estuary will be the best option, especially at scale.
                    </p>
                    <p>
                        <span>Highest data engineering productivity:</span>{' '}
                        Estuary is among the easiest to use, on par with the
                        best ELT vendors. But it also has delivered up to 5x
                        greater productivity than the alternatives.
                    </p>
                    <p>
                        <span>Connectivity:</span> If you&apos;re more concerned
                        about cloud services, Estuary or another modern ELT
                        vendor may be your best option. If you need more on
                        premises connectivity, you might consider more
                        traditional ETL vendors.
                    </p>
                    <p>
                        <span>Lowest cost:</span> Estuary is the clear low-cost
                        winner for medium and larger deployments.
                    </p>
                    <p>
                        <span>Streaming support:</span> Estuary has a modern
                        approach to CDC that is built for reliability and scale,
                        and great Kafka support as well. It&apos;s real-time CDC
                        is arguably the best of all the options here. Some ETL
                        vendors like Informatica and Talend also have real-time
                        CDC. ELT-only vendors only support batch CDC.
                    </p>
                    <p>
                        Ultimately the best approach for evaluating your options
                        is to identify your future and current needs for
                        connectivity, key data integration features, and
                        performance, scalability, reliability, and security
                        needs, and use this information to a good short-term and
                        long-term solution for you.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SectionTwo;
