import { ReactNode } from 'react';
import OutboundLink from '../../../LinksAndButtons/OutboundLink';

interface PartnerAvatarProps {
    icon: ReactNode;
    name: string;
    href: string;
}

const PartnerAvatar = ({ icon, name, href }: PartnerAvatarProps) => {
    return (
        <li>
            <OutboundLink
                id={`${name.toLowerCase()}-logo-button/partners-page`}
                href={href}
                target="__blank"
            >
                <div>{icon}</div>
                <span>{name}</span>
            </OutboundLink>
        </li>
    );
};

export default PartnerAvatar;
