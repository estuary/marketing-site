import { ReactNode } from 'react';
import clsx from 'clsx';
import {
    metricIconWrapper,
    metricLabel,
    metricsWrapper,
    centeredMetricsWrapper,
    metricValue,
} from './styles.module.less';

interface MetricCardProps {
    icon?: ReactNode;
    value: string;
    label: string;
}

const MetricCard = ({ icon, value, label }: MetricCardProps) => {
    return (
        <li key={label}>
            {icon ? <div className={metricIconWrapper}>{icon}</div> : null}
            <div
                className={clsx(
                    metricsWrapper,
                    icon ? null : centeredMetricsWrapper
                )}
            >
                <span className={metricValue}>{value}</span>
                <span className={metricLabel}>{label}</span>
            </div>
        </li>
    );
};

export default MetricCard;
