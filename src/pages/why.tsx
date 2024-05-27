import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { OutboundLink } from '../components/OutboundLink';
import { calculatePrice, currencyFormatter } from '../utils';

import Seo from '../components/seo';
import Navigation from '../components/WhyNavigation';

export const Step0 = ({ activePage, setState }) => {
    return (
        <div className={`step-${activePage}`}>
            <div className="step-content">
                <div className="step-heading">
                    Estuary is your automated data streaming control center
                </div>
                <div className="step-subheading">
                    <p>Move your data where, when, and how you need it…</p>
                    <p>
                        ...without scheduling, technical debt, or sacrificing
                        control.
                    </p>
                </div>
                <div
                    className="steps-cta start-start"
                    onClick={() => setState(activePage + 1)}
                >
                    Start Tour
                </div>
            </div>
        </div>
    );
};
export const Step1 = ({ activePage, setState }) => {
    return (
        <div className={`step-${activePage}`}>
            <div className="step-content">
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    loading="lazy"
                    src="../images/flow-images/step1-image.png"
                    layout="constrained"
                    width={950}
                    height={597}
                    quality={100}
                />
                <div
                    className="zoom-in-out-circle"
                    onClick={() => setState(activePage + 1)}
                />
                <div className="button-tooltip left">
                    <div className="tooltip-heading">Connect Source</div>
                    <div className="tooltip-description">
                        Choose from databases, SaaS APIs, filestores, pub-sub
                        systems, Vector DB, and more.
                    </div>
                    <div className="tooltip-action">
                        Click the dot to continue
                    </div>
                </div>
            </div>
        </div>
    );
};
export const Step2 = ({ activePage, setState }) => {
    return (
        <div className={`step-${activePage}`}>
            <div className="step-content">
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    loading="lazy"
                    src="../images/flow-images/step2-image.png"
                    layout="constrained"
                    width={950}
                    height={597}
                    quality={100}
                />
                <div
                    className="zoom-in-out-circle"
                    onClick={() => setState(activePage + 1)}
                />
                <div className="button-tooltip top">
                    <div className="tooltip-heading">Automated Schema</div>
                    <div className="tooltip-description">
                        Flow infers and automatically evolves the best schemas
                        for your source data tables, streams, or API objects.
                    </div>
                    <div className="tooltip-description">
                        You&apos;re free to make changes, but you&apos;ll rarely
                        want to.
                    </div>
                </div>
            </div>
        </div>
    );
};
export const Step3 = ({ activePage, setState }) => {
    return (
        <div className={`step-${activePage}`}>
            <div className="step-content">
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    loading="lazy"
                    src="../images/flow-images/step3-image.png"
                    layout="constrained"
                    width={950}
                    height={597}
                    quality={100}
                />
                <div
                    className="zoom-in-out-circle"
                    onClick={() => setState(activePage + 1)}
                />
                <div className="button-tooltip left">
                    <div className="tooltip-heading">Success!</div>
                    <div className="tooltip-description">
                        You&apos;ll never have to connect that data source
                        again!
                    </div>
                    <div className="tooltip-description">
                        Whether you need 1-millisecond or 1-hour syncs, building
                        pipelines on our event-driven architecture gives you:
                    </div>
                    <ul className="tooltip-list">
                        <li>
                            Greater <b>cost efficiency</b> since only
                            incremental data is processed.
                        </li>
                        <li>
                            <b>Boundless horizontal scalability.</b>
                        </li>
                        <li>
                            <b>Resilient and fault tolerant</b> pipelines.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export const Step4 = ({ activePage, setState }) => {
    return (
        <div className={`step-${activePage}`}>
            <div className="step-content">
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    loading="lazy"
                    src="../images/flow-images/step4-image.png"
                    layout="constrained"
                    width={950}
                    height={597}
                    quality={100}
                />
                <div
                    className="zoom-in-out-circle"
                    onClick={() => setState(activePage + 1)}
                />
                <div className="button-tooltip left">
                    <div className="tooltip-heading">
                        Your Data &apos;Collections&apos;
                    </div>
                    <div className="tooltip-description">
                        Flow stores data from your captures as collections:
                        groups of cleaned, de-duped, and validated, JSON files
                        in your cloud storage. Both your real-time and
                        historical data live here.
                    </div>
                    <div className="tooltip-description">
                        You can stream these collections to destinations with
                        sub-second latency, or add an in-flight transformation
                        step first.
                    </div>
                </div>
            </div>
        </div>
    );
};
export const Step5 = ({ activePage, setState }) => {
    return (
        <div className={`step-${activePage}`}>
            <div className="step-content">
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    loading="lazy"
                    src="../images/flow-images/step5-image.png"
                    layout="constrained"
                    width={956}
                    height={521}
                    quality={100}
                />
                <div
                    className="zoom-in-out-circle"
                    onClick={() => setState(activePage + 1)}
                />
                <div className="button-tooltip right">
                    <div className="tooltip-heading">Transform your data</div>
                    <div className="tooltip-description">
                        Use SQL or TypeScript to apply stateful transforms
                        in-flight, or to join your collections. Send only the
                        data you need to your warehouse.
                    </div>
                </div>
            </div>
        </div>
    );
};
export const Step6 = ({ activePage, setState }) => {
    return (
        <div className={`step-${activePage}`}>
            <div className="step-content">
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    loading="lazy"
                    src="../images/flow-images/step6-image.png"
                    layout="constrained"
                    width={949}
                    height={597}
                    quality={100}
                />
                <div
                    className="zoom-in-out-circle"
                    onClick={() => setState(activePage + 1)}
                />
                <div className="button-tooltip right">
                    <div className="tooltip-heading">Materialize Data</div>
                    <div className="tooltip-description">
                        Stream collections to your destinations with sub-second
                        latency and exactly-once processing guarantees.
                    </div>
                </div>
            </div>
        </div>
    );
};
export const Step7 = ({ activePage }) => {
    return (
        <div className={`step-${activePage}`}>
            <div className="step-content">
                <div className="step-heading">Predictable Pricing</div>
                <ul>
                    <li>
                        <b>
                            {currencyFormatter.format(
                                calculatePrice(1, 0).estuary
                            )}
                        </b>
                        /GB
                    </li>
                    <li>
                        <b>
                            {currencyFormatter.format(
                                calculatePrice(0, 1).estuary
                            )}
                        </b>
                        /task month
                    </li>
                    <li>Free for up to two tasks and 10 GB/month</li>
                </ul>
                <div className="step-ctas">
                    <OutboundLink
                        target="_blank"
                        href="https://dashboard.estuary.dev/register"
                        className="pipeline-link"
                    >
                        Build a Pipeline
                    </OutboundLink>
                    <OutboundLink
                        target="_blank"
                        href="https://estuary.dev/vs-fivetran/"
                        className="compare-link"
                    >
                        Compare to Fivetran
                    </OutboundLink>
                </div>
            </div>
        </div>
    );
};

export const Head = () => <Seo title="Automate Data Streaming" />;

const WhyEstuary = () => {
    const [activePage, setActivePage] = React.useState(0);

    const renderStep = () => {
        switch (activePage) {
            case 0:
                return (
                    <Step0 activePage={activePage} setState={setActivePage} />
                );
            case 1:
                return (
                    <Step1 activePage={activePage} setState={setActivePage} />
                );
            case 2:
                return (
                    <Step2 activePage={activePage} setState={setActivePage} />
                );
            case 3:
                return (
                    <Step3 activePage={activePage} setState={setActivePage} />
                );
            case 4:
                return (
                    <Step4 activePage={activePage} setState={setActivePage} />
                );
            case 5:
                return (
                    <Step5 activePage={activePage} setState={setActivePage} />
                );
            case 6:
                return (
                    <Step6 activePage={activePage} setState={setActivePage} />
                );
            case 7:
                return <Step7 activePage={activePage} />;
            default:
                return null;
        }
    };

    return (
        <main className="why-estuary">
            <Navigation activePage={activePage} setActivePage={setActivePage} />
            <div className="main-content-wrap">
                <div className={`mac-bg step-bg-${activePage}`}>
                    {renderStep()}
                </div>
                <div className="steps-controls">
                    <div
                        className="prev-step"
                        onClick={() =>
                            setActivePage(Math.max(activePage - 1, 0))
                        }
                    >
                        <span>Previous</span>
                    </div>
                    <div
                        className="next-step"
                        onClick={() =>
                            setActivePage(Math.min(activePage + 1, 7))
                        }
                    >
                        <span>Next</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default WhyEstuary;
