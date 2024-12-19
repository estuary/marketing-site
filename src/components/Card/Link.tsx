import InternalLink from '../InternalLink';
import ChevronRightIcon from '../../svgs/chevron-right.svg';
import OutboundLink from '../LinksAndButtons/OutboundLink';

interface LinkProps {
    children: string;
    href: string;
    isExternal?: boolean;
}

const Link = ({ children, href, isExternal = false }: LinkProps) =>
    isExternal ? (
        <OutboundLink target="_blank" href={href}>
            {children}
            <ChevronRightIcon color="var(--blue)" />
        </OutboundLink>
    ) : (
        <InternalLink href={href}>
            {children}
            <ChevronRightIcon color="var(--blue)" />
        </InternalLink>
    );

export default Link;
