import ChevronRight from '@mui/icons-material/ChevronRight';
import React from 'react';
import OutboundLink from '../LinksAndButtons/OutboundLink';
import {
    nextStepsLinkContainer,
    nextStepsLinkText,
} from './styles.module.less';

type NextStepsLinkProps = {
    children: string;
    href: string;
};

const NextStepsLink = ({ children, href }: NextStepsLinkProps) => (
    <OutboundLink href={href} className={nextStepsLinkContainer}>
        <span className={nextStepsLinkText}>{children}</span>
        <ChevronRight htmlColor="#5072EB" />
    </OutboundLink>
);

export default NextStepsLink;
