import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import SignUp from '../components/signup';

import EstuaryLogo from '../svgs/colored-logo.svg';

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
    const [isMobile, setMobile] = React.useState(false);
    const checkIfMobile = () =>
        typeof window !== 'undefined' && window.innerWidth < 845
            ? setMobile(true)
            : setMobile(false);

    React.useEffect(() => {
        window.addEventListener('load', checkIfMobile, false);
        window.addEventListener('resize', checkIfMobile, false);

        return () => {
            window.removeEventListener('load', checkIfMobile, false);
            window.removeEventListener('resize', checkIfMobile, false);
        };
    }, []);

    return (
        <Layout headerTheme="light">
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
                                alt={`${competitorName} logo`}
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
                                            __html: isMobile
                                                ? `<div>ESTUARY</div>` +
                                                  `${item.our_feature_desc.data.our_feature_desc}`
                                                : item.our_feature_desc.data
                                                      .our_feature_desc,
                                        }}
                                    />
                                    <div
                                        className="competitor-value"
                                        dangerouslySetInnerHTML={{
                                            __html: isMobile
                                                ? `<div>${competitorName}</div>` +
                                                  `${item.their_feature_desc.data.their_feature_desc}`
                                                : item.their_feature_desc.data
                                                      .their_feature_desc,
                                        }}
                                    />
                                    <div
                                        className="matters-value"
                                        dangerouslySetInnerHTML={{
                                            __html: isMobile
                                                ? `<div>WHY IT MATTERS</div>` +
                                                  `${item.why_it_matters.data.why_it_matters}`
                                                : item.why_it_matters.data
                                                      .why_it_matters,
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </section>
                <div className="cta-wrap-single">
                    <a href="https://dashboard.estuary.dev/register">
                        Build a pipeline
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
                                            alt={`${competitorName} logo`}
                                            loading="eager"
                                        />
                                    </Link>
                                )
                            );
                        })}
                    </div>
                </section>
                <section className="about-estuary">
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
                </section>
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
    return (
        <Seo
            title={title}
            description="Estuary allows enterprises of any size to deploy true real-time pipelines that scale for high-volume use cases — without making difficult trade-offs or investing in complex infrastructure."
        />
    );
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
