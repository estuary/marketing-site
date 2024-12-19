import React, { ReactNode } from 'react';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import { featureWrapper, withTooltips } from '../styles.module.less';
import HTMLTooltip from '../../HTMLTooltip';

interface ConnectorsTypeProps {
    hasTooltips: boolean;
    title: string;
    icon: ReactNode;
    description: string;
}

const ConnectorsType = ({
    hasTooltips,
    title,
    icon,
    description,
}: ConnectorsTypeProps) => {
    const featureContent = (
        <div
            className={clsx(featureWrapper, hasTooltips ? withTooltips : null)}
        >
            {icon}
            <h4>{title}</h4>
        </div>
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
