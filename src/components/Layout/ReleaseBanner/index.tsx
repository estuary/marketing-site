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
                <a href="/deployment-options/" rel="noreferrer">
                    <span>A Step Ahead</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur non arcu ac purus.
                    </p>
                    <ArrowRight color="var(--white)" />
                </a>
            </div>
        </div>
    );
};

export default ReleaseBanner;
