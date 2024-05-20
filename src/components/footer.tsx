import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { OutboundLink } from '../components/OutboundLink';
import GithubIcon from '../svgs/github-outline.svg';
import LinkedinIcon from '../svgs/linkedin-outline.svg';
import SlackIcon from '../svgs/slack-outline.svg';
import TwitterIcon from '../svgs/twitter-outline.svg';
import { AppBar, Button, ButtonBase, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';

const openCookiePreferences = () => {
  try {
    // @ts-expect-error : This loads through CookieFirst. Once homepage changes are merged we add to the window type
    window.cookiefirst_show_settings();
  } catch (e) {
    alert('Failed to open Cookie Preferences. Please ensure CookieFirst loaded.');
  }
};

const Footer = () => {
  return (
    <footer className="global-footer">
      <div className="global-footer-wrapper">
        <div>
          <Link className="global-footer-logo-link" to="/">
            <StaticImage
              src="../images/estuary-icon.png"
              alt="estuary logo"
              width={27}
              height={35}
              layout="fixed"
              placeholder="none"
            />
            <h1 className="global-footer-title">Estuary</h1>
          </Link>
          <p className="global-footer-subtext">
            Managed streaming data pipelines, streaming SQL transformations and turnkey connectivity to clouds,
            databases, and apps.
          </p>
          <div>
            <p className="global-footer-subtext-title">Don't miss a thing</p>
            <p className="global-footer-subtext">Subscribe now to get the latest news and updates.</p>
          </div>
          <div className="global-footer-subscribe">
            <form id="newsletter-signup" className="email-form">
              <input className="global-footer-input-email" placeholder="Email" type="email"></input>
              <button type="submit" className="global-footer-button global-footer-input-button-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="global-footer-right">
          <div className="global-footer-right-link-wrapper">
            <p className="global-footer-subtext-title">Quick Links</p>
            <Link to="/blog" className="global-footer-right-link">
              Blog
            </Link>
            <OutboundLink target="_blank" href="https://github.com/estuary/flow" className="global-footer-right-link">
              Github
            </OutboundLink>
            <Link to="/about#contact-us" className="global-footer-right-link">
              Contact
            </Link>
            <OutboundLink target="_blank" href="https://docs.estuary.dev/" className="global-footer-right-link">
              Docs
            </OutboundLink>
          </div>
          <div className="global-footer-right-link-wrapper">
            <p className="global-footer-subtext-title">Services</p>
            <Link to="/product" className="global-footer-right-link">
              Product
            </Link>
            <Link to="/about#careers" className="global-footer-right-link">
              Careers
            </Link>
            <Link to="/privacy-policy" className="global-footer-right-link">
              Privacy
            </Link>
            <Link to="/terms" className="global-footer-right-link">
              Terms
            </Link>
          </div>
        </div>
      </div>

      <div className="global-footer-bottom">
        <button className="global-footer-button" onClick={openCookiePreferences}>
          Manage Cookie Preferences
        </button>

        <div className="global-footer-divider"></div>
        <div className="global-footer-bottom-wrapper">
          <div className="global-footer-bottom-copyright">
            <p className="global-footer-bottom-copyright-text">
              © {new Date().getFullYear()} All Rights Reserved -&nbsp;
              {` `}
            </p>

            <OutboundLink className="global-footer-copyright-link" href="https://www.estuary.dev/">
              estuary.dev
            </OutboundLink>
          </div>

          <div className="global-footer-bottom-social">
            <OutboundLink
              target="_blank"
              href="https://estuary-dev.slack.com/join/shared_invite/zt-86nal6yr-VPbv~YfZE9Q~6Zl~gmZdFQ#/shared-invite/email"
              aria-label="Slack Invite Link"
            >
              <SlackIcon className="social-icon" />
            </OutboundLink>
            <OutboundLink target="_blank" href="https://github.com/estuary/flow" aria-label="Github Repo Link">
              <GithubIcon className="social-icon" />
            </OutboundLink>
            <OutboundLink
              target="_blank"
              href="https://www.linkedin.com/company/65266256/"
              aria-label="Linkedin Company Link"
            >
              <LinkedinIcon className="social-icon" color="#B7C6DD" />
            </OutboundLink>
            <OutboundLink target="_blank" href="https://twitter.com/EstuaryDev" aria-label="Twitter Company Link">
              <TwitterIcon className="social-icon" />
            </OutboundLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
