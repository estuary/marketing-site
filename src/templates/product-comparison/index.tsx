import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import clsx from 'clsx';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import SignUp from '../../components/Signup';
import { estuaryAllowsEnterprises } from '../../content/seo';
import EstuaryLogo from '../../svgs/colored-logo.svg';
import { dashboardRegisterUrl } from '../../../shared';
import { OutboundLinkFilled } from '../../components/OutboundLink';
import {
    heroSection,
    comparisonTable,
    ctaWrapSingle,
    comparisonToOthers,
    comparisonHeading,
    comparisonLinks,
    heroContainer,
    heroLeft,
    heroHeading,
    heroRight,
    heroImageWrap,
    heroLogo,
    tableHeading,
    tableRow,
    headingItem,
    featureName,
    estuaryValue,
    competitorValue,
    mattersValue,
    estuary,
    competitor,
    aboutUsWrapper,
    aboutWrap,
    aboutHeading,
    aboutSubheading,
    aboutContent,
    aboutLogo,
} from './styles.module.less';

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
            <div>
                <section className={heroSection}>
                    <div className={heroContainer}>
                        <div className={heroLeft}>
                            <div className={heroHeading}>
                                Estuary Flow
                                <br /> vs <br />
                                {competitorName}
                            </div>
                        </div>
                        <div className={heroRight}>
                            <EstuaryLogo className={clsx(heroLogo, estuary)} />
                            <span>VS</span>
                            <GatsbyImage
                                image={logoData.gatsbyImageData}
                                alt={`${competitorName} logo`}
                                className={clsx(heroLogo, competitor)}
                                loading="eager"
                            />
                        </div>
                    </div>
                    {DescriptivePicture ? (
                        <div className={heroImageWrap}>
                            <GatsbyImage
                                image={
                                    DescriptivePicture.localFile.childImageSharp
                                        .gatsbyImageData
                                }
                                alt={`ETL Tools Pricing Comparison: Estuary Flow vs. ${competitorName}`}
                                className={clsx(heroLogo, competitor)}
                                loading="eager"
                            />
                        </div>
                    ) : null}
                </section>
                <section className={comparisonTable}>
                    <div className={tableHeading}>
                        <div className={headingItem}>FEATURES</div>
                        <div className={headingItem}>ESTUARY</div>
                        <div className={headingItem}>{competitorName}</div>
                        <div className={headingItem}>Why it matters</div>
                    </div>
                    <div>
                        {comparisons.map((item, index) => {
                            return (
                                <div className={tableRow} key={index}>
                                    <div className={featureName}>
                                        {item.feature_name}
                                    </div>
                                    <div
                                        className={estuaryValue}
                                        dangerouslySetInnerHTML={{
                                            __html: `<div>ESTUARY</div>${item.our_feature_desc.data.our_feature_desc}`,
                                        }}
                                    />
                                    <div
                                        className={competitorValue}
                                        dangerouslySetInnerHTML={{
                                            __html: `<div>${competitorName}</div>${item.their_feature_desc.data.their_feature_desc}`,
                                        }}
                                    />
                                    <div
                                        className={mattersValue}
                                        dangerouslySetInnerHTML={{
                                            __html: `<div>WHY IT MATTERS</div>${item.why_it_matters.data.why_it_matters}`,
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <OutboundLinkFilled
                        className={ctaWrapSingle}
                        href={dashboardRegisterUrl}
                    >
                        Build a Pipeline
                    </OutboundLinkFilled>
                </section>
                <section className={comparisonToOthers}>
                    <div className={comparisonHeading}>
                        See how Estuary compares to others
                    </div>
                    <div className={comparisonLinks}>
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
                <div className={aboutUsWrapper}>
                    <div className={aboutWrap}>
                        <div className={aboutHeading}>About Estuary</div>
                        <div className={aboutSubheading}>
                            Estuary is building the next generation of real-time
                            data integration solutions.
                        </div>
                        <p className={aboutContent}>
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
                        <p className={aboutContent}>
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
                    <div className={aboutLogo}>
                        <EstuaryLogo />
                    </div>
                </div>
                <SignUp />
            </div>
        </Layout>
    );
};

export const Head = ({
    data: {
        thisPage: { their_name, MetaDescription },
    },
}) => {
    const title = `Estuary Vs ${their_name}`;

    const description = React.useMemo(() => {
        if (MetaDescription) {
            return MetaDescription;
        }

        return estuaryAllowsEnterprises;
    }, [MetaDescription]);

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
            MetaDescription
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
