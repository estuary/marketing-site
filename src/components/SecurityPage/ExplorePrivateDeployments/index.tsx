import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import Advantages from '../../Advantages';
import SecureDataIcon from '../../../svgs/secure-data.svg';
import { LinkFilled } from '../../../globalStyles';
import { OutboundLinkOutlined } from '../../OutboundLink';
import { docsPageUrl } from '../../../../shared';

const ExplorePrivateDeployments = () => (
    <section className={defaultWrapperGrey}>
        <Advantages
            isImageOnTheLeft
            icon={<SecureDataIcon color="#5072EB" />}
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
                    <OutboundLinkOutlined href={docsPageUrl} target="__blank">
                        Explore Documentation
                    </OutboundLinkOutlined>
                </>
            }
        />
    </section>
);

export default ExplorePrivateDeployments;
