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
    slackUrl,
    statusPageUrl,
    webinarsUrl,
} from '../../../shared';
import OutboundLink from '../LinksAndButtons/OutboundLink';
import ButtonOutlinedPrimary from '../LinksAndButtons/ButtonOutlinedPrimary';
import {
    footer,
    globalFooterWrapper,
    globalFooterLogoLink,
    globalFooterTitle,
    globalFooterSubtext,
    globalFooterSubtextTitle,
    globalFooterRight,
    globalFooterRightLinkWrapper,
    globalFooterRightLink,
    globalFooterBottom,
    globalFooterDivider,
    globalFooterBottomWrapper,
    globalFooterBottomCopyright,
    globalFooterBottomCopyrightText,
    globalFooterCopyrightLink,
    globalFooterBottomSocial,
    socialIconFooter,
} from './styles.module.less';

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
                        <Link to="/product/" className={globalFooterRightLink}>
                            Estuary Flow
                        </Link>
                        <Link
                            to="/integrations/"
                            className={globalFooterRightLink}
                        >
                            Connectors
                        </Link>
                        <Link to="/pricing/" className={globalFooterRightLink}>
                            Pricing
                        </Link>
                        <Link to="/why/" className={globalFooterRightLink}>
                            Product Tour
                        </Link>
                        <Link
                            to="/etl-tools/estuary-vs-fivetran/"
                            className={globalFooterRightLink}
                        >
                            Estuary vs Fivetran
                        </Link>
                        <Link
                            to="/etl-tools/airbyte-vs-estuary/"
                            className={globalFooterRightLink}
                        >
                            Estuary vs Airbyte
                        </Link>
                        <Link
                            to="/etl-tools/confluent-vs-estuary/"
                            className={globalFooterRightLink}
                        >
                            Estuary vs Confluent
                        </Link>
                        <Link
                            to="/pricing/#pricing-calculator"
                            className={globalFooterRightLink}
                        >
                            Data Pipeline Cost Calculator
                        </Link>
                    </div>
                    <div className={globalFooterRightLinkWrapper}>
                        <p className={globalFooterSubtextTitle}>Resources</p>
                        <OutboundLink
                            target="_blank"
                            href={docsPageUrl}
                            className={globalFooterRightLink}
                        >
                            Documentation
                        </OutboundLink>
                        <Link to="/blog" className={globalFooterRightLink}>
                            Blogs
                        </Link>
                        <Link
                            to="/blog/tutorial/"
                            className={globalFooterRightLink}
                        >
                            Tutorials
                        </Link>
                        <Link
                            to="/blog/data-engineering/"
                            className={globalFooterRightLink}
                        >
                            Data Engineering
                        </Link>
                        <OutboundLink
                            target="_blank"
                            href={webinarsUrl}
                            className={globalFooterRightLink}
                        >
                            Webinar
                        </OutboundLink>
                        <OutboundLink
                            target="_blank"
                            href={estuaryFlowGithubUrl}
                            className={globalFooterRightLink}
                        >
                            Github
                        </OutboundLink>
                        <Link
                            to="/etl-tools/"
                            className={globalFooterRightLink}
                        >
                            Compare ETL/ELT Tools
                        </Link>
                        <Link
                            to="/etl-tools-list/"
                            className={globalFooterRightLink}
                        >
                            Top ETL Tools
                        </Link>
                    </div>
                    <div className={globalFooterRightLinkWrapper}>
                        <p className={globalFooterSubtextTitle}>Services</p>
                        <Link to="/about/" className={globalFooterRightLink}>
                            About Us
                        </Link>
                        <Link
                            to="/about#careers"
                            className={globalFooterRightLink}
                        >
                            Careers
                        </Link>
                        <Link
                            to="/contact-us/"
                            className={globalFooterRightLink}
                        >
                            Contact Us
                        </Link>
                        <Link
                            to="/privacy-policy/"
                            className={globalFooterRightLink}
                        >
                            Privacy
                        </Link>
                        <Link to="/terms/" className={globalFooterRightLink}>
                            Terms
                        </Link>
                        <OutboundLink
                            target="_blank"
                            href={statusPageUrl}
                            className={globalFooterRightLink}
                        >
                            Status
                        </OutboundLink>
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
                            href="https://www.linkedin.com/company/estuary-tech/"
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
