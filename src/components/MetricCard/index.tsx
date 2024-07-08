import React, { ReactNode } from 'react';
import {
    Container,
    MetricIconWrapper,
    MetricLabel,
    MetricValue,
    MetricsWrapper,
} from './styles';

interface MetricCardProps {
    icon: ReactNode;
    value: string;
    label: string;
}

const MetricCard = ({ icon, value, label }: MetricCardProps) => {
    return (
        <Container>
            <MetricIconWrapper>{icon}</MetricIconWrapper>
            <MetricsWrapper>
                <MetricValue>{value}</MetricValue>
                <MetricLabel>{label}</MetricLabel>
            </MetricsWrapper>
        </Container>
    );
};

export default MetricCard;
