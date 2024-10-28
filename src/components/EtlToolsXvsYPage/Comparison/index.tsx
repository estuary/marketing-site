import React, { useEffect, useMemo, useRef } from 'react';
import {
    dashboardRegisterUrl,
    getComparisonSlug,
    Vendor,
} from '../../../../shared';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import BlogBanner from '../../BlogBanner';
import ArticleSidebar from '../../ArticleSidebar';
import { container, rightColumn, bold } from './styles.module.less';
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

const articleBody = {
    intro: {
        id: 'intro',
        heading: 'Introduction',
    },
    comparisonMatrix: {
        id: 'comparison-matrix',
        heading: 'Comparison Matrix',
    },
    howToChoose: {
        id: 'how-to-choose',
        heading: 'How to choose the best option',
    },
};

const { intro, comparisonMatrix, howToChoose } = articleBody;

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

const Comparison = ({ xVendor, yVendor, estuaryVendor }: SectionTwoProps) => {
    const isThreeVendorComparison = useMemo(() => {
        return ![xVendor.id, yVendor.id].includes(estuaryVendor.id);
    }, [xVendor.id, yVendor.id, estuaryVendor.id]);

    const stickyRef1 = useRef<HTMLTableCellElement>(null);
    const stickyRef2 = useRef<HTMLTableCellElement>(null);
    const stickyRef3 = useRef<HTMLTableCellElement>(null);

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
            { id: intro.id, heading: intro.heading },
            { id: comparisonMatrix.id, heading: comparisonMatrix.heading },
            ...vendors,
            { id: howToChoose.id, heading: howToChoose.heading },
        ];
    }, [xVendor, yVendor, estuaryVendor, isThreeVendorComparison]);

    useEffect(() => {
        const handleScroll = () => {
            const refs = [stickyRef1, stickyRef2, stickyRef3];

            refs.forEach((ref) => {
                if (ref.current) {
                    const position = ref.current.getBoundingClientRect();
                    const firstDiv = ref.current.querySelector('div');

                    if (position.top <= 164) {
                        if (firstDiv) {
                            firstDiv.style.backgroundColor = '#F2F3F5';
                            firstDiv.style.padding = '8px 24px 8px 24px';
                        }
                    } else if (firstDiv) {
                        firstDiv.style.backgroundColor = '';
                        firstDiv.style.padding = '24px';
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={defaultWrapperGrey}>
            <div className={container}>
                <ArticleSidebar
                    article={{
                        title: `${xVendor.name} vs ${yVendor.name}`,
                        slug: getComparisonSlug(
                            xVendor.slugKey,
                            yVendor.slugKey
                        ),
                    }}
                    tableOfContents={tableOfContents}
                />
                <div className={rightColumn}>
                    <h2 id={intro.id}>{intro.heading}</h2>
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
                    <h2 id={comparisonMatrix.id}>{comparisonMatrix.heading}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th />
                                <VendorAvatar
                                    ref={stickyRef1}
                                    vendor={xVendor}
                                />
                                <VendorAvatar
                                    ref={stickyRef2}
                                    vendor={yVendor}
                                />
                                {isThreeVendorComparison ? (
                                    <VendorAvatar
                                        ref={stickyRef3}
                                        vendor={estuaryVendor}
                                    />
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

                    <h2 id={howToChoose.id}>{howToChoose.heading}</h2>
                    <p>
                        For the most part, if you are interested in a cloud
                        option, and the connectivity options exist, you may
                        choose to evaluate Estuary.
                    </p>
                    <p>
                        <strong>Modern data pipeline:</strong> Estuary has the
                        broadest support for schema evolution and modern
                        DataOps.
                    </p>
                    <p>
                        <strong>Lowest latency:</strong> If low latency matters,
                        Estuary will be the best option, especially at scale.
                    </p>
                    <p>
                        <strong>Highest data engineering productivity:</strong>{' '}
                        Estuary is among the easiest to use, on par with the
                        best ELT vendors. But it also has delivered up to 5x
                        greater productivity than the alternatives.
                    </p>
                    <p>
                        <strong>Connectivity:</strong> If you&apos;re more
                        concerned about cloud services, Estuary or another
                        modern ELT vendor may be your best option. If you need
                        more on-premises connectivity, you might consider more
                        traditional ETL vendors.
                    </p>
                    <p>
                        <strong>Lowest cost:</strong> Estuary is the clear
                        low-cost winner for medium and larger deployments.
                    </p>
                    <p>
                        <strong>Streaming support:</strong> Estuary has a modern
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

export default Comparison;
