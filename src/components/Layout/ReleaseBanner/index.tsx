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
                <a
                    id="hero-section-banner"
                    href="/deployment-options/"
                    rel="noreferrer"
                >
                    <span>A Step Ahead</span>
                    <p>
                        Private deployments are now live! Explore how Estuary
                        Flow can fit into your environment.
                    </p>
                    <ArrowRight color="var(--white)" />
                </a>
            </div>
        </div>
    );
};

export default ReleaseBanner;
