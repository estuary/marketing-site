import React from 'react';
import { graphql, Link } from 'gatsby';
import {
    GatsbyImage,
    IGatsbyImageData,
    StaticImage,
} from 'gatsby-plugin-image';
import { ProcessedPost } from '../../components/BlogPostProcessor';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import { estuaryHelpsYourTeam } from '../../content/seo';
import CareerAvatar from '../../svgs/about-careers-avatar-icon.svg';
import BenefitsIcon from '../../svgs/about-careers-benefits-icon.svg';
import BuildingsIcon from '../../svgs/about-careers-building.svg';
import CommunityIcon from '../../svgs/about-careers-community-icon.svg';
import CultureIcon from '../../svgs/about-careers-culture-icon.svg';
import EstuaryLogoSmall from '../../svgs/estuary-logo-small.svg';
import FlowLogo from '../../svgs/flow-logo.svg';
import LinkIcon from '../../svgs/link-icon.svg';
import ContactUsForm from '../../components/ContactUsForm';
import FlowLogoVector from '../../components/FlowLogoVector';
import OutboundLink from '../../components/LinksAndButtons/OutboundLink';
import LinkFilled from '../../components/LinksAndButtons/LinkFilled';
import OrganizationScript from '../../components/OrganizationScript';
import {
    sectionOne,
    sectionOneBackgroundImageWrapper,
    sectionOneLeft,
    preTitle,
    sectionTwoGif,
    iconWrapperMedium,
    iconWrapperMediumGray,
    sectionTwo,
    sectionTwoWrapper,
    flowLogo,
    sectionHeader,
    cardText,
    currentOpeningsButton,
    textBoldRegular,
    careersTextWrapper,
    sectionThree,
    sectionThreeWrapper,
    sectionTitle,
    sectionThreeTop,
    sectionThreeCardWapper,
    sectionThreeCard,
    cardTitle,
    referralText,
    sectionFourCurrentOpenings,
    sectionFourCurrentOpeningsWrapper,
    currentOpeningsList,
    currentOpeningTitle,
    getInTouchButton,
    currentOpeningsDescriptionWrapper,
    currentOpeningsTitleWrapper,
    sectionCurrentOpeningsWrapper,
    currentOpeningsLocationWrapper,
    link,
    currentOpeningsDivider,
    getInTouchButtonMobile,
    history,
    historyWrap,
    historyLeft,
    historyRight,
    media,
    mediaWrapper,
    mediaLogo,
    mediaWrap,
    mediaItem,
    itemHeading,
    itemDescription,
    investors,
    investorsWrap,
    meetTheTeam,
    teamItem,
    employeeImg,
    itemName,
    itemPosition,
} from './styles.module.less';

type AboutPageData = {
    site: {
        siteMetadata: {
            siteName: string;
            siteUrl: string;
        };
    };
    allStrapiJobPosting: {
        nodes: Array<{
            slug: string;
            title: string;
            location: string;
            description: {
                data: {
                    childHtmlRehype: {
                        html: string;
                    };
                };
            };
        }>;
    };
    allStrapiEmployee: {
        nodes: Array<{
            name: string;
            title: string;
            ProfilePic: {
                localFile: {
                    childImageSharp: {
                        gatsbyImageData: IGatsbyImageData;
                    };
                };
            };
        }>;
    };
};

type AboutPageProps = {
    data: AboutPageData;
};

const companyAge = new Date().getFullYear() - 2014;

const AboutPage = ({ data }: AboutPageProps) => {
    const {
        allStrapiJobPosting: { nodes: jobs },
        allStrapiEmployee: { nodes: employees },
    } = data;

    return (
        <Layout>
            <section className={sectionOneBackgroundImageWrapper}>
                <div className={sectionOne}>
                    <div className={sectionOneLeft}>
                        <h1>
                            Estuary is building the next generation of real-time
                            data integration solutions.
                        </h1>
                        <p>
                            We&apos;re creating a new kind of DataOps platform
                            that <span>empowers engineering teams</span> to
                            build real-time, data-intensive pipelines and
                            applications at scale, with minimal friction, in a
                            UI or CLI. We aim to make real-time data accessible
                            to the analyst, while bringing power tooling to the
                            streaming enthusiast. Flow <span>unifies</span> a
                            team&apos;s databases, pub/sub systems, and SaaS
                            around their data,{' '}
                            <span>
                                without requiring new investments in
                                infrastructure
                            </span>{' '}
                            or development.
                        </p>
                        <p>
                            Estuary <span>develops in the open</span> to produce
                            both the runtime for our managed service and an
                            ecosystem of open-source connectors. You can read
                            more about{' '}
                            <Link to="/the-estuary-story-and-guiding-principles/">
                                our story here.
                            </Link>
                        </p>
                    </div>
                    <FlowLogoVector />
                </div>
            </section>
            <section className={history}>
                <div className={historyWrap}>
                    <div className={historyLeft}>
                        <span>{companyAge} years of real-time innovation</span>
                        <StaticImage
                            placeholder="none"
                            alt="Estuary history"
                            src="../../images/timeline-img.png"
                            width={508}
                            height={526}
                            quality={100}
                        />
                    </div>
                    <div className={historyRight}>
                        <span className={preTitle}>ABOUT US</span>
                        <h2 className={sectionTitle}>History</h2>
                        <p>
                            We didn&apos;t start at trying to make real-time
                            data flows more accessible by abstracting away the
                            low-level work… it is just what happened.
                        </p>
                        <p>
                            Our team researched streaming frameworks while
                            working with billions of daily events, and
                            ultimately realized that we&apos;d have to build our
                            own (
                            <a href="https://gazette.readthedocs.io/en/latest/">
                                Gazette
                            </a>
                            ) to have a scalable distributed streaming framework
                            that is built with kappa architectures in mind,
                            required less continuous resource management, and
                            could unify both our batch and real-time pipelines.
                        </p>
                        <p>
                            We&apos;ve been innovating to make real-time data
                            more accessible to all ever since.
                        </p>
                    </div>
                </div>
            </section>
            <section className={media}>
                <div className={mediaWrapper}>
                    <span className={preTitle}>WHAT&apos;S HAPPENING</span>
                    <h2 className={sectionTitle}>In the Media</h2>
                    <FlowLogo className={mediaLogo} />
                    <div className={mediaWrap}>
                        <div className={mediaItem}>
                            <StaticImage
                                placeholder="none"
                                alt="Engineering podcast"
                                src="../../images/engineering-podcast.png"
                                width={342}
                                height={179}
                                quality={100}
                            />
                            <div className={itemHeading}>
                                <OutboundLink
                                    target="_blank"
                                    href="https://podcasts.apple.com/us/podcast/data-engineering-podcast/id1193040557"
                                    aria-label="media item link"
                                >
                                    Data Engineering Podcast
                                </OutboundLink>
                            </div>
                            <div className={itemDescription}>
                                Johnny, Dave, and Tobias discuss why we built
                                Gazette, the growth of streaming, and the rise
                                of the real-time data lake.
                            </div>
                        </div>
                        <div className={mediaItem}>
                            <StaticImage
                                placeholder="none"
                                alt="FirstMark invests in Estuary"
                                src="../../images/firstmark-estuary.png"
                                width={342}
                                height={179}
                                quality={100}
                            />
                            <div className={itemHeading}>
                                <OutboundLink
                                    target="_blank"
                                    href="https://venturebeat.com/business/how-estuary-helps-enterprises-harness-historical-and-real-time-data-pipelines/"
                                    aria-label="media item link"
                                >
                                    FirstMark invests in Estuary
                                </OutboundLink>
                            </div>
                            <div className={itemDescription}>
                                Matt Turck of FirstMark announces their $7
                                million Series A investment in Estuary to
                                simplify streaming + batch unification.
                            </div>
                        </div>
                        <div className={mediaItem}>
                            <StaticImage
                                placeholder="none"
                                alt="Data landscape"
                                src="../../images/data-landscape.png"
                                width={342}
                                height={179}
                                quality={100}
                            />
                            <div className={itemHeading}>
                                <OutboundLink
                                    target="_blank"
                                    href="https://www.linkedin.com/feed/update/urn:li:activity:6980910741046382592/"
                                    aria-label="media item link"
                                >
                                    Real-Time Data Landscape
                                </OutboundLink>
                            </div>
                            <div className={itemDescription}>
                                LinkedIn post from our Founder Dave Yaffe where
                                he (and 50+ others) chart out the evolving
                                ecosystem of real-time data integration players
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={meetTheTeam}>
                <span className={preTitle}>SAY HELLO</span>
                <h2 className={sectionTitle}>Meet Our Team</h2>
                <ul>
                    {employees.map((employee, index) => (
                        <div className={teamItem} key={index}>
                            <GatsbyImage
                                image={
                                    employee.ProfilePic.localFile
                                        .childImageSharp.gatsbyImageData
                                }
                                alt={`${employee.name} - ${employee.title}`}
                                className={employeeImg}
                            />
                            <div className={itemName}>{employee.name}</div>
                            <div className={itemPosition}>{employee.title}</div>
                        </div>
                    ))}
                </ul>
            </section>
            <section className={investors}>
                <h2 className={sectionTitle}>Our Investors</h2>
                <div className={investorsWrap}>
                    <StaticImage
                        placeholder="none"
                        alt="Firstmark"
                        src="../../images/firstmark-logo.png"
                        width={180}
                        height={48}
                        quality={100}
                    />
                    <StaticImage
                        placeholder="none"
                        alt="Operator"
                        src="../../images/operator-logo.png"
                        width={180}
                        height={48}
                        quality={100}
                    />
                </div>
            </section>
            <section className={sectionTwo}>
                <div className={sectionTwoWrapper}>
                    <span className={preTitle}>COME WORK WITH US</span>
                    <h2 className={sectionHeader}>Careers</h2>
                    <div className={flowLogo}>
                        <FlowLogoVector />
                    </div>
                    <div className={careersTextWrapper}>
                        <div className={iconWrapperMedium}>
                            <CareerAvatar className={sectionTwoGif} />
                        </div>
                        <p>
                            <span className={textBoldRegular}>About you</span>:
                            You&apos;re passionate about the complexities and
                            potential of our data-driven world, self-motivated,
                            curious, and adaptable.
                        </p>
                    </div>
                    <div className={careersTextWrapper}>
                        <div className={iconWrapperMedium}>
                            <EstuaryLogoSmall className={sectionTwoGif} />
                        </div>
                        <p>
                            <span className={textBoldRegular}>About us</span>:
                            We&apos;re a rapidly growing, highly technical team
                            built by successful repeat founders that&apos;s
                            working to take the friction out of data
                            engineering.
                        </p>
                    </div>
                    <LinkFilled
                        className={currentOpeningsButton}
                        href="#careers"
                    >
                        Current openings
                    </LinkFilled>
                </div>
            </section>
            <section className={sectionThree}>
                <div className={sectionThreeWrapper}>
                    <span className={preTitle}>WHAT&apos;S IT LIKE</span>
                    <div className={sectionThreeTop}>
                        <h2 className={sectionTitle}>Working at Estuary</h2>
                        <FlowLogoVector />
                    </div>
                    <div className={sectionThreeCardWapper}>
                        <div className={sectionThreeCard}>
                            <div className={iconWrapperMediumGray}>
                                <BuildingsIcon />
                            </div>
                            <p className={cardTitle}>Location</p>
                            <p className={cardText}>
                                We offer offices in both our New York City and
                                Columbus, Ohio locations, as well as the ability
                                to work remotely.
                            </p>
                        </div>
                        <div className={sectionThreeCard}>
                            <div className={iconWrapperMediumGray}>
                                <BenefitsIcon />
                            </div>
                            <p className={cardTitle}>Benefits</p>
                            <p className={cardText}>
                                We provide 100% employee coverage on healthcare,
                                401k, competitive equity, and unlimited time
                                vacation leave.
                            </p>
                        </div>
                        <div className={sectionThreeCard}>
                            <div className={iconWrapperMediumGray}>
                                <CultureIcon />
                            </div>
                            <p className={cardTitle}>Culture</p>
                            <p className={cardText}>
                                Like the product we build, our culture is
                                forward-thinking and open. Our team operates on
                                a foundation of trust, is resourceful,
                                collaborative, but also independent.
                            </p>
                        </div>
                        <div className={sectionThreeCard}>
                            <div className={iconWrapperMediumGray}>
                                <CommunityIcon />
                            </div>
                            <p className={cardTitle}>Community</p>
                            <p className={cardText}>
                                We offer perks including team happy hours,
                                weekly lunches, and quarterly off-sites. With
                                our rapid growth, now&apos;s an exciting time to
                                come aboard.
                            </p>
                        </div>
                    </div>
                    <p className={referralText}>
                        Know somebody who would be a good fit? We offer a $2,500
                        referral bonus.
                    </p>
                </div>
            </section>
            <section className={sectionFourCurrentOpenings} id="careers">
                <div className={sectionFourCurrentOpeningsWrapper}>
                    <span className={preTitle}>APPLY TODAY</span>
                    <h2 className={sectionTitle}>Current Openings</h2>
                    <div className={sectionCurrentOpeningsWrapper}>
                        <div className={currentOpeningsList}>
                            {jobs.length > 0
                                ? jobs.map((job) => (
                                      <Link
                                          key={`${job.slug}-about-current-openings-list`}
                                          to={`#${job.slug}`}
                                          className={currentOpeningTitle}
                                      >
                                          {job.title}
                                      </Link>
                                  ))
                                : null}
                            <LinkFilled
                                className={getInTouchButton}
                                href="mailto:careers@estuary.dev"
                            >
                                Get in touch to apply
                            </LinkFilled>
                        </div>
                        <div className={currentOpeningsDescriptionWrapper}>
                            {jobs.length > 0
                                ? jobs.map((job) => (
                                      <div
                                          id={job.slug}
                                          key={`${job.slug}-about-current-openings-description-wrapper`}
                                      >
                                          <div
                                              className={
                                                  currentOpeningsTitleWrapper
                                              }
                                          >
                                              <p>{job.title}</p>
                                              <Link
                                                  to={`#${job.slug}`}
                                                  className={link}
                                              >
                                                  <LinkIcon />
                                              </Link>
                                          </div>
                                          <div
                                              className={
                                                  currentOpeningsLocationWrapper
                                              }
                                          >
                                              <p>
                                                  Location:{' '}
                                                  <b>{job.location}</b>
                                              </p>
                                          </div>
                                          <ProcessedPost
                                              body={
                                                  job.description.data
                                                      .childHtmlRehype.html
                                              }
                                          />
                                          <LinkFilled
                                              className={getInTouchButtonMobile}
                                              href="mailto:careers@estuary.dev"
                                          >
                                              Get in touch to apply
                                          </LinkFilled>
                                          <div
                                              className={currentOpeningsDivider}
                                          />
                                      </div>
                                  ))
                                : null}
                        </div>
                    </div>
                </div>
                <ContactUsForm titleHeadingLevel="h3" />
            </section>
        </Layout>
    );
};

export default AboutPage;

export const Head = ({ data }: AboutPageProps) => {
    const { site } = data;
    return (
        <Seo title="About" description={estuaryHelpsYourTeam}>
            <OrganizationScript site={site} />
        </Seo>
    );
};

export const query = graphql`
    query AboutPageQuery {
        site {
            siteMetadata {
                siteName
                siteUrl
            }
        }
        allStrapiJobPosting {
            nodes {
                slug
                title: Title
                location: Location
                description: Description {
                    data {
                        childHtmlRehype {
                            html
                        }
                    }
                }
            }
        }
        allStrapiEmployee {
            nodes {
                name: Name
                title: Title
                ProfilePic {
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    }
`;
