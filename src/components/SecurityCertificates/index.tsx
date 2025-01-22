import { ReactNode } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Advantages from '../Advantages';
import SecureIcon from '../../svgs/secure-data.svg';
import OpenHubspotModal from '../HubSpot/OpenModal';
import { socTwoLink } from '../../../shared';
import OutboundLink from '../LinksAndButtons/OutboundLink';

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
                'We’ve designed Estuary with air-tight compliance standards to make sure your data and systems are secure - no matter what'
            }
            image={
                <OutboundLink
                    target="_blank"
                    href={socTwoLink}
                    aria-label="Link to AICPA SOC for Service Organizations Engagements overview"
                >
                    <StaticImage
                        placeholder="none"
                        alt="Secure Your Data with Estuary Flow: Compliance and Certification"
                        src="../../images/product-page/section-ten/gdpr-ccpa-cpra-soc2-type2-compliant.png"
                        quality={100}
                    />
                </OutboundLink>
            }
            advantages={[
                {
                    id: 14,
                    title: 'We never store your data - we just help move it',
                },
                {
                    id: 15,
                    title: 'HIPAA, GDPR, CCPA and CPRA compliant',
                },
                {
                    id: 16,
                    title: 'SOC 2 Type II certified',
                }
            ]}
            isDarkTheme={isDarkTheme}
            ctaButtons={
                <OpenHubspotModal
                    buttonLabel="Download Security Whitepaper"
                    buttonId="security-certificates-section-hubspot"
                    formId="657d4cf2-b1e1-410d-a0ea-b61ff24a5c7e"
                    theme={isDarkTheme ? 'dark' : 'light'}
                />
            }
        />
    );
};

export default SecurityCertificates;
