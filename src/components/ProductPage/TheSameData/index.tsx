import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import clsx from 'clsx';
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

const generateButtonId = (connectorId: string) =>
    `${connectorId}-connector-button/the-same-data-section/product-page`;

const TheSameData = () => {
    return (
        <section>
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
                        The same data across <span>analytics, Ops,</span> and{' '}
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
                                                    id={generateButtonId(
                                                        'google-bigquery'
                                                    )}
                                                    to="/destination/bigquery"
                                                    aria-label="Google BigQuery destination"
                                                    className={clsx(
                                                        logoWrapper,
                                                        googleBigQueryLogoWrapper
                                                    )}
                                                />
                                                <Link
                                                    id={generateButtonId(
                                                        'databricks-analytics'
                                                    )}
                                                    to="/destination/databricks"
                                                    aria-label="Databricks destination"
                                                    className={clsx(
                                                        logoWrapper,
                                                        databricksLogoWrapper
                                                    )}
                                                />
                                                <Link
                                                    id={generateButtonId(
                                                        'amazon-redshift'
                                                    )}
                                                    to="/destination/redshift"
                                                    aria-label="Amazon Redshift destination"
                                                    className={clsx(
                                                        logoWrapper,
                                                        amazonRedshiftLogoWrapper
                                                    )}
                                                />
                                                <Link
                                                    id={generateButtonId(
                                                        'snowflake'
                                                    )}
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
                                                    id={generateButtonId(
                                                        'elasticsearch'
                                                    )}
                                                    to="/destination/elasticsearch"
                                                    aria-label="Elastic destination"
                                                    className={clsx(
                                                        trioGroupLogo,
                                                        logoWrapper,
                                                        trioGroupFirstLogo
                                                    )}
                                                />
                                                <Link
                                                    id={generateButtonId(
                                                        'mongodb'
                                                    )}
                                                    to="/destination/mongodb"
                                                    aria-label="MongoDB destination"
                                                    className={clsx(
                                                        trioGroupLogo,
                                                        logoWrapper,
                                                        trioGroupSecondLogo
                                                    )}
                                                />
                                                <Link
                                                    id={generateButtonId(
                                                        'amazon-dynamodb'
                                                    )}
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
                                                    id={generateButtonId(
                                                        'pinecone'
                                                    )}
                                                    to="/destination/pinecone"
                                                    aria-label="Pinecone destination"
                                                    className={clsx(
                                                        trioGroupLogo,
                                                        logoWrapper,
                                                        trioGroupFirstLogo
                                                    )}
                                                />
                                                <Link
                                                    id={generateButtonId(
                                                        'openai'
                                                    )}
                                                    to="/destination/pinecone"
                                                    aria-label="OpenAI destination"
                                                    className={clsx(
                                                        trioGroupLogo,
                                                        logoWrapper,
                                                        trioGroupSecondLogo
                                                    )}
                                                />
                                                <Link
                                                    id={generateButtonId(
                                                        'databricks-ai'
                                                    )}
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
