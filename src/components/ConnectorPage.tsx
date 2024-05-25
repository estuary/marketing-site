import { useMediaQuery } from '@mui/material';
import { Link } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { isMobile as isRealMobile } from 'react-device-detect';
import ReactPlayer from 'react-player/lazy';
import { ConnectorType, estuaryProductFlowVideoUrl } from '../../shared';
import { Connectors } from '../components/Connectors';
import ConnectorsImageDesktop from '../components/ConnectorsImageDesktop';
import ConnectorsImageMobile from '../components/ConnectorsImageMobile';
import ConnectorsLink from '../components/ConnectorsLink';
import { OutboundLink } from '../components/OutboundLink';
import SliderHorizontal from '../components/SliderHorizontal';
import useWindowExistence from '../hooks/useWindowExistence';
import CareerAvatar from '../svgs/about-careers-avatar-icon.svg';
import ColoredLogo from '../svgs/colored-logo.svg';
import DbIcon from '../svgs/db2.svg';
import FlowLogo from '../svgs/flow-logo.svg';
import DataModernization from '../svgs/icon-data-modernization.svg';
import DataReplication from '../svgs/icon-data-replication.svg';
import OperationalAnalytics from '../svgs/icon-operational-analytics.svg';
import StreamingELT from '../svgs/icon-streaming-elt.svg';
import FlowLongtailSaas from '../svgs/product-flow-longtail-saas.svg';
import SectionTwoDataCaptureImg1 from '../svgs/product-flow-section-two-data-capture-image1.svg';
import { normalizeConnector } from '../utils';

export interface ConnectorPageProps {
    source_connector: any;
    dest_connector: any;
    connector_type?: ConnectorType;
}

export const ConnectorPage = ({
    source_connector,
    dest_connector,
    connector_type,
}: ConnectorPageProps) => {
    const source_mapped =
        source_connector && normalizeConnector(source_connector);
    const dest_mapped = dest_connector && normalizeConnector(dest_connector);

    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isMobile = isRealMobile || isSmallScreen

    const hasWindow = useWindowExistence();

    return (
        <>
            <div className="blogs-index-header-wrapper">
                <div className="connector-index-header">
                    <div
                        style={{
                            alignItems: 'center',
                        }}
                    >
                        <h1 className="connector-source-dest-title">
                            Move your data
                        </h1>
                        {source_mapped ? (
                            <h1 className="connector-source-dest-title">
                                from <span>{source_mapped.title}</span>
                            </h1>
                        ) : null}
                        {dest_mapped ? (
                            <h1 className="connector-source-dest-title">
                                to <span>{dest_mapped.title}</span>
                            </h1>
                        ) : null}
                        <h1 className="connector-source-dest-title">
                            with millisecond
                        </h1>
                        <h1 className="connector-source-dest-title">latency</h1>
                        <div className="connector-title-subtext">
                            <span>
                                Estuary builds free, open-source connectors to{' '}
                                {connector_type === 'capture'
                                    ? `extract data from ${source_mapped.title}`
                                    : connector_type === 'materialization'
                                        ? `write data to ${dest_mapped.title}`
                                        : `move data from ${source_mapped.title} to ${dest_mapped.title}`}{' '}
                                in real-time, allowing you to enable a copy of
                                your data wherever you want.
                            </span>
                        </div>
                        <div className="connector-try-it-free-button-wrapper">
                            <OutboundLink
                                target="_blank"
                                href="https://dashboard.estuary.dev/register"
                                className="section-four-try-it-button"
                            >
                                Try it free
                            </OutboundLink>
                        </div>
                    </div>
                    <div className="connector-source-dest-image-wrapper">
                        <div className="connector-source-dest-image-position-1">
                            {source_mapped ? (
                                <GatsbyImage
                                    image={
                                        source_mapped.logo?.childImageSharp
                                            ?.gatsbyImageData
                                    }
                                    className="connector-source-dest-image"
                                    alt="Connector Logo"
                                />
                            ) : (
                                <DbIcon className="connector-source-dest-image" />
                            )}
                        </div>
                        <div className="connector-source-dest-image-position-2">
                            <ColoredLogo
                                style={{ maxWidth: '80px' }}
                                className="connector-source-dest-image"
                            />
                        </div>
                        <div className="connector-source-dest-image-position-3">
                            {dest_mapped ? (
                                <GatsbyImage
                                    image={
                                        dest_mapped.logo?.childImageSharp
                                            ?.gatsbyImageData
                                    }
                                    className="connector-source-dest-image"
                                    alt="Connector Logo"
                                />
                            ) : (
                                <DbIcon className="connector-source-dest-image" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="connector-section-wrapper vertical-mobile">
                <div className="connector-features-desc-subwrapper">
                    <h3 className="connector-features-header">Features</h3>
                    <p className="connector-features-subtext show-mobile">
                        Capture your data from sources like databases and SaaS
                        applications.
                    </p>
                    <div className="product-flow-topic-section-wrapper">
                        <div className="product-flow-topic-wrapper">
                            <div className="icon-wrapper">
                                <SectionTwoDataCaptureImg1 className="icon-image" />
                            </div>
                            <p className="product-flow-section-two-topic-child">
                                <span className="product-flow-bold">
                                    Real-time CDC{' '}
                                </span>
                                from databases. Built by the Estuary team to
                                scale and ensure exactly once semantics.
                            </p>
                        </div>
                        <div className="product-flow-topic-wrapper">
                            <div className="icon-wrapper">
                                <StaticImage
                                    quality={90}
                                    placeholder="none"
                                    alt="salesforce logo"
                                    src="../images/salesforce-logo.png"
                                    width={35}
                                    layout="fixed"
                                    className="icon-image"
                                />
                            </div>
                            <p className="product-flow-section-two-topic-child">
                                <span className="product-flow-bold">
                                    Real-time SaaS integrations
                                </span>{' '}
                                built by the Estuary team for apps that support
                                streaming.
                            </p>
                        </div>
                        <div className="product-flow-topic-wrapper">
                            <div className="icon-wrapper">
                                <FlowLongtailSaas className="icon-image" />
                            </div>
                            <p className="product-flow-section-two-topic-child">
                                <span className="product-flow-bold">
                                    Long-tail SaaS
                                </span>
                                . Integrate any Airbyte connector to access 200+
                                batch-based endpoints.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="connector-features-desc-wrapper">
                    {source_mapped ? (
                        <div className="connector-features-desc-subwrapper connector-desc">
                            <h4>{source_mapped.title}</h4>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html:
                                        source_mapped.longDescription ||
                                        source_mapped.shortDescription,
                                }}
                            />
                        </div>
                    ) : null}
                    {dest_mapped ? (
                        <div className="connector-features-desc-subwrapper connector-desc">
                            <h4>{dest_mapped.title}</h4>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html:
                                        dest_mapped.longDescription ||
                                        dest_mapped.shortDescription,
                                }}
                            />
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="connector-link-bottom connector-section-wrapper">
                <ConnectorsLink
                    defaultSourceId={source_mapped?.id}
                    defaultDestinationId={dest_mapped?.id}
                />
            </div>
            <div className="connector-section-background">
                <div className="connector-section-content-wrapper">
                    <div className="connector-section-content connector-center connector-section-mobile">
                        <h2 className="connector-h2-tight-margin hide-mobile">
                            Real-time data
                            <br />
                            without coding
                        </h2>
                        <p className="connector-h2-subtext">
                            Estuary’s code-free streaming data operations
                            platform enables real-time data with history and the
                            integrations you need.
                        </p>
                    </div>
                    <div className="connector-section-content connector-center">
                        <div className="connector-video-wrapper">
                            {hasWindow ? (
                                <ReactPlayer
                                    light={
                                        <StaticImage
                                            quality={80}
                                            placeholder="none"
                                            alt="estuary flow product video"
                                            src="../images/homepage-product-video.svg"
                                            className="section-three-product-video-thumbnail"
                                            layout="constrained"
                                        />
                                    }
                                    url={estuaryProductFlowVideoUrl}
                                />
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
            <div className="connector-section-wrapper-top-margin">
                <p className="connector-header-small">
                    Load data directly into the destination of your choice
                </p>
                <div className="connector-image-wrapper">
                    {isMobile ? (
                        <>
                            <StaticImage
                                quality={90}
                                alt="row of logos"
                                src="../images/logos_row1.png"
                            />
                            <StaticImage
                                quality={90}
                                alt="row of logos"
                                src="../images/logos_row2.png"
                            />
                        </>
                    ) : (
                        <>
                            <StaticImage
                                quality={90}
                                alt="row of logos"
                                src="../images/logos_row1.png"
                                layout="constrained"
                                className="connector-logo-row"
                            />
                            <StaticImage
                                quality={90}
                                alt="data logo"
                                src="../images/logos_row2.png"
                                layout="constrained"
                                className="connector-logo-row"
                            />
                        </>
                    )}
                </div>
                <Link
                    className="connector-destinations-button"
                    to="/destinations"
                >
                    More destinations
                </Link>
                <FlowLogo className="flow-logo-100" />
            </div>
            <div className="connector-section-wrapper-vertical">
                <p className="small-uppercase-header">why estuary flow</p>
                <SliderHorizontal />
            </div>
            <div className="connector-section-wrapper-vertical">
                <div className="product-flow-section-three-tile-wrapper">
                    <div className="product-flow-section-three-tile">
                        <div className="icon-wrapper">
                            <SectionTwoDataCaptureImg1 className="icon-image" />
                        </div>
                        <h3 className="section-four-tile-title">
                            Change data capture
                        </h3>
                        <p className="section-four-tile-subtext">
                            Real-time CDC from databases. Built by the Estuary
                            team to scale and ensure exactly once semantics.
                        </p>
                    </div>
                    <div className="product-flow-section-three-tile">
                        <div className="icon-wrapper">
                            <CareerAvatar className="icon-image" />
                        </div>
                        <h3 className="section-four-tile-title">
                            Customer 360
                        </h3>
                        <p className="section-four-tile-subtext">
                            Gain a unified view of your customers while your
                            team interacts with them. Real-time with historical
                            data.
                        </p>
                    </div>
                    <div className="product-flow-section-three-tile">
                        <div className="icon-wrapper">
                            <OperationalAnalytics className="icon-image" />
                        </div>
                        <h3 className="section-four-tile-title">
                            Operational analytics
                        </h3>
                        <p className="section-four-tile-subtext">
                            Gain a unified view of your customers while your
                            team interacts with them. Real-time with historical
                            data.
                        </p>
                    </div>
                </div>
                <div className="product-flow-section-three-tile-wrapper">
                    <div className="product-flow-section-three-tile">
                        <div className="icon-wrapper">
                            <DataReplication className="icon-image" />
                        </div>
                        <h3 className="section-four-tile-title">
                            Data replication & migration
                        </h3>
                        <p className="section-four-tile-subtext">
                            Centralize data with real-time replication.
                        </p>
                    </div>
                    <div className="product-flow-section-three-tile">
                        <div className="icon-wrapper">
                            <StreamingELT className="icon-image" />
                        </div>
                        <h3 className="section-four-tile-title">
                            Streaming ELT
                        </h3>
                        <p className="section-four-tile-subtext">
                            Centralize data with real-time replication.
                        </p>
                    </div>
                    <div className="product-flow-section-three-tile">
                        <div className="icon-wrapper">
                            <DataModernization className="icon-image" />
                        </div>
                        <h3 className="section-four-tile-title">
                            Data modernization
                        </h3>
                        <p className="section-four-tile-subtext">
                            Seamlessly connect legacy systems to a modern hybrid
                            cloud environment that’s fully extensible.
                        </p>
                    </div>
                </div>
            </div>
            <div className="background-gray">
                <div className="connector-section-wrapper-vertical margin-top-lg">
                    <h2 className="center-text h2-mobile">
                        Real-time use cases
                    </h2>
                    <p className="connector-header-subtext">
                        Bye bye batch hello streaming type of sentiment
                    </p>
                    <StaticImage
                        quality={100}
                        alt="data-flow-banner-image"
                        src="../images/real-time-use-cases.png"
                        className="connector-image-large-center"
                    />
                    <div className="automated-schema-wrapper">
                        <p className="connector-header-small hide-mobile">
                            Automated Schema Migration
                        </p>
                        <p className="automated-schema-text">table_accounts</p>
                        {isMobile ? (
                            <StaticImage
                                quality={100}
                                alt="table-column-options-image"
                                src="../images/table_accounts_vertical.png"
                                className="table-accounts-vertical"
                            />
                        ) : (
                            <StaticImage
                                quality={100}
                                alt="table-column-options-image"
                                src="../images/table_accounts.png"
                                layout="constrained"
                                className="table-accounts"
                                style={{
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="connector-section-wrapper-vertical margin-top-lg">
                <h2 className="center-text connector-h2-tight-margin">
                    Total visibility into
                </h2>
                <h2 className="center-text connector-h2-tight-margin">
                    your data pipelines
                </h2>
                <StaticImage
                    quality={100}
                    alt="flow-screenshot"
                    src="../images/flow-screenshot.png"
                    layout="constrained"
                    className="data-pipelines-image"
                />
            </div>
            <div
                className="connector-section-wrapper-vertical margin-top-lg"
                style={{ marginBottom: '6rem' }}
            >
                <p className="small-uppercase-header header-margin-sm margin-auto">
                    powerful data transformations
                </p>
                <h2 className="center-text connector-h2-tight-margin">
                    True streaming SQL and
                </h2>
                <h2 className="center-text connector-h2-tight-margin">
                    javascript transformation
                </h2>
                <h2 className="center-text connector-h2-tight-margin">
                    directly in your warehouse
                </h2>
                <p className="connector-header-subtext">
                    Materialize views to your database or warehouse for greatly
                    reduced query costs
                </p>
                <div className="connectors-image-wrapper">
                    {isMobile ? (
                        <ConnectorsImageMobile />
                    ) : (
                        <ConnectorsImageDesktop />
                    )}
                </div>
            </div>

            <Connectors connectorType={connector_type} onlyCards />
        </>
    );
};
