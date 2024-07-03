import Fade from '@mui/material/Fade';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import React from 'react';

export interface HTMLTooltipProps extends TooltipProps {
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    maxWidth?: number;
    fontSize?: number;
    timeout?: number;
    borderRadius?: number;
    padding?: number;
}

const HTMLTooltip = styled(
    ({
        className,
        textColor,
        borderColor,
        maxWidth,
        backgroundColor,
        fontSize,
        borderRadius,
        padding,
        timeout = 100,
        placement = 'top',
        arrow = true,
        disableInteractive = true,
        children,
        ...props
    }: HTMLTooltipProps) => (
        <Tooltip
            classes={{ popper: className }}
            TransitionComponent={Fade}
            TransitionProps={{ timeout }}
            arrow={arrow}
            disableInteractive={disableInteractive}
            placement={placement}
            {...props}
        >
            <div>{children}</div>
        </Tooltip>
    )
)(
    ({
        theme,
        backgroundColor = '#ffffff',
        color = '#04192B',
        maxWidth = 232,
        fontSize = 16,
        borderColor = '#5072EB',
        borderRadius = 8,
        padding = 8,
    }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor,
            color,
            maxWidth,
            fontSize: theme.typography.pxToRem(fontSize),
            border: '2px solid',
            borderColor,
            borderRadius,
            padding,
        },
        [`& .${tooltipClasses.arrow}`]: {
            color: borderColor,
        },
    })
);

export default HTMLTooltip;
