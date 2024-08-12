import * as React from 'react';

const Step0 = ({ activePage, setState }) => {
    return (
        <div className={`step step-${activePage}`}>
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

export default Step0;
