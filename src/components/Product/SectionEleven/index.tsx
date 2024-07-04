import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { DefaultWrapperDarkBlue } from '../../../styles/wrappers';
import {
    AmazonRedshiftStreamingEtlLogoWrapper,
    BatchEltColumn,
    BatchEltDescription,
    BatchEltTitle,
    Columns,
    Container,
    ElasticStreamingEtlLogoWrapper,
    ImageWrapper,
    MySQLBatchElt1LogoWrapper,
    MySQLBatchElt2LogoWrapper,
    MySQLBatchElt3LogoWrapper,
    MySQLStreamingEtlLogoWrapper,
    SnowflakeBatchEltLogoWrapper,
    SnowflakeStreamingEtlLogoWrapper,
    StreamingEtlColumn,
    StreamingEtlDescription,
    StreamingEtlTitle,
    TextWrapper,
    Title,
} from './styles';

const SectionEleven = () => {
    return (
        <DefaultWrapperDarkBlue>
            <Container>
                <Title>
                    STREAMING <span>ETL VS. BATCH ELT</span>
                </Title>
                <Columns>
                    <StreamingEtlColumn>
                        <ImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Key feature - Real-time and batch"
                                src="../../../images/product-page/section-eleven/streaming-etl.png"
                                layout="constrained"
                                quality={100}
                            />
                            <MySQLStreamingEtlLogoWrapper
                                to="/source/mysql"
                                aria-label="MySQL source"
                                className="right-icon"
                            />
                            <ElasticStreamingEtlLogoWrapper
                                to="/destination/elasticsearch"
                                aria-label="Elastic destination"
                                className="left-icon"
                            />
                            <SnowflakeStreamingEtlLogoWrapper
                                to="/destination/snowflake"
                                aria-label="Snowflake destination"
                                className="left-icon"
                            />
                            <AmazonRedshiftStreamingEtlLogoWrapper
                                to="/destination/redshift"
                                aria-label="Amazon Redshift destination"
                                className="left-icon"
                            />
                        </ImageWrapper>
                        <TextWrapper>
                            <StreamingEtlTitle>STREAMING ETL</StreamingEtlTitle>
                            <StreamingEtlDescription>
                                With Estuary, you extract data exactly and only
                                once using CDC, real-time, or batch; use ELT and
                                ETL; and deliver to many destinations with one
                                pipeline.
                            </StreamingEtlDescription>
                        </TextWrapper>
                    </StreamingEtlColumn>
                    <BatchEltColumn>
                        <ImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Key feature - Real-time and batch"
                                src="../../../images/product-page/section-eleven/batch-elt.png"
                                layout="constrained"
                                quality={100}
                            />
                            <MySQLBatchElt1LogoWrapper
                                to="/source/mysql"
                                aria-label="MySQL source"
                                className="right-icon"
                            />
                            <MySQLBatchElt3LogoWrapper
                                to="/source/mysql"
                                aria-label="MySQL source"
                                className="right-icon"
                            />
                            <MySQLBatchElt2LogoWrapper
                                to="/source/mysql"
                                aria-label="MySQL source"
                                className="right-icon"
                            />
                            <ElasticStreamingEtlLogoWrapper
                                to="/destination/elasticsearch"
                                aria-label="Elastic destination"
                                className="left-icon"
                            />
                            <SnowflakeBatchEltLogoWrapper
                                to="/destination/snowflake"
                                aria-label="Snowflake destination"
                                className="left-icon"
                            />
                            <AmazonRedshiftStreamingEtlLogoWrapper
                                to="/destination/redshift"
                                aria-label="Amazon Redshift destination"
                                className="left-icon"
                            />
                        </ImageWrapper>
                        <TextWrapper>
                            <BatchEltTitle>BATCH</BatchEltTitle>
                            <BatchEltDescription>
                                SaaS ELT tools are batch only, point-to-point
                                replication. Each destination requires its own
                                pipeline and source extractions, adding loads,
                                costs, and time.
                            </BatchEltDescription>
                        </TextWrapper>
                    </BatchEltColumn>
                </Columns>
            </Container>
        </DefaultWrapperDarkBlue>
    );
};

export default SectionEleven;
