import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { DefaultWrapperDark } from '../../../styles/wrappers';
import Advantages from '../Advantages';
import { sectionTenAdvantages } from '../Advantages/advantages';

const SectionTen = () => {
    return (
        <DefaultWrapperDark>
            <Advantages
                icon={
                    <StaticImage
                        placeholder="none"
                        alt="Secure Your Data with Estuary Flow: GDPR, CCPA, CPRA Compliant & SOC 2 Type II Certified"
                        src="../../../svgs/product-page/section-ten/secure-data.svg"
                        layout="constrained"
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
                        src="../../../images/product-page/section-ten/gdpr-ccpa-cpra-soc2-type2-compliant.png"
                        layout="constrained"
                        quality={100}
                    />
                }
                advantages={sectionTenAdvantages}
            />
        </DefaultWrapperDark>
    );
};

export default SectionTen;