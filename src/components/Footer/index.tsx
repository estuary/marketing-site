import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import clsx from 'clsx';
import GithubIcon from '../../svgs/github-outline.svg';
import LinkedinIcon from '../../svgs/linkedin-outline.svg';
import SlackIcon from '../../svgs/slack-outline.svg';
import TwitterIcon from '../../svgs/twitter-outline.svg';
import NewsletterSignupForm from '../NewsletterSignupForm';
import {
    docsPageUrl,
    estuaryFlowGithubUrl,
    estuaryLinkedinUrl,
    slackUrl,
    statusPageUrl,
    webinarsUrl,
} from '../../../shared';
import ButtonOutlinedPrimary from '../LinksAndButtons/ButtonOutlinedPrimary';
import OutboundLink from '../LinksAndButtons/OutboundLink';
import {
    footer,
    globalFooterWrapper,
    globalFooterLogoLink,
    globalFooterTitle,
    globalFooterSubtext,
    globalFooterSubtextTitle,
    globalFooterRight,
    globalFooterRightLinkWrapper,
    globalFooterBottom,
    globalFooterDivider,
    globalFooterBottomWrapper,
    globalFooterBottomCopyright,
    globalFooterBottomCopyrightText,
    globalFooterCopyrightLink,
    globalFooterBottomSocial,
    socialIconFooter,
} from './styles.module.less';
import FooterLink from './FooterLink';

const footerSocialIconStyle = clsx(socialIconFooter, 'socialIcon');

const openCookiePreferences = () => {
    try {
        // @ts-expect-error : This loads through CookieFirst. Once homepage changes are merged we add to the window type
        window.cookiefirst_show_settings();
    } catch (e) {
        // TODO: Treat this error another way replacing the alert()
        // eslint-disable-next-line no-alert
        alert(
            'Failed to open Cookie Preferences. Please ensure CookieFirst loaded.'
        );
    }
};

const Footer = () => {
    return (
        <footer className={footer}>
            <div className={globalFooterWrapper}>
                <div>
                    <Link className={globalFooterLogoLink} to="/">
                        <StaticImage
                            src="../../images/estuary-icon.png"
                            alt="Estuary logo"
                            width={27}
                            height={35}
                            layout="fixed"
                            placeholder="none"
                        />
                        <strong className={globalFooterTitle}>ESTUARY</strong>
                    </Link>
                    <p className={globalFooterSubtext}>
                        Estuary provides real-time data integration and ETL for
                        modern data pipelines. Build scalable, fault-tolerant
                        streaming data pipelines that seamlessly connect to
                        virtually any data source for data warehouses, real-time
                        analytics, operations, machine learning, and AI.
                    </p>
                    <div>
                        <strong className={globalFooterSubtextTitle}>
                            Don&apos;t miss a thing
                        </strong>
                        <p className={globalFooterSubtext}>
                            Subscribe now to get the latest news and updates.
                        </p>
                    </div>
                    <NewsletterSignupForm />
                </div>
                <div className={globalFooterRight}>
                    <div className={globalFooterRightLinkWrapper}>
                        <p className={globalFooterSubtextTitle}>Product</p>
                        <FooterLink
                            to="/product/"
                            ariaLabel="Learn more about Estuary Flow product"
                        >
                            Estuary Flow
                        </FooterLink>
                        <FooterLink
                            to="/integrations/"
                            ariaLabel="Explore Estuary Flow's real-time data integration connectors"
                        >
                            Connectors
                        </FooterLink>
                        <FooterLink
                            to="/pricing/"
                            ariaLabel="Know more about Estuary Flow pricing"
                        >
                            Pricing
                        </FooterLink>
                        <FooterLink
                            to="/why/"
                            ariaLabel="Explore a tour of Estuary Flow"
                        >
                            Product Tour
                        </FooterLink>
                        <FooterLink to="/etl-tools/estuary-vs-fivetran/">
                            Estuary vs Fivetran
                        </FooterLink>
                        <FooterLink to="/etl-tools/airbyte-vs-estuary/">
                            Estuary vs Airbyte
                        </FooterLink>
                        <FooterLink to="/etl-tools/confluent-vs-estuary/">
                            Estuary vs Confluent
                        </FooterLink>
                        <FooterLink to="/pricing/#pricing-calculator">
                            Data Pipeline Cost Calculator
                        </FooterLink>
                    </div>
                    <div className={globalFooterRightLinkWrapper}>
                        <p className={globalFooterSubtextTitle}>Resources</p>
                        <FooterLink
                            to={docsPageUrl}
                            ariaLabel="Explore the documentation about Estuary Flow"
                        >
                            Documentation
                        </FooterLink>
                        <FooterLink
                            to="/blog"
                            ariaLabel="Learn more about Estuary and its related technologies, directly from our team."
                        >
                            Blogs
                        </FooterLink>
                        <FooterLink
                            to="/company-updates/"
                            ariaLabel="Explore Estuary and Flow updates."
                        >
                            Company Updates
                        </FooterLink>
                        <FooterLink
                            to="/blog/tutorial/"
                            ariaLabel="Explore blog posts with tutorials"
                        >
                            Tutorials
                        </FooterLink>
                        <FooterLink
                            to="/blog/data-engineering/"
                            ariaLabel="Explore blog posts about data engineering"
                        >
                            Data Engineering
                        </FooterLink>
                        <FooterLink
                            to={webinarsUrl}
                            ariaLabel="See the last Estuary webinars"
                        >
                            Webinar
                        </FooterLink>
                        <FooterLink
                            to={estuaryFlowGithubUrl}
                            ariaLabel="Check the Estuary Flow Github"
                        >
                            Github
                        </FooterLink>
                        <FooterLink to="/etl-tools/">
                            Compare ETL/ELT Tools
                        </FooterLink>
                        <FooterLink to="/etl-tools-list/">
                            Top ETL Tools
                        </FooterLink>
                        <FooterLink to="/customers/">Customers</FooterLink>
                    </div>
                    <div className={globalFooterRightLinkWrapper}>
                        <p className={globalFooterSubtextTitle}>Company</p>
                        <FooterLink
                            to="/about/"
                            ariaLabel="Learn more about Estuary and the team"
                        >
                            About Us
                        </FooterLink>
                        <FooterLink
                            to="/about#careers"
                            ariaLabel="Check out the current career opportunities at Estuary"
                        >
                            Careers
                        </FooterLink>
                        <FooterLink to="/contact-us/">Contact Us</FooterLink>
                        <FooterLink to="/privacy-policy/">Privacy</FooterLink>
                        <FooterLink to="/terms/">Terms</FooterLink>
                        <FooterLink
                            to={statusPageUrl}
                            ariaLabel="Check the status of Estuary website"
                        >
                            Status
                        </FooterLink>
                    </div>
                </div>
            </div>
            <div className={globalFooterBottom}>
                <ButtonOutlinedPrimary onClick={openCookiePreferences}>
                    Manage Cookie Preferences
                </ButtonOutlinedPrimary>
                <hr className={globalFooterDivider} />
                <div className={globalFooterBottomWrapper}>
                    <div className={globalFooterBottomCopyright}>
                        <span className={globalFooterBottomCopyrightText}>
                            © {new Date().getFullYear()} All Rights Reserved
                            -&nbsp;{' '}
                        </span>
                        <OutboundLink
                            className={globalFooterCopyrightLink}
                            href="https://estuary.dev/"
                        >
                            estuary.dev
                        </OutboundLink>
                    </div>

                    <div className={globalFooterBottomSocial}>
                        <OutboundLink
                            target="_blank"
                            href={slackUrl}
                            aria-label="Slack Invite Link"
                        >
                            <SlackIcon className={footerSocialIconStyle} />
                        </OutboundLink>
                        <OutboundLink
                            target="_blank"
                            href={estuaryFlowGithubUrl}
                            aria-label="Github Repo Link"
                        >
                            <GithubIcon className={footerSocialIconStyle} />
                        </OutboundLink>
                        <OutboundLink
                            target="_blank"
                            href={estuaryLinkedinUrl}
                            aria-label="Linkedin Company Link"
                        >
                            <LinkedinIcon className={footerSocialIconStyle} />
                        </OutboundLink>
                        <OutboundLink
                            target="_blank"
                            href="https://twitter.com/EstuaryDev"
                            aria-label="Twitter Company Link"
                        >
                            <TwitterIcon className={footerSocialIconStyle} />
                        </OutboundLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
