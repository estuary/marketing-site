import React, { ReactNode } from 'react';

interface PartnerAvatarProps {
    icon: ReactNode;
    name: string;
}

const PartnerAvatar = ({ icon, name }: PartnerAvatarProps) => {
    return (
        <li>
            <div>{icon}</div>
            <span>{name}</span>
        </li>
    );
};

export default PartnerAvatar;
