import InternalLink from '../InternalLink';
import ChevronRightIcon from '../../svgs/chevron-right.svg';
import OutboundLink from '../LinksAndButtons/OutboundLink';

interface LinkProps {
    id?: string;
    children: string;
    href: string;
    isExternal?: boolean;
}

const Link = ({ id, children, href, isExternal = false }: LinkProps) =>
    isExternal ? (
        <OutboundLink id={id} target="_blank" href={href}>
            {children}
            <ChevronRightIcon color="var(--blue)" />
        </OutboundLink>
    ) : (
        <InternalLink id={id} href={href}>
            {children}
            <ChevronRightIcon color="var(--blue)" />
        </InternalLink>
    );

export default Link;
