import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import SignUp from '../components/signup';

import { estuaryAllowsEnterprises } from '../content/seo';
import { globalMaxWidth, sectionTopBottomPadding } from '../globalStyles';
import EstuaryLogo from '../svgs/colored-logo.svg';

export const AboutUsWrapper = styled.div`
    ${globalMaxWidth}
    ${sectionTopBottomPadding}
    font-style: normal;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    .about-wrap {
        width: 70%;
        @media (max-width: 1260px) {
            width: 100%;
        }
    }
    .about-logo {
        display: flex;
        margin: auto;
        max-width: 150px;
        width: 30%;
        @media (max-width: 845px) {
            display: none;
            visbility: hidden;
        }
    }
    .about-heading {
        font-weight: 500;
        font-size: 36px;
        line-height: 48px;
        color: #04192b;
        margin-bottom: 24px;
        @media (max-width: 845px) {
            font-size: 28px;
            line-height: 36px;
        }
    }
    .about-subheading {
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        color: #04192b;
        margin-bottom: 12px;
        @media (max-width: 845px) {
            font-size: 18px;
            line-height: 26px;
        }
    }
    .about-content {
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #47506d;
        margin-bottom: 20px;
        @media (max-width: 845px) {
            font-size: 14px;
            line-height: 22px;
        }
        &:last-child {
            margin-bottom: 0;
        }
        a {
            color: #47506d;
            text-decoration: underline;
        }
    }
`;

const ComparisonPageTemplate = ({
    data: {
        thisPage: {
            their_name: competitorName,
            logo: {
                localFile: { childImageSharp: logoData },
            },
            DescriptivePicture,
            comparisons,
        },
        allPages: { nodes: allPages },
    },
}) => {
    return (
        <Layout>
            <div className="lp-comparison-wrap">
                <section className="hero-section">
                    <div className="hero-container">
                        <div className="hero-left">
                            <div className="hero-heading">
                                Estuary Flow
                                <br /> vs <br />
                                {competitorName}
                            </div>
                        </div>
                        <div className="hero-right">
                            <EstuaryLogo className="hero-logo estuary" />
                            <span>VS</span>
                            <GatsbyImage
                                image={logoData.gatsbyImageData}
                                alt={`${competitorName} logo`}
                                className="hero-logo competitor"
                                loading="eager"
                            />
                        </div>
                    </div>
                    {DescriptivePicture ? (
                        <div className="hero-image-wrap">
                            <GatsbyImage
                                image={
                                    DescriptivePicture.localFile.childImageSharp
                                        .gatsbyImageData
                                }
                                alt={`ETL Tools Pricing Comparison: Estuary Flow vs. ${competitorName}`}
                                className="hero-logo competitor"
                                loading="eager"
                            />
                        </div>
                    ) : null}
                </section>
                <section className="comparison-table">
                    <div className="table-heading">
                        <div className="heading-item">FEATURES</div>
                        <div className="heading-item">ESTUARY</div>
                        <div className="heading-item">{competitorName}</div>
                        <div className="heading-item">Why it matters</div>
                    </div>
                    <div className="table-data">
                        {comparisons.map((item, index) => {
                            return (
                                <div className="table-row" key={index}>
                                    <div className="feature-name">
                                        {item.feature_name}
                                    </div>
                                    <div
                                        className="estuary-value"
                                        dangerouslySetInnerHTML={{
                                            __html: `<div>ESTUARY</div>${item.our_feature_desc.data.our_feature_desc}`,
                                        }}
                                    />
                                    <div
                                        className="competitor-value"
                                        dangerouslySetInnerHTML={{
                                            __html: `<div>${competitorName}</div>${item.their_feature_desc.data.their_feature_desc}`,
                                        }}
                                    />
                                    <div
                                        className="matters-value"
                                        dangerouslySetInnerHTML={{
                                            __html: `<div>WHY IT MATTERS</div>${item.why_it_matters.data.why_it_matters}`,
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </section>
                <div className="cta-wrap-single">
                    <a href="https://dashboard.estuary.dev/register">
                        Build a Pipeline
                    </a>
                </div>
                <section className="comparison-to-others">
                    <div className="comparison-heading">
                        See how Estuary compares to others
                    </div>
                    <div className="comparison-links">
                        {allPages.map((item, index) => {
                            return (
                                item.their_name !== competitorName && (
                                    <Link to={`/${item.Slug}`} key={index}>
                                        <GatsbyImage
                                            image={
                                                item.Picture.localFile
                                                    .childImageSharp
                                                    .gatsbyImageData
                                            }
                                            alt={`${item.their_name} logo`}
                                            loading="eager"
                                        />
                                    </Link>
                                )
                            );
                        })}
                    </div>
                </section>
                <AboutUsWrapper>
                    <div className="about-wrap">
                        <div className="about-heading">About Estuary</div>
                        <div className="about-subheading">
                            Estuary is building the next generation of real-time
                            data integration solutions.
                        </div>
                        <p className="about-content">
                            We&apos;re creating a new kind of DataOps platform
                            that
                            <b>empowers data teams</b> to build{' '}
                            <b>real-time,</b>
                            data-intensive pipelines and applications, at scale,
                            <b>with minimal friction,</b> in a <b>UI or CLI</b>.
                            We aim to make real-time data{' '}
                            <b>accessible to the analyst</b>, while bringing
                            power tooling to the streaming enthusiast. Flow{' '}
                            <b>unifies</b> a team&apos;s databases, pub/sub
                            systems, and SaaS around their data, without
                            requiring new investments in infrastructure or
                            development.
                        </p>
                        <p className="about-content">
                            Estuary <b>develops in the open</b> to produce both
                            the runtime for our managed service and an ecosystem
                            of
                            <b>open-source</b> connectors. You can read more
                            about{' '}
                            <Link to="/the-estuary-story-and-guiding-principles">
                                our story here.
                            </Link>
                        </p>
                    </div>
                    <div className="about-logo">
                        <EstuaryLogo />
                    </div>
                </AboutUsWrapper>
                <SignUp />
            </div>
        </Layout>
    );
};

export const Head = ({
    data: {
        thisPage: { their_name },
    },
}) => {
    const title = `Estuary Vs ${their_name}`;

    // This can be removed once https://github.com/estuary/strapi-admin/pull/13 is merged and
    //  we switch to using the MetaDescription coming from Strapi. Should still leave the fallback
    //  of estuaryAllowsEnterprises just to be safe
    const description = React.useMemo(() => {
        switch (their_name) {
            case 'Fivetran':
                return `Compare Estuary and Fivetran to optimize your data pipeline effectively. Assess Estuary's strengths in integration and flexibility against Fivetran's offerings.`;

            case 'Airbyte':
                return `Discover why Estuary excels compared to Airbyte in data integration. Explore features, scalability, and reliability to streamline your data management effortlessly.`;

            case 'Confluent':
                return `Discover why Estuary stands out compared to Confluent. Compare features, scalability, and ecosystem support to find the ideal streaming data platform for your needs.`;

            case 'Debezium':
                return `Discover why Estuary is the preferred choice over Debezium for change data capture. Compare features, performance, and integration capabilities to optimize your data streaming strategy.`;

            default:
                return estuaryAllowsEnterprises;
        }
    }, [their_name]);

    return <Seo title={title} description={description} />;
};

export const pageQuery = graphql`
    query ComparisonData($id: String!) {
        allPages: allStrapiProductComparisonPage {
            nodes {
                Slug
                their_name
                Picture {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(quality: 95, layout: CONSTRAINED)
                        }
                    }
                }
            }
        }
        thisPage: strapiProductComparisonPage(id: { eq: $id }) {
            Slug
            their_name
            logo {
                localFile {
                    childImageSharp {
                        gatsbyImageData(quality: 95, layout: CONSTRAINED)
                    }
                }
            }
            id
            comparisons {
                feature_name
                our_feature_desc {
                    data {
                        our_feature_desc
                    }
                }
                their_feature_desc {
                    data {
                        their_feature_desc
                    }
                }
                why_it_matters {
                    data {
                        why_it_matters
                    }
                }
            }
            DescriptivePicture {
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                            quality: 100
                            layout: CONSTRAINED
                            height: 400
                        )
                    }
                }
            }
        }
    }
`;

export default ComparisonPageTemplate;
