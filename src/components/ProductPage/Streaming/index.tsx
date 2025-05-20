import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import Container from '../../Container';
import {
    amazonRedshiftStreamingEtlLogoWrapper,
    batchEltColumn,
    batchEltDescription,
    batchEltTitle,
    columns,
    column,
    imageWrapper,
    mySQLBatchElt1LogoWrapper,
    slightlyOffsetCenteredLogoWrapper,
    streamingEtlColumn,
    streamingEtlDescription,
    streamingEtlTitle,
    textWrapper,
    title,
    rightIcon,
    leftIcon,
    centeredLogoWrapper,
    topLogoWrapper,
    bottomLogoWrapper,
    logoWrapper,
} from './styles.module.less';

const generateButtonId = (connectorId: string) =>
    `${connectorId}-connector-button/streaming-section/product-page`;

const Streaming = () => {
    return (
        <section>
            <Container isVertical isDarkTheme>
                <h2 className={title}>
                    Streaming <span>ETL vs. Batch ELT</span>
                </h2>
                <div className={columns}>
                    <div className={clsx(streamingEtlColumn, column)}>
                        <div className={imageWrapper}>
                            <StaticImage
                                placeholder="none"
                                alt="Key feature - Real-time and batch"
                                src="../../../images/product-page/section-eleven/streaming-etl.png"
                                quality={100}
                            />
                            <Link
                                id={generateButtonId('mysql-streaming-etl')}
                                to="/source/mysql"
                                aria-label="MySQL source"
                                className={clsx(
                                    logoWrapper,
                                    centeredLogoWrapper,
                                    rightIcon
                                )}
                            />
                            <Link
                                id={generateButtonId(
                                    'elasticsearch-streaming-etl'
                                )}
                                to="/destination/elasticsearch"
                                aria-label="Elastic destination"
                                className={clsx(
                                    logoWrapper,
                                    topLogoWrapper,
                                    leftIcon
                                )}
                            />
                            <Link
                                id={generateButtonId('snowflake-streaming-etl')}
                                to="/destination/snowflake"
                                aria-label="Snowflake destination"
                                className={clsx(
                                    logoWrapper,
                                    centeredLogoWrapper,
                                    leftIcon
                                )}
                            />
                            <Link
                                id={generateButtonId(
                                    'amazon-redshift-streaming-etl'
                                )}
                                to="/destination/redshift"
                                aria-label="Amazon Redshift destination"
                                className={clsx(
                                    logoWrapper,
                                    amazonRedshiftStreamingEtlLogoWrapper,
                                    leftIcon
                                )}
                            />
                        </div>
                        <div className={textWrapper}>
                            <h3 className={streamingEtlTitle}>Streaming ETL</h3>
                            <p className={streamingEtlDescription}>
                                With Estuary, you extract data exactly and only
                                once using CDC, real-time, or batch; use ELT and
                                ETL; and deliver to many destinations with one
                                pipeline.
                            </p>
                        </div>
                    </div>
                    <div className={clsx(batchEltColumn, column)}>
                        <div className={imageWrapper}>
                            <StaticImage
                                placeholder="none"
                                alt="Key feature - Real-time and batch"
                                src="../../../images/product-page/section-eleven/batch-elt.png"
                                quality={100}
                            />
                            <Link
                                id={generateButtonId('mysql-batch-1')}
                                to="/source/mysql"
                                aria-label="MySQL source"
                                className={clsx(
                                    logoWrapper,
                                    mySQLBatchElt1LogoWrapper,
                                    topLogoWrapper,
                                    rightIcon
                                )}
                            />
                            <Link
                                id={generateButtonId('mysql-batch-2')}
                                to="/source/mysql"
                                aria-label="MySQL source"
                                className={clsx(
                                    logoWrapper,
                                    slightlyOffsetCenteredLogoWrapper,
                                    rightIcon
                                )}
                            />
                            <Link
                                id={generateButtonId('mysql-batch-3')}
                                to="/source/mysql"
                                aria-label="MySQL source"
                                className={clsx(
                                    logoWrapper,
                                    bottomLogoWrapper,
                                    rightIcon
                                )}
                            />
                            <Link
                                id={generateButtonId('elasticsearch-batch')}
                                to="/destination/elasticsearch"
                                aria-label="Elastic destination"
                                className={clsx(
                                    logoWrapper,
                                    topLogoWrapper,
                                    leftIcon
                                )}
                            />
                            <Link
                                id={generateButtonId('snowflake-batch')}
                                to="/destination/snowflake"
                                aria-label="Snowflake destination"
                                className={clsx(
                                    logoWrapper,
                                    slightlyOffsetCenteredLogoWrapper,
                                    leftIcon
                                )}
                            />
                            <Link
                                id={generateButtonId('amazon-redshift-batch')}
                                to="/destination/redshift"
                                aria-label="Amazon Redshift destination"
                                className={clsx(
                                    logoWrapper,
                                    amazonRedshiftStreamingEtlLogoWrapper,
                                    leftIcon
                                )}
                            />
                        </div>
                        <div className={textWrapper}>
                            <h3 className={batchEltTitle}>Batch</h3>
                            <p className={batchEltDescription}>
                                SaaS ELT tools are batch only, point-to-point
                                replication. Each destination requires its own
                                pipeline and source extractions, adding loads,
                                costs, and time.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Streaming;
