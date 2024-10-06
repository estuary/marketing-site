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
    tableWrapper,
    tableOfContentsWrapper,
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
import IntroductoryDetails from './IntroductoryDetails';

interface SectionTwoProps {
    xVendor: Vendor;
    yVendor: Vendor;
    estuaryVendor: Vendor;
}

const introId = 'intro';
const comparisonMatrixId = 'comparison-matrix';
const howToChooseId = 'how-to-choose';

const tableBodyComponents = [
    UseCases,
    Connectors,
    CoreFeatures,
    DeploymentOptions,
    TheAbilities,
    Security,
    Support,
    Cost,
];

const SectionTwo = ({ xVendor, yVendor, estuaryVendor }: SectionTwoProps) => {
    const isThreeVendorComparison = useMemo(() => {
        return ![xVendor.id, yVendor.id].includes(estuaryVendor.id);
    }, [xVendor.id, yVendor.id, estuaryVendor.id]);

    const tableOfContents = useMemo(() => {
        const createVendorItem = (vendor) => ({
            id: vendor.name.replace(' ', '-'),
            heading: vendor.name,
            items: [
                {
                    id: `${vendor.name.replace(' ', '-')}-pros`,
                    heading: 'Pros',
                },
                {
                    id: `${vendor.name.replace(' ', '-')}-cons`,
                    heading: 'Cons',
                },
                {
                    id: `${vendor.name.replace(' ', '-')}-pricing`,
                    heading: 'Pricing',
                },
            ],
        });

        const vendors = [xVendor, yVendor].map(createVendorItem);

        if (isThreeVendorComparison) {
            vendors.unshift(createVendorItem(estuaryVendor));
        }

        return [
            { id: introId, heading: 'Introduction' },
            { id: comparisonMatrixId, heading: 'Comparison Matrix' },
            ...vendors,
            { id: howToChooseId, heading: 'How to choose the best option' },
        ];
    }, [xVendor, yVendor, estuaryVendor, isThreeVendorComparison]);

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
                    <div className={tableOfContentsWrapper}>
                        <RenderToc items={tableOfContents} />
                    </div>
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
                    <h2 id={comparisonMatrixId}>Comparison Matrix</h2>
                    <div className={tableWrapper}>
                        <table>
                            <thead>
                                <tr>
                                    <th />
                                    <VendorAvatar vendor={xVendor} />
                                    <VendorAvatar vendor={yVendor} />
                                    {isThreeVendorComparison ? (
                                        <VendorAvatar vendor={estuaryVendor} />
                                    ) : null}
                                </tr>
                            </thead>
                            <tbody>
                                {tableBodyComponents.map((Component, index) => (
                                    <Component
                                        key={index}
                                        xVendor={xVendor}
                                        yVendor={yVendor}
                                        estuaryVendor={
                                            isThreeVendorComparison
                                                ? estuaryVendor
                                                : null
                                        }
                                    />
                                ))}
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

                    <IntroductoryDetails
                        isThreeVendorComparison={isThreeVendorComparison}
                        estuaryVendor={estuaryVendor}
                        xVendor={xVendor}
                        yVendor={yVendor}
                    />

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
