import * as React from 'react';
import clsx from 'clsx';
import {
    step,
    step0,
    stepContent,
    stepHeading,
    stepSubheading,
    stepsCta,
} from './styles.module.less';

const Step0 = ({ activePage, setState }) => {
    return (
        <div className={clsx(step, step0)}>
            <div className={stepContent}>
                <div className={stepHeading}>
                    Estuary is your automated data streaming control center
                </div>
                <div className={stepSubheading}>
                    <p>Move your data where, when, and how you need it…</p>
                    <p>
                        ...without scheduling, technical debt, or sacrificing
                        control.
                    </p>
                </div>
                <div
                    className={stepsCta}
                    onClick={() => setState(activePage + 1)}
                >
                    Start Tour
                </div>
            </div>
        </div>
    );
};

export default Step0;
