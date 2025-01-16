import {
    container,
    metricLabel,
    metricsWrapper,
    metricValue,
} from './styles.module.less';

interface MetricCardProps {
    value: string;
    label: string;
}

const MetricCard = ({ value, label }: MetricCardProps) => {
    return (
        <li key={label} className={container}>
            <div className={metricsWrapper}>
                <span className={metricValue}>{value}</span>
                <span className={metricLabel}>{label}</span>
            </div>
        </li>
    );
};

export default MetricCard;
