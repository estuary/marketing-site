import React from 'react';
import { Typography } from '@mui/material';
import { FeatureWrapper } from '../styles';
import HTMLTooltip from '../../HTMLTooltip';

interface ConnectorsTypeProps {
    hasTooltips: boolean;
    title: string;
    icon: React.ReactNode;
    description: string;
}

const ConnectorsType = ({
    hasTooltips,
    title,
    icon,
    description,
}: ConnectorsTypeProps) => {
    const featureContent = (
        <FeatureWrapper hasTooltips={hasTooltips}>
            {icon}
            <h4>{title}</h4>
        </FeatureWrapper>
    );

    if (hasTooltips) {
        return (
            <HTMLTooltip
                title={<Typography color="inherit"> {description} </Typography>}
            >
                {featureContent}
            </HTMLTooltip>
        );
    }

    return featureContent;
};

export default ConnectorsType;
