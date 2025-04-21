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
                    href="https://lu.ma/9wazu8zx?utm_source=estuary_homepage"
                    rel="noreferrer"
                    target="_blank"
                >
                    <span>RSVP Now</span>
                    <p>
                        Meet data pros in NYC! Join the Real-time Data Meetup
                        for networking & streaming pipeline insights.
                    </p>
                    <ArrowRight color="var(--white)" />
                </a>
            </div>
        </div>
    );
};

export default ReleaseBanner;
