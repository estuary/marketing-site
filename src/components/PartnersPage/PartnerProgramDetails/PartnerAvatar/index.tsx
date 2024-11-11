import React, { ReactNode } from 'react';
import { OutboundLink } from '../../../OutboundLink';

interface PartnerAvatarProps {
    icon: ReactNode;
    name: string;
    href: string;
}

const PartnerAvatar = ({ icon, name, href }: PartnerAvatarProps) => {
    return (
        <li>
            <OutboundLink href={href} target="__blank">
                <div>{icon}</div>
                <span>{name}</span>
            </OutboundLink>
        </li>
    );
};

export default PartnerAvatar;
