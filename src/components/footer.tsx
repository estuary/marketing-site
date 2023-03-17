import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
    return (
        <footer className="global-footer">
            <div className="global-footer-wrapper">
                <div className="global-footer-left">
                    <Link className="global-footer-logo-link" to="/">
                        <StaticImage
                            src="../images/estuary-icon.png"
                            alt="estuary logo"
                            width={27}
                            height={35}
                            style={{
                                margin: "3px 7px 34px 0px",
                            }}
                            layout="fixed"
                            placeholder="none"
                        />
                        <h1 className="global-footer-title">Estuary</h1>
                    </Link>
                    <p className="global-footer-subtext">
                        Managed streaming data pipelines, streaming SQL
                        transformations and turnkey connectivity to clouds,
                        databases, and apps.
                    </p>
                    <div>
                        <p className="global-footer-subtext-title">
                            Don't miss a thing
                        </p>
                        <p className="global-footer-subtext">
                            Subscribe now to get the latest news and updates.
                        </p>
                    </div>
                    <div className="global-footer-subscribe">
                        <input
                            className="global-footer-input-email"
                            placeholder="Email"
                        ></input>
                        <button className="global-footer-input-button-submit">
                            Submit
                        </button>
                    </div>
                </div>
                <div className="global-footer-right">
                    <div className="global-footer-right-link-wrapper">
                        <p className="global-footer-subtext-title">
                            Quick Links
                        </p>
                        <a className="global-footer-right-link">Blog</a>
                        <a className="global-footer-right-link">Github</a>
                        <a className="global-footer-right-link">Contact</a>
                        <a className="global-footer-right-link">Docs</a>
                    </div>
                    <div className="global-footer-right-link-wrapper">
                        <p className="global-footer-subtext-title">Services</p>
                        <a className="global-footer-right-link">Product</a>
                        <a className="global-footer-right-link">Careers</a>
                        <a className="global-footer-right-link">Privacy</a>
                        <a className="global-footer-right-link">Terms</a>
                    </div>
                </div>
            </div>

            <div className="global-footer-bottom">
                <div className="global-footer-divider"></div>
                <div className="global-footer-bottom-wrapper">
                    <div className="global-footer-bottom-copyright">
                        <p>
                            © {new Date().getFullYear()} All Rights Reserved
                            -&nbsp;
                            {` `}
                        </p>

                        <a
                            className="global-footer-copyright-link"
                            href="https://www.estuary.dev/"
                        >
                            estuary.dev
                        </a>
                    </div>

                    <div className="global-footer-bottom-social">
                        <StaticImage
                            src="../images/slack-outline.svg"
                            alt="slack logo"
                            width={24}
                            height={24}
                            style={{
                                margin: "0 15px",
                            }}
                            layout="fixed"
                            placeholder="none"
                        />
                        <StaticImage
                            src="../images/github-outline.svg"
                            alt="github logo"
                            width={24}
                            height={24}
                            style={{
                                margin: "0 15px",
                            }}
                            layout="fixed"
                            placeholder="none"
                        />
                        <StaticImage
                            src="../images/linkedin-outline.svg"
                            alt="linkedin logo"
                            width={24}
                            height={24}
                            style={{
                                margin: "0 15px",
                            }}
                            layout="fixed"
                            placeholder="none"
                        />
                        <StaticImage
                            src="../images/twitter-outline.svg"
                            alt="twitter logo"
                            width={24}
                            height={24}
                            style={{
                                margin: "0 15px",
                            }}
                            layout="fixed"
                            placeholder="none"
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
