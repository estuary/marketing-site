import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Advantages from '../Advantages';
import { sectionTenAdvantages } from '../Product/advantages';

interface SecurityCertificatesProps {
    isDarkTheme?: boolean;
}

const SecurityCertificates = ({ isDarkTheme }: SecurityCertificatesProps) => {
    return (
        <Advantages
            icon={
                <StaticImage
                    placeholder="none"
                    alt="Secure Your Data with Estuary Flow: GDPR, CCPA, CPRA Compliant & SOC 2 Type II Certified"
                    src="../../svgs/product-page/section-ten/secure-data.svg"
                />
            }
            title={
                <>
                    <span>SECURE</span> YOUR DATA
                </>
            }
            subtitle="Estuary Flow is designed and tested to make sure your data and your systems stay secure."
            image={
                <StaticImage
                    placeholder="none"
                    alt="Secure Your Data with Estuary Flow: Compliance and Certification"
                    src="../../images/product-page/section-ten/gdpr-ccpa-cpra-soc2-type2-compliant.png"
                    quality={100}
                />
            }
            advantages={sectionTenAdvantages}
            isDarkTheme={isDarkTheme}
        />
    );
};

export default SecurityCertificates;
