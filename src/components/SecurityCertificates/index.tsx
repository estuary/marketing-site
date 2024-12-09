import React, { ReactNode } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Advantages from '../Advantages';
import SecureIcon from '../../svgs/secure-data.svg';
import OpenHubspotModal from '../HubSpot/OpenModal';

interface SecurityCertificatesProps {
    isDarkTheme?: boolean;
    title?: ReactNode;
    subtitle?: string;
}

const SecurityCertificates = ({
    isDarkTheme,
    title,
    subtitle,
}: SecurityCertificatesProps) => {
    return (
        <Advantages
            icon={<SecureIcon color="var(--blue)" />}
            title={
                title ?? (
                    <>
                        <span>SECURE</span> YOUR DATA
                    </>
                )
            }
            subtitle={
                subtitle ??
                'Estuary Flow is designed and tested to make sure your data and your systems stay secure.'
            }
            image={
                <StaticImage
                    placeholder="none"
                    alt="Secure Your Data with Estuary Flow: Compliance and Certification"
                    src="../../images/product-page/section-ten/gdpr-ccpa-cpra-soc2-type2-compliant.png"
                    quality={100}
                />
            }
            advantages={[
                {
                    id: 14,
                    title: 'Estuary never stores your data',
                },
                {
                    id: 15,
                    title: 'GDPR, CCPA and CPRA compliant',
                },
                {
                    id: 16,
                    title: 'SOC 2 Type II certified',
                },
                {
                    id: 17,
                    title: 'HIPAA',
                },
            ]}
            isDarkTheme={isDarkTheme}
            ctaButtons={
                <OpenHubspotModal
                    buttonLabel="Download the security whitepaper"
                    buttonId="security-certificates-section-hubspot"
                    formId="657d4cf2-b1e1-410d-a0ea-b61ff24a5c7e"
                    theme={isDarkTheme ? 'dark' : 'light'}
                />
            }
        />
    );
};

export default SecurityCertificates;
