import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Tabs from '../../Tabs';
import Container from '../../Container';
import PieChartIcon from '../../../svgs/pie-chart.svg';
import OpsIcon from '../../../svgs/ops.svg';
import AndroidBrainIcon from '../../../svgs/android-brain.svg';
import LogoAndPath from './LogoAndPath';
import {
    amazonRedshiftLogoWrapper,
    connectors,
    analyticsConnectors,
    databricksLogoWrapper,
    googleBigQueryLogoWrapper,
    iconWrapper,
    iconsWrapper,
    trioGroupFirstLogo,
    trioGroupSecondLogo,
    trioGroupThirdLogo,
    snowflakeLogoWrapper,
    tabContent,
    tabImageWrapper,
    tabsWrapper,
    textWrapper,
    logoWrapper,
    trioGroupLogo,
} from './styles.module.less';

const TheSameData = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container isReverseColumnOnMobile>
                <div className={textWrapper}>
                    <div className={iconsWrapper}>
                        <div className={iconWrapper}>
                            <PieChartIcon color="var(--blue)" />
                        </div>
                        <div className={iconWrapper}>
                            <OpsIcon />
                        </div>
                        <div className={iconWrapper}>
                            <AndroidBrainIcon />
                        </div>
                    </div>
                    <h2>
                        THE SAME DATA ACROSS <span>ANALYTICS, OPS,</span> AND{' '}
                        <span>AI</span>
                    </h2>
                    <p>
                        Add data from your sources into collections. Then reuse
                        that data for any destinations in real-time or batch.
                    </p>
                </div>
                <div className={tabsWrapper}>
                    <Tabs
                        tabs={[
                            {
                                label: 'Analytics',
                                content: (
                                    <div className={tabContent}>
                                        <div className={tabImageWrapper}>
                                            <LogoAndPath tab="analytics" />
                                            <div
                                                className={clsx(
                                                    connectors,
                                                    analyticsConnectors
                                                )}
                                            >
                                                <StaticImage
                                                    placeholder="blurred"
                                                    alt="Analytics Connectors"
                                                    src="../../../images/product-page/section-five/analytics-connectors.png"
                                                />
                                                <Link
                                                    to="/destination/bigquery"
                                                    aria-label="Google BigQuery destination"
                                                    className={clsx(
                                                        logoWrapper,
                                                        googleBigQueryLogoWrapper
                                                    )}
                                                />
                                                <Link
                                                    to="/destination/databricks"
                                                    aria-label="Databricks destination"
                                                    className={clsx(
                                                        logoWrapper,
                                                        databricksLogoWrapper
                                                    )}
                                                />
                                                <Link
                                                    to="/destination/redshift"
                                                    aria-label="Amazon Redshift destination"
                                                    className={clsx(
                                                        logoWrapper,
                                                        amazonRedshiftLogoWrapper
                                                    )}
                                                />
                                                <Link
                                                    to="/destination/snowflake"
                                                    aria-label="Snowflake destination"
                                                    className={clsx(
                                                        logoWrapper,
                                                        snowflakeLogoWrapper
                                                    )}
                                                />
                                            </div>
                                        </div>
                                        <p>
                                            Load into BigQuery, Databricks,
                                            Redshift or Snowflake for analytics.
                                        </p>
                                    </div>
                                ),
                            },
                            {
                                label: 'Ops',
                                content: (
                                    <div className={tabContent}>
                                        <div className={tabImageWrapper}>
                                            <LogoAndPath tab="ops" />
                                            <div className={connectors}>
                                                <StaticImage
                                                    placeholder="blurred"
                                                    alt="Ops Connectors"
                                                    src="../../../images/product-page/section-five/ops-connectors.png"
                                                    height={128}
                                                    quality={100}
                                                />
                                                <Link
                                                    to="/destination/elasticsearch"
                                                    aria-label="Elastic destination"
                                                    className={clsx(
                                                        trioGroupLogo,
                                                        logoWrapper,
                                                        trioGroupFirstLogo
                                                    )}
                                                />
                                                <Link
                                                    to="/destination/mongodb"
                                                    aria-label="MongoDB destination"
                                                    className={clsx(
                                                        trioGroupLogo,
                                                        logoWrapper,
                                                        trioGroupSecondLogo
                                                    )}
                                                />
                                                <Link
                                                    to="/destination/dynamodb"
                                                    aria-label="Amazon DynamoDB destination"
                                                    className={clsx(
                                                        trioGroupLogo,
                                                        logoWrapper,
                                                        trioGroupThirdLogo
                                                    )}
                                                />
                                            </div>
                                        </div>
                                        <p>
                                            Stream into SQL or NoSQL databases,
                                            high-performance OLAP, or
                                            Elasticsearch for operations.
                                        </p>
                                    </div>
                                ),
                            },
                            {
                                label: 'AI',
                                content: (
                                    <div className={tabContent}>
                                        <div className={tabImageWrapper}>
                                            <LogoAndPath tab="ai" />
                                            <div className={connectors}>
                                                <StaticImage
                                                    placeholder="blurred"
                                                    alt="AI Connectors"
                                                    src="../../../images/product-page/section-five/ai-connectors.png"
                                                    height={128}
                                                />
                                                <Link
                                                    to="/destination/pinecone"
                                                    aria-label="Pinecone destination"
                                                    className={clsx(
                                                        trioGroupLogo,
                                                        logoWrapper,
                                                        trioGroupFirstLogo
                                                    )}
                                                />
                                                <Link
                                                    to="/destination/pinecone"
                                                    aria-label="Pinecone destination"
                                                    className={clsx(
                                                        trioGroupLogo,
                                                        logoWrapper,
                                                        trioGroupSecondLogo
                                                    )}
                                                />
                                                <Link
                                                    to="/destination/databricks"
                                                    aria-label="Databricks destination"
                                                    className={clsx(
                                                        trioGroupLogo,
                                                        logoWrapper,
                                                        trioGroupThirdLogo
                                                    )}
                                                />
                                            </div>
                                        </div>
                                        <p>
                                            Build pipelines that vectorize and
                                            load data into databases, or call
                                            ChatGPT for AI.
                                        </p>
                                    </div>
                                ),
                            },
                        ]}
                    />
                </div>
            </Container>
        </section>
    );
};

export default TheSameData;
