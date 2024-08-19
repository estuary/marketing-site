import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { ProcessedPost } from '../components/BlogPostProcessor';
import Layout from '../components/Layout';
import { OutboundLink } from '../components/OutboundLink';
import Seo from '../components/seo';
import { estuaryHelpsYourTeam } from '../content/seo';
import CareerAvatar from '../svgs/about-careers-avatar-icon.svg';
import BenefitsIcon from '../svgs/about-careers-benefits-icon.svg';
import BuildingsIcon from '../svgs/about-careers-building.svg';
import CommunityIcon from '../svgs/about-careers-community-icon.svg';
import CultureIcon from '../svgs/about-careers-culture-icon.svg';
import EstuaryLogoSmall from '../svgs/estuary-logo-small.svg';
import FlowLogo from '../svgs/flow-logo.svg';
import LinkIcon from '../svgs/link-icon.svg';
import ContactUsForm from '../components/ContactUsForm';
import { LinkFilled } from '../globalStyles';

// const jobs = [
//     {
//         id: "soln",
//         title: "Solutions Engineer",
//         location: "New York, NY",
//         workEnvironment: "Hybrid or remote",
//         description:
//             "As Estuary’s first Solution Engineer, you will work directly with our founding team to help companies unlock the power of their real-time data. Working at the intersection of engineering, product and customers, your work will have a huge impact on Estuary’s product roadmap and help create a seamless experience for users. We’re looking for individuals with an insatiable curiosity for getting into the weeds of technical challenges and an empathetic approach to teaching others. A strong desire to work within a start-up environment without the constraints of large companies is imperative. You will be given the freedom and opportunity to chart your own path and take your career to the next level.",
//         responsibilities: [
//             "Focus on detailed use-cases to create a great end-to-end experience for customers.",
//             "Take a lead role in understanding user pain points to develop a strategic vision of our product roadmap.",
//             "Create internal documentation of technical requirements for prospective customers.",
//             "Engage in user-support channels for questions and issues raised by Flow users.",
//             "Provide technical support through independent investigation.",
//             "Act as a trusted conduit with customers and prospects in order to influence their data strategy.",
//             "Build a perspective on customer and market trends.",
//             "Communicate technical feature requests.",
//         ],
//         qualifications: [
//             "Bachelor’s degree in computer science, data science or related field or equivalent technical & business experience.",
//             "Exceptional written and verbal communication.",
//             "Strong interpersonal and relationship building skills.",
//             "Understand the value of balancing customer-centric thinking with technical know-how.",
//             "Foundational understanding and practical ability to code with two or more modern scripting languages (e.g. Python, SQL, node.js) and/or popular programming languages (e.g. C/C++, C#).",
//             "Experience working with both technical and non-technical stakeholders.",
//         ],
//     },
//     {
//         id: "dev-evang",
//         title: "Developer Evangelist",
//         location: "New York, NY; Columbus, OH",
//         workEnvironment: "Hybrid or remote",
//         description:
//             "As Estuary’s first Solution Engineer, you will work directly with our founding team to help companies unlock the power of their real-time data. Working at the intersection of engineering, product and customers, your work will have a huge impact on Estuary’s product roadmap and help create a seamless experience for users. We’re looking for individuals with an insatiable curiosity for getting into the weeds of technical challenges and an empathetic approach to teaching others. A strong desire to work within a start-up environment without the constraints of large companies is imperative. You will be given the freedom and opportunity to chart your own path and take your career to the next level.",
//         responsibilities: [
//             "Focus on detailed use-cases to create a great end-to-end experience for customers.",
//             "Take a lead role in understanding user pain points to develop a strategic vision of our product roadmap.",
//             "Create internal documentation of technical requirements for prospective customers.",
//             "Engage in user-support channels for questions and issues raised by Flow users.",
//             "Provide technical support through independent investigation.",
//             "Act as a trusted conduit with customers and prospects in order to influence their data strategy.",
//             "Build a perspective on customer and market trends.",
//             "Communicate technical feature requests.",
//         ],
//         qualifications: [
//             "Bachelor’s degree in computer science, data science or related field or equivalent technical & business experience.",
//             "Exceptional written and verbal communication.",
//             "Strong interpersonal and relationship building skills.",
//             "Understand the value of balancing customer-centric thinking with technical know-how.",
//             "Foundational understanding and practical ability to code with two or more modern scripting languages (e.g. Python, SQL, node.js) and/or popular programming languages (e.g. C/C++, C#).",
//             "Experience working with both technical and non-technical stakeholders.",
//         ],
//     },
// ]
// export const pageQuery = graphql`
//   query {

//   }
// `
const AboutPage = () => {
    const {
        allStrapiJobPosting: { nodes: jobs },
        allStrapiEmployee: { nodes: employees },
    } = useStaticQuery<{
        allStrapiJobPosting: {
            nodes: {
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
            }[];
        };
        allStrapiEmployee: {
            nodes: {
                name: string;
                ProfilePic: {
                    localFile: {
                        childImageSharp: {
                            gatsbyImageData: any;
                        };
                    };
                };
                title: string;
            }[];
        };
    }>(graphql`
        {
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
    `);

    return (
        <Layout>
            <div className="product-flow-section-one-background-image-wrapper">
                <div className="product-flow-section-one">
                    <div className="product-flow-section-one-left">
                        <h1 className="about-section-one-h1">
                            Estuary is building the next generation of real-time
                            data integration solutions.
                        </h1>
                        <p className="about-section-one-text">
                            We&apos;re creating a new kind of DataOps platform
                            that{' '}
                            <span className="about-text-bold">
                                empowers engineering teams
                            </span>{' '}
                            to build real-time, data-intensive pipelines and
                            applications at scale, with minimal friction, in a
                            UI or CLI. We aim to make real-time data accessible
                            to the analyst, while bringing power tooling to the
                            streaming enthusiast. Flow{' '}
                            <span className="about-text-bold">unifies</span> a
                            team&apos;s databases, pub/sub systems, and SaaS
                            around their data,{' '}
                            <span className="about-text-bold">
                                without requiring new investments in
                                infrastructure
                            </span>{' '}
                            or development.
                        </p>
                        <p className="about-section-one-text">
                            Estuary{' '}
                            <span className="about-text-bold">
                                develops in the open
                            </span>{' '}
                            to produce both the runtime for our managed service
                            and an ecosystem of open-source connectors. You can
                            read more about{' '}
                            <Link to="/the-estuary-story-and-guiding-principles/">
                                our story here.
                            </Link>
                        </p>
                    </div>
                    <div className="product-flow-section-one-right">
                        <FlowLogo className="product-flow-section-one-image" />
                    </div>
                </div>
            </div>
            <section className="about-history">
                <div className="history-wrap">
                    <div className="history-left">
                        <div className="image-heading">
                            9 years of real-time innovation
                        </div>
                        <div className="image-wrap">
                            <StaticImage
                                placeholder="none"
                                alt="Estuary history"
                                loading="lazy"
                                src="../images/timeline-img.png"
                                layout="constrained"
                                width={508}
                                height={526}
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className="history-right">
                        <p className="product-flow-section-two-header-small">
                            about us
                        </p>
                        <h2 className="about-section-header-top">History</h2>
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
            <section className="about-media">
                <div className="about-media-wrapper">
                    <p className="product-flow-section-two-header-small">
                        what’s happening
                    </p>
                    <h2 className="about-section-header-top">In the Media</h2>
                    <FlowLogo className="media-logo" />
                    <div className="media-wrap">
                        <div className="media-item">
                            <StaticImage
                                placeholder="none"
                                alt="Engineering podcast"
                                loading="lazy"
                                src="../images/engineering-podcast.png"
                                layout="constrained"
                                width={342}
                                height={179}
                                quality={100}
                            />
                            <div className="item-heading">
                                <OutboundLink
                                    target="_blank"
                                    href="https://podcasts.apple.com/us/podcast/data-engineering-podcast/id1193040557"
                                    aria-label="media item link"
                                >
                                    Data Engineering Podcast
                                </OutboundLink>
                            </div>
                            <div className="item-description">
                                Johnny, Dave, and Tobias discuss why we built
                                Gazette, the growth of streaming, and the rise
                                of the real-time data lake.
                            </div>
                        </div>
                        <div className="media-item">
                            <StaticImage
                                placeholder="none"
                                alt="FirstMark invests in Estuary"
                                loading="lazy"
                                src="../images/firstmark-estuary.png"
                                layout="constrained"
                                width={342}
                                height={179}
                                quality={100}
                            />
                            <div className="item-heading">
                                <OutboundLink
                                    target="_blank"
                                    href="https://venturebeat.com/business/how-estuary-helps-enterprises-harness-historical-and-real-time-data-pipelines/"
                                    aria-label="media item link"
                                >
                                    FirstMark invests in Estuary
                                </OutboundLink>
                            </div>
                            <div className="item-description">
                                Matt Turck of FirstMark announces their $7
                                million Series A investment in Estuary to
                                simplify streaming + batch unification.
                            </div>
                        </div>
                        <div className="media-item">
                            <StaticImage
                                placeholder="none"
                                alt="Data landscape"
                                loading="lazy"
                                src="../images/data-landscape.png"
                                layout="constrained"
                                width={342}
                                height={179}
                                quality={100}
                            />
                            <div className="item-heading">
                                <OutboundLink
                                    target="_blank"
                                    href="https://www.linkedin.com/feed/update/urn:li:activity:6980910741046382592/"
                                    aria-label="media item link"
                                >
                                    Real-Time Data Landscape
                                </OutboundLink>
                            </div>
                            <div className="item-description">
                                LinkedIn post from our Founder Dave Yaffe where
                                he (and 50+ others) chart out the evolving
                                ecosystem of real-time data integration players
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="meet-the-team">
                <p className="product-flow-section-two-header-small">
                    say hello
                </p>
                <h2 className="about-section-header-top">Meet Our Team</h2>
                <ul className="team-wrap">
                    {employees.map((employee, index) => (
                        <div className="team-item employee-list" key={index}>
                            <GatsbyImage
                                image={
                                    employee.ProfilePic.localFile
                                        .childImageSharp.gatsbyImageData
                                }
                                alt={`${employee.name} - ${employee.title}`}
                                className="employee-img"
                            />
                            <div className="item-name">{employee.name}</div>
                            <div className="item-position">
                                {employee.title}
                            </div>
                        </div>
                    ))}
                </ul>
            </section>
            <section className="investors">
                <h2 className="investors-heading">Our Investors</h2>
                <div className="investors-wrap">
                    <StaticImage
                        placeholder="none"
                        alt="Firstmark"
                        loading="lazy"
                        src="../images/firstmark-logo.png"
                        layout="constrained"
                        width={180}
                        height={48}
                        quality={100}
                    />
                    <StaticImage
                        placeholder="none"
                        alt="Operator"
                        loading="lazy"
                        src="../images/operator-logo.png"
                        layout="constrained"
                        width={180}
                        height={48}
                        quality={100}
                    />
                </div>
            </section>
            <div className="about-section-two">
                <div className="about-section-two-wrapper">
                    <p className="product-flow-section-two-header-small">
                        Come work with us
                    </p>
                    <h2 className="about-section-header">Careers</h2>
                    <FlowLogo className="about-flow-logo product-flow-section-one-image" />
                    <div className="about-careers-text-wrapper">
                        <div className="icon-wrapper-medium">
                            <CareerAvatar className="product-flow-section-two-gif" />
                        </div>

                        <p className="about-careers-text">
                            <span className="about-text-bold-regular">
                                About you
                            </span>
                            : You’re passionate about the complexities and
                            potential of our data-driven world, self-motivated,
                            curious, and adaptable.
                        </p>
                    </div>
                    <div className="about-careers-text-wrapper">
                        <div className="icon-wrapper-medium">
                            <EstuaryLogoSmall className="product-flow-section-two-gif" />
                        </div>
                        <p className="about-careers-text">
                            <span className="about-text-bold-regular">
                                About us
                            </span>
                            : We’re a rapidly growing, highly technical team
                            built by successful repeat founders that’s working
                            to take the friction out of data engineering.
                        </p>
                    </div>
                    <LinkFilled
                        className="about-current-openings-button"
                        href="#careers"
                    >
                        Current openings
                    </LinkFilled>
                </div>
            </div>
            <div className="about-section-three">
                <div className="about-section-three-wrapper">
                    <p className="product-flow-section-two-header-small">
                        What&apos;s it like
                    </p>
                    <div className="about-section-three-top">
                        <h2 className="about-section-header-top">
                            Working at Estuary
                        </h2>
                        <FlowLogo className="product-flow-section-one-image" />
                    </div>
                    <div className="about-section-three-card-wrapper">
                        <div className="about-section-three-card">
                            <div className="icon-wrapper-medium-gray">
                                <BuildingsIcon />
                            </div>
                            <p className="about-card-title">Location</p>
                            <p className="about-card-text">
                                We offer offices in both our New York City and
                                Columbus, Ohio locations, as well as the ability
                                to work remotely.
                            </p>
                        </div>
                        <div className="about-section-three-card">
                            <div className="icon-wrapper-medium-gray">
                                <BenefitsIcon />
                            </div>
                            <p className="about-card-title">Benefits</p>
                            <p className="about-card-text">
                                We provide 100% employee coverage on healthcare,
                                401k, competitive equity, and unlimited time
                                vacation leave.
                            </p>
                        </div>
                        <div className="about-section-three-card">
                            <div className="icon-wrapper-medium-gray">
                                <CultureIcon />
                            </div>
                            <p className="about-card-title">Culture</p>
                            <p className="about-card-text">
                                Like the product we build, our culture is
                                forward-thinking and open. Our team operates on
                                a foundation of trust, is resourceful,
                                collaborative, but also independent.
                            </p>
                        </div>
                        <div className="about-section-three-card">
                            <div className="icon-wrapper-medium-gray">
                                <CommunityIcon />
                            </div>
                            <p className="about-card-title">Community</p>
                            <p className="about-card-text">
                                We offer perks including team happy hours,
                                weekly lunches, and quarterly off-sites. With
                                our rapid growth, now’s an exciting time to come
                                aboard.
                            </p>
                        </div>
                    </div>
                    <p className="about-referral-text">
                        Know somebody who would be a good fit? We offer a $2,500
                        referral bonus.
                    </p>
                </div>
            </div>
            <div className="about-section-four-current-openings" id="careers">
                <div className="about-section-four-current-openings-wrapper">
                    <p className="product-flow-section-two-header-small">
                        Apply today
                    </p>
                    <h2 className="about-section-header-top">
                        Current Openings
                    </h2>
                    <div className="about-section-current-openings-wrapper">
                        <div className="about-current-openings-list">
                            {jobs.length > 0
                                ? jobs.map((job) => (
                                      <Link
                                          key={`${job.slug}-about-current-openings-list`}
                                          to={`#${job.slug}`}
                                          className="about-current-opening-title"
                                      >
                                          {job.title}
                                      </Link>
                                  ))
                                : null}
                            <LinkFilled
                                className="about-get-in-touch-button"
                                href="mailto:careers@estuary.dev"
                            >
                                Get in touch to apply
                            </LinkFilled>
                        </div>
                        <div className="about-current-openings-description-wrapper">
                            {jobs.length > 0
                                ? jobs.map((job) => (
                                      <div
                                          id={job.slug}
                                          key={`${job.slug}-about-current-openings-description-wrapper`}
                                      >
                                          <div className="about-current-openings-title-wrapper">
                                              <p className="about-opening-title">
                                                  {job.title}
                                              </p>
                                              <Link
                                                  to={`#${job.slug}`}
                                                  className="about-link"
                                              >
                                                  <LinkIcon />
                                              </Link>
                                          </div>
                                          <div className="about-current-openings-location-wrapper">
                                              <p className="about-opening-text">
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
                                              className="about-get-in-touch-button-mobile"
                                              href="mailto:careers@estuary.dev"
                                          >
                                              Get in touch to apply
                                          </LinkFilled>
                                          <div className="current-openings-divider" />
                                      </div>
                                  ))
                                : null}
                        </div>
                    </div>
                </div>
            </div>
            <ContactUsForm />
        </Layout>
    );
};

export const Head = () => {
    return <Seo title="About" description={estuaryHelpsYourTeam} />;
};

export default AboutPage;
