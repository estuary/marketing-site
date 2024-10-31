import React from 'react';
import clsx from 'clsx';
import ArrowRight from '../../../svgs/arrow-right.svg';
import {
    container,
    darkBackgroundColor,
    lightBackgroundColor,
} from './styles.module.less';

interface ReleaseBanner {
    theme: 'dark' | 'light';
}

const ReleaseBanner = ({ theme = 'dark' }) => {
    return (
        <div
            className={clsx(
                container,
                theme === 'dark' ? darkBackgroundColor : lightBackgroundColor
            )}
        >
            <div>
                <a href="/deployment-options" target="_blank" rel="noreferrer">
                    <span>A Step Ahead</span>
                    <p>
                        Explore Estuary&apos;s powerful compliance solutions
                        &#45; Streamline your security and scale with
                        confidence!
                    </p>
                    <ArrowRight color="#fff" />
                </a>
            </div>
        </div>
    );
};

export default ReleaseBanner;
