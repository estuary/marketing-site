import React from 'react';
import clsx from 'clsx';
import Container from '../../Container';
import { LinkOutlined } from '../../../globalStyles';
import { Partner } from '../shared';
import { container, isReverseStyling, darkTheme } from './styles.module.less';
import PartnerAvatar from './PartnerAvatar';

interface PartnerProgramDetailsProps {
    title: string;
    description: string;
    partners: Partner[];
    isReverse?: boolean;
    isDarkTheme?: boolean;
}

const PartnerProgramDetails = ({
    title,
    description,
    partners,
    isReverse = false,
    isDarkTheme = false,
}: PartnerProgramDetailsProps) => {
    return (
        <Container
            className={clsx(
                container,
                isReverse ? isReverseStyling : null,
                isDarkTheme ? darkTheme : null
            )}
        >
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <LinkOutlined
                    href="/contact-us/"
                    theme={isDarkTheme ? 'dark' : 'light'}
                >
                    Contact Us
                </LinkOutlined>
            </div>
            <ul>
                {partners.map((partner, index) => (
                    <PartnerAvatar
                        key={index}
                        icon={partner.icon}
                        name={partner.name}
                        href={partner.href}
                    />
                ))}
            </ul>
        </Container>
    );
};

export default PartnerProgramDetails;
