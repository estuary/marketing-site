import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import clsx from 'clsx';
import { OutboundLink } from '../OutboundLink';
import GithubIcon from '../../svgs/github-outline.svg';
import LinkedinIcon from '../../svgs/linkedin-outline.svg';
import SlackIcon from '../../svgs/slack-outline.svg';
import TwitterIcon from '../../svgs/twitter-outline.svg';
import { ButtonOutlinedPrimary } from '../../globalStyles';
import NewsletterSignupForm from '../NewsletterSignupForm';
import {
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
        <footer>
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
                        <p className={globalFooterSubtextTitle}>Quick Links</p>
                        <Link to="/blog" className={globalFooterRightLink}>
                            Blog
                        </Link>
                        <OutboundLink
                            target="_blank"
                            href="https://github.com/estuary/flow"
                            className={globalFooterRightLink}
                        >
                            Github
                        </OutboundLink>
                        <a
                            href="/contact-us"
                            className={globalFooterRightLink}
                            target="_blank"
                        >
                            Contact Us
                        </a>
                        <OutboundLink
                            target="_blank"
                            href="https://docs.estuary.dev/"
                            className={globalFooterRightLink}
                        >
                            Docs
                        </OutboundLink>
                    </div>
                    <div className={globalFooterRightLinkWrapper}>
                        <p className={globalFooterSubtextTitle}>Services</p>
                        <Link to="/product" className={globalFooterRightLink}>
                            Product
                        </Link>
                        <Link
                            to="/about#careers"
                            className={globalFooterRightLink}
                        >
                            Careers
                        </Link>
                        <Link
                            to="/privacy-policy"
                            className={globalFooterRightLink}
                        >
                            Privacy
                        </Link>
                        <Link to="/terms" className={globalFooterRightLink}>
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
            <div className={globalFooterBottom}>
                <ButtonOutlinedPrimary
                    onClick={openCookiePreferences}
                    theme="dark"
                >
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
                            href="https://estuary-dev.slack.com/join/shared_invite/zt-86nal6yr-VPbv~YfZE9Q~6Zl~gmZdFQ#/shared-invite/email"
                            aria-label="Slack Invite Link"
                        >
                            <SlackIcon className={footerSocialIconStyle} />
                        </OutboundLink>
                        <OutboundLink
                            target="_blank"
                            href="https://github.com/estuary/flow"
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
