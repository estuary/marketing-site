import LinkFilled from '../../../LinksAndButtons/LinkFilled';
import OutboundLinkFilled from '../../../LinksAndButtons/OutboundLinkFilled';
import { CardProps } from '../shared';
import { container } from './styles.module.less';

const Card = ({ title, link, outboundLink }: CardProps) => {
    return (
        <li className={container}>
            <h3>{title}</h3>
            {link ? (
                <LinkFilled
                    id={link.id}
                    href={link.href}
                    target="_blank"
                    variant="secondary"
                >
                    {link.label}
                </LinkFilled>
            ) : null}
            {outboundLink ? (
                <OutboundLinkFilled
                    id={outboundLink.id}
                    href={outboundLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                >
                    {outboundLink.label}
                </OutboundLinkFilled>
            ) : null}
        </li>
    );
};

export default Card;
