import * as React from 'react';
import clsx from 'clsx';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import Image1 from '../../svgs/solutions-1.svg';
import Image2 from '../../svgs/solutions-2.svg';
import Image3 from '../../svgs/solutions-3.svg';
import Image4 from '../../svgs/solutions-4.svg';
import SolutionsBanner from '../../svgs/solutions-banner.svg';
import { estuaryAllowsEnterprises } from '../../content/seo';
import FlowLogoVector from '../../components/FlowLogoVector';
import {
    sectionOne,
    sectionOneBackgroundImageWrapper,
    sectionOneLeft,
    sectionOneRight,
    bannerWrapper,
    sectionWrapper,
    subtextBold,
    subtext,
    sectionTextWrapper,
    sectionImageWrapper,
    marginBottom,
    sectionImageWrapperRight,
    sectionLogoRight,
    mobileFlexDirectionReverse,
} from './styles.module.less';

const SolutionsPage = () => {
    return (
        <Layout>
            <div className={sectionOneBackgroundImageWrapper}>
                <div className={sectionOne}>
                    <div className={sectionOneLeft}>
                        <h1>
                            Streaming ETL solutions are revolutionizing
                            what&apos;s possible for data pipelines.
                        </h1>
                        <p>
                            For too long, enterprises have been forced to choose
                            between batch and streaming processes.
                        </p>
                        <p>{estuaryAllowsEnterprises}</p>
                    </div>
                    <div className={sectionOneRight}>
                        <FlowLogoVector />
                    </div>
                </div>
            </div>
            <div className={bannerWrapper}>
                <SolutionsBanner />
            </div>
            <div className={sectionWrapper}>
                <div className={sectionTextWrapper}>
                    <h2>Real time analytics</h2>
                    <p className={subtextBold}>
                        Fresh, error free data is the key to real-time business
                        intelligence.
                    </p>

                    <p className={subtext}>
                        Batch data pipelines introduce latency by definition.
                        Low-latency, high-volume data streaming pipelines give
                        you powerful real-time insight about your business.{' '}
                    </p>

                    <p className={subtext}>
                        Whether you&apos;re looking to improve anomaly or fraud
                        detection or to improve your predictive analytics,
                        building your analytics practice on the freshest data is
                        a no-brainer.
                    </p>
                </div>
                <div
                    className={sectionLogoRight}
                    // Adjust logo positioning so it doesn't clip the image
                    style={{ marginBottom: 0 }}
                >
                    <FlowLogoVector />
                </div>
                <div className={sectionImageWrapper}>
                    <Image1 />
                </div>
            </div>
            <div className={clsx(sectionWrapper, mobileFlexDirectionReverse)}>
                <div className={sectionImageWrapper}>
                    <Image2 />
                </div>
                <div className={sectionTextWrapper}>
                    <h2>Customer 360</h2>

                    <p className={subtextBold}>
                        Building a complete view of customer data is getting
                        harder every year.
                    </p>

                    <p className={subtext}>
                        As customer touchpoints fragment, it&apos;s vital to
                        quickly connect their data from multiple sources. By
                        doing so, you can create a real-time view of your
                        customers&apos; journey and provide a personalized
                        experience to every customer.{' '}
                    </p>

                    <p className={subtext}>
                        Customer 360 isn&apos;t just about improving your
                        digital conversion rates. It can also help match
                        real-time inventory, improve customer service, and
                        manage stock better.
                    </p>
                </div>
            </div>

            <div className={sectionWrapper}>
                <div className={sectionTextWrapper}>
                    <h2>Database replication using CDC</h2>
                    <p className={subtextBold}>
                        Move your data efficiently without latency and errors
                        using CDC.
                    </p>

                    <p className={subtext}>
                        Change data capture has the potential to provide a
                        real-time foundation for database replication. But
                        error-prone batch pipelines that aren&apos;t fit for
                        purpose can keep you from taking advantage of it.
                    </p>

                    <p className={subtext}>
                        Estuary&apos;s low-latency, high-scale CDC processes
                        allow you to move data from legacy databases to
                        analytics environments efficiently — with no data loss
                        and zero downtime.
                    </p>
                </div>
                <div className={sectionImageWrapperRight}>
                    <div className={sectionLogoRight}>
                        <FlowLogoVector />
                    </div>
                    <div className={sectionImageWrapper}>
                        <Image3 />
                    </div>
                </div>
            </div>
            <div
                className={clsx(
                    sectionWrapper,
                    marginBottom,
                    mobileFlexDirectionReverse
                )}
            >
                <div className={sectionImageWrapper}>
                    <Image4 />
                </div>
                <div className={sectionTextWrapper}>
                    <h2>Database migration</h2>

                    <p className={subtextBold}>
                        Migrate your data easily, even from legacy databases.
                    </p>

                    <p className={subtext}>
                        Migrating your data to the cloud unlocks new,
                        cost-effective options for analytics, reporting and
                        intelligence. But moving it there from legacy databases
                        can be error-prone, expensive, and time consuming.
                    </p>

                    <p className={subtext}>
                        Estuary&apos;s data pipelines integrate with all leading
                        legacy databases, so you can get to work extracting your
                        data in minutes. And with intelligent transformation
                        options and integrations with leading cloud warehouses,
                        your data will arrive when you want it, error free.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export const Head = () => {
    return <Seo title="Solutions" description={estuaryAllowsEnterprises} />;
};

export default SolutionsPage;
