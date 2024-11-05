import React from 'react';
import Container from '../../Container';
import { LinkOutlined } from '../../../globalStyles';
import { Partner } from '../shared';
import { container } from './styles.module.less';
import PartnerAvatar from './PartnerAvatar';

interface PartnerProgramDetailsProps {
    title: string;
    description: string;
    partners: Partner[];
}

const PartnerProgramDetails = ({
    title,
    description,
    partners,
}: PartnerProgramDetailsProps) => {
    return (
        <Container className={container}>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <LinkOutlined href="/contact-us/">Contact Us</LinkOutlined>
            </div>
            <ul>
                {partners.map((partner, index) => (
                    <PartnerAvatar
                        key={index}
                        icon={partner.icon}
                        name={partner.name}
                    />
                ))}
            </ul>
        </Container>
    );
};

export default PartnerProgramDetails;
