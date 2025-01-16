import { ReactNode } from 'react';
import {
    container,
    metricIconWrapper,
    metricLabel,
    metricsWrapper,
    metricValue,
} from './styles.module.less';

interface MetricCardProps {
    icon: ReactNode;
    value: string;
    label: string;
}

const MetricCard = ({ icon, value, label }: MetricCardProps) => {
    return (
        <li key={label} className={container}>
            {/* <div className={metricIconWrapper}>{icon}</div> */}
            <div className={metricsWrapper}>
                <span className={metricValue}>{value}</span>
                <span className={metricLabel}>{label}</span>
            </div>
        </li>
    );
};

export default MetricCard;
