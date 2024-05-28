import * as React from 'react';
import { Navigation, Step } from '../components/Why';
import Seo from '../components/seo';

export const Head = () => <Seo title="Automate Data Streaming" />;

const WhyEstuary = () => {
    const [activePage, setActivePage] = React.useState(0);

    return (
        <main className="why-estuary">
            <Navigation activePage={activePage} setActivePage={setActivePage} />
            <div className="main-content-wrap">
                <div className={`mac-bg step-bg-${activePage}`}>
                    <Step activePage={activePage} setActivePage={setActivePage} />
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
