import styled from "@emotion/styled";
import { Tooltip, tooltipClasses } from "@mui/material";
import React, {useState} from "react";

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props as any} classes={{ popper: className }} />
  ))(({  }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: '12px',
      border: '1px solid #dadde9',
    },
  }));

  export const ContextToolTip = (props) => {
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
      setOpen(false);
    };
  
    const handleTooltipOpen = () => {
      setOpen(true);
    };

    return <HtmlTooltip className={props.className} title={props.title}>{props.children}</HtmlTooltip>
}
  