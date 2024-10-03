import React, { useMemo } from 'react';
import {
    dashboardRegisterUrl,
    getComparisonSlug,
    Vendor,
} from '../../../../shared';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import ShareArticle from '../../../templates/blog-post/ShareArticle';
import BlogBanner from '../../BlogBanner';
import { RenderToc } from '../../BlogPostToc';
import {
    container,
    leftColumn,
    bold,
    introductoryDetailsWrapper,
    tableWrapper,
} from './styles.module.less';
import UseCases from './UseCases';
import Connectors from './Connectors';
import CoreFeatures from './CoreFeatures';
import DeploymentOptions from './DeploymentOptions';
import TheAbilities from './TheAbilities';
import Security from './Security';
import Support from './Support';
import Cost from './Cost';
import VendorAvatar from './VendorAvatar';

interface SectionTwoProps {
    xVendor: Vendor;
    yVendor: Vendor;
    estuaryVendor: Vendor;
}

const introId = 'intro';
const comparisonMatrixId = 'comparison-matrix';
const howToChooseId = 'how-to-choose';

const SectionTwo = ({ xVendor, yVendor, estuaryVendor }: SectionTwoProps) => {
    const tableOfContents = useMemo(
        () => [
            {
                id: introId,
                heading: 'Introduction',
            },
            {
                id: comparisonMatrixId,
                heading: 'Comparison Matrix',
            },
            {
                id: estuaryVendor.id,
                heading: estuaryVendor.name,
                items: [
                    {
                        id: `${estuaryVendor.id}-pros`,
                        heading: 'Pros',
                    },
                    {
                        id: `${estuaryVendor.id}-cons`,
                        heading: 'Cons',
                    },
                    {
                        id: `${estuaryVendor.id}-pricing`,
                        heading: 'Pricing',
                    },
                ],
            },
            {
                id: xVendor.id,
                heading: xVendor.name,
                items: [
                    {
                        id: `${xVendor.id}-pros`,
                        heading: 'Pros',
                    },
                    {
                        id: `${xVendor.id}-cons`,
                        heading: 'Cons',
                    },
                    {
                        id: `${xVendor.id}-pricing`,
                        heading: 'Pricing',
                    },
                ],
            },
            {
                id: yVendor.id,
                heading: yVendor.name,
                items: [
                    {
                        id: `${yVendor.id}-pros`,
                        heading: 'Pros',
                    },
                    {
                        id: `${yVendor.id}-cons`,
                        heading: 'Cons',
                    },
                    {
                        id: `${yVendor.id}-pricing`,
                        heading: 'Pricing',
                    },
                ],
            },
            {
                id: howToChooseId,
                heading: 'How to choose the best option',
            },
        ],
        [xVendor, yVendor, estuaryVendor]
    );

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
                    <RenderToc items={tableOfContents} />
                </div>
                <div>
                    <h2 id={introId}>Introduction</h2>
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
                        {yVendor.name} vs {estuaryVendor.name} across the core
                        criteria and use cases. You can read a detailed
                        explanation of each of the criteria here. Then read an
                        overview of each vendor and recommendations on how to
                        choose the right vendor for you.
                    </p>
                    <h2 id={comparisonMatrixId}>Comparison Matrix</h2>
                    <div className={tableWrapper}>
                        <table>
                            <thead>
                                <tr>
                                    <th />
                                    <VendorAvatar vendor={xVendor} />
                                    <VendorAvatar vendor={yVendor} />
                                    <VendorAvatar vendor={estuaryVendor} />
                                </tr>
                            </thead>
                            <tbody>
                                <UseCases
                                    xVendor={xVendor}
                                    yVendor={yVendor}
                                    estuaryVendor={estuaryVendor}
                                />
                                <Connectors
                                    xVendor={xVendor}
                                    yVendor={yVendor}
                                    estuaryVendor={estuaryVendor}
                                />
                                <CoreFeatures
                                    xVendor={xVendor}
                                    yVendor={yVendor}
                                    estuaryVendor={estuaryVendor}
                                />
                                <DeploymentOptions
                                    xVendor={xVendor}
                                    yVendor={yVendor}
                                    estuaryVendor={estuaryVendor}
                                />
                                <TheAbilities
                                    xVendor={xVendor}
                                    yVendor={yVendor}
                                    estuaryVendor={estuaryVendor}
                                />
                                <Security
                                    xVendor={xVendor}
                                    yVendor={yVendor}
                                    estuaryVendor={estuaryVendor}
                                />
                                <Support
                                    xVendor={xVendor}
                                    yVendor={yVendor}
                                    estuaryVendor={estuaryVendor}
                                />
                                <Cost
                                    xVendor={xVendor}
                                    yVendor={yVendor}
                                    estuaryVendor={estuaryVendor}
                                />
                            </tbody>
                        </table>
                    </div>
                    <BlogBanner
                        title={
                            <h3>
                                Start streaming your data <span>for free</span>
                            </h3>
                        }
                        button={{
                            title: 'Build a Pipeline',
                            href: dashboardRegisterUrl,
                        }}
                    />

                    <div className={introductoryDetailsWrapper}>
                        <h2 id={estuaryVendor.id}>{estuaryVendor.name}</h2>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: estuaryVendor.introductoryDetails
                                    .introduction.data.introduction,
                            }}
                        />
                        <h3 id={`${estuaryVendor.id}-pros`}>Pros</h3>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: estuaryVendor.introductoryDetails.pros
                                    .data.pros,
                            }}
                        />
                        <h3 id={`${estuaryVendor.id}-cons`}>Cons</h3>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: estuaryVendor.introductoryDetails.cons
                                    .data.cons,
                            }}
                        />
                        <h3 id={`${estuaryVendor.id}-pricing`}>Pricing</h3>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: estuaryVendor.introductoryDetails
                                    .pricing.data.pricing,
                            }}
                        />

                        <h2 id={xVendor.id}>{xVendor.name}</h2>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: xVendor.introductoryDetails.introduction
                                    .data.introduction,
                            }}
                        />
                        <h3 id={`${xVendor.id}-pros`}>Pros</h3>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: xVendor.introductoryDetails.pros.data
                                    .pros,
                            }}
                        />
                        <h3 id={`${xVendor.id}-cons`}>Cons</h3>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: xVendor.introductoryDetails.cons.data
                                    .cons,
                            }}
                        />
                        <h3 id={`${xVendor.id}-pricing`}>Pricing</h3>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: xVendor.introductoryDetails.pricing.data
                                    .pricing,
                            }}
                        />

                        <h2 id={yVendor.id}>{yVendor.name}</h2>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: yVendor.introductoryDetails.introduction
                                    .data.introduction,
                            }}
                        />
                        <h3 id={`${yVendor.id}-pros`}>Pros</h3>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: yVendor.introductoryDetails.pros.data
                                    .pros,
                            }}
                        />
                        <h3 id={`${yVendor.id}-cons`}>Cons</h3>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: yVendor.introductoryDetails.cons.data
                                    .cons,
                            }}
                        />
                        <h3 id={`${yVendor.id}-pricing`}>Pricing</h3>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: yVendor.introductoryDetails.pricing.data
                                    .pricing,
                            }}
                        />
                    </div>

                    <h2 id={howToChooseId}>How to choose the best option</h2>
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
