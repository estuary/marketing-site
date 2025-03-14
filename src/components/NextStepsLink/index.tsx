import ChevronRight from '@mui/icons-material/ChevronRight';
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
        <ChevronRight htmlColor="var(--blue)" />
    </OutboundLink>
);

export default NextStepsLink;
