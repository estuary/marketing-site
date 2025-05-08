import clsx from 'clsx';
import ArrowRight from '../../../svgs/arrow-right.svg';
import { dashboardRegisterUrl } from '../../../../shared';
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
                    href={dashboardRegisterUrl}
                    rel="noreferrer"
                    target="_blank"
                >
                    <span>Get started</span>
                    <p>
                        Get 10GB and 2 connectors every month, 100% free — no
                        strings attached.
                    </p>
                    <ArrowRight color="var(--white)" />
                </a>
            </div>
        </div>
    );
};

export default ReleaseBanner;
