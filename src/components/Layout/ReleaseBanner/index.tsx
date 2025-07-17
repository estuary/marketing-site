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
                    href="/data-warehouse-benchmark-report/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <span>Download the Report</span>
                    <p>
                        2025 Data Warehouse Benchmark - We pushed BigQuery,
                        Snowflake, Databricks & more to their limits. See who
                        held up.
                    </p>
                    <ArrowRight color="var(--white)" />
                </a>
            </div>
        </div>
    );
};

export default ReleaseBanner;
