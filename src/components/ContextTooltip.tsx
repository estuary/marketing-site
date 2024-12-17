import { styled } from '@mui/material/styles';
import { Tooltip, TooltipProps, tooltipClasses } from '@mui/material';
import { forwardRef, useState } from 'react';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#70D3D6',
        color: '#3F3F46',
        maxWidth: 320,
        fontSize: theme.typography.pxToRem(15),
        border: '1px solid #dadde9',
        padding: '20px',
        textAlign: 'center',
    },
    [`& .${tooltipClasses.arrow}`]: {
        'color': '#70D3D6',
        '&::before': {
            border: '1px solid #dadde9',
        },
    },
}));

export const ContextToolTip = forwardRef((props: TooltipProps, ref) => {
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <HtmlTooltip
            open={open}
            onClick={handleTooltipOpen}
            onClose={handleTooltipClose}
            arrow
            ref={ref}
            {...props}
        />
    );
});
