import ChevronRight from '@mui/icons-material/ChevronRight';
import React from 'react';
import { OutboundLink } from './OutboundLink';

type NextStepsLinkProps = {
    children: string;
    href: string;
};

const NextStepsLink = ({ children, href }: NextStepsLinkProps) => (
    <OutboundLink href={href} className="next-steps-link-container">
        <span className="next-steps-link-text">{children}</span>
        <ChevronRight htmlColor="#5072EB" />
    </OutboundLink>
);

export default NextStepsLink;
