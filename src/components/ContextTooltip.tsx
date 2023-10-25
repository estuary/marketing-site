import { styled } from "@mui/material/styles"
import { Tooltip, TooltipProps, tooltipClasses } from "@mui/material"
import React, { useState } from "react"

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#f5f5f9",
        color: "rgba(0, 0, 0, 0.87)",
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: "1px solid #dadde9",
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: "#f5f5f9",
        "&::before": {
            border: "1px solid #dadde9",
        }
    },
}))

export const ContextToolTip = React.forwardRef((props: TooltipProps) => {
    const [open, setOpen] = useState(false)

    const handleTooltipClose = () => {
        setOpen(false)
    }

    const handleTooltipOpen = () => {
        setOpen(true)
    }

    return (
        <HtmlTooltip
            open={open}
            onClick={handleTooltipOpen}
            onClose={handleTooltipClose}
            arrow
            {...props}
        />
    )
})
