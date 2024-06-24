import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { DefaultWrapperDark } from '../../../../styles/wrappers';
import Advantages from '../../components/Advantages';

const UnifiedDataStack = () => {
    return (
        <DefaultWrapperDark>
            <Advantages
                icon={
                    <StaticImage
                        placeholder="none"
                        alt="Secure Your Data with Estuary Flow: GDPR, CCPA, CPRA Compliant & SOC 2 Type II Certified"
                        src="../../../../svgs/product-page/section-ten/secure-data.svg"
                        layout="constrained"
                        loading="lazy"
                    />
                }
                title={
                    <>
                        <span>SECURE</span> YOUR DATA
                    </>
                }
                subtitle="Estuary Flow is designed and tested to make sure your data and your systems stay secure. "
                image={
                    <StaticImage
                        placeholder="none"
                        alt="Secure Your Data with Estuary Flow: Compliance and Certification"
                        src="../../../../images/product-page/section-ten/gdpr-ccpa-cpra-soc2-type2-compliant.png"
                        layout="constrained"
                        loading="lazy"
                        quality={100}
                    />
                }
                advantages={[
                    {
                        id: 14,
                        title: 'Estuary never stores your data.',
                    },
                    {
                        id: 15,
                        title: 'GDPR, CCPA and CPRA compliant.',
                    },
                    {
                        id: 16,
                        title: 'SOC 2 Type II certified.',
                    },
                ]}
            />
        </DefaultWrapperDark>
    );
};

export default UnifiedDataStack;
