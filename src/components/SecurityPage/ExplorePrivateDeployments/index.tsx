import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import Advantages from '../../Advantages';
import SecureDataIcon from '../../../svgs/secure-data.svg';
import { docsPageUrl } from '../../../../shared';
import LinkFilled from '../../LinksAndButtons/LinkFilled';
import OutboundLinkOutlined from '../../LinksAndButtons/OutboundLinkOutlined';

const ExplorePrivateDeployments = () => (
    <section className={defaultWrapperGrey}>
        <Advantages
            isImageOnTheLeft
            icon={<SecureDataIcon color="var(--blue)" />}
            title={
                <>
                    EXPLORE PRIVATE DEPLOYMENTS FOR{' '}
                    <span>ENHANCED SECURITY</span>
                </>
            }
            subtitle="Maintain full control of your data with private deployments, ensuring maximum security and compliance within your own infrastructure."
            image={
                <StaticImage
                    placeholder="none"
                    alt="Private deployments for maximum data control and security."
                    src="../../../images/security-page/explore-private-deployments.png"
                    quality={100}
                />
            }
            ctaButtons={
                <>
                    <LinkFilled href="/contact-us/">Contact Us</LinkFilled>
                    <OutboundLinkOutlined
                        href={`${docsPageUrl}/getting-started/deployment-options/`}
                        target="__blank"
                        variant="secondary"
                    >
                        Explore Documentation
                    </OutboundLinkOutlined>
                </>
            }
        />
    </section>
);

export default ExplorePrivateDeployments;
