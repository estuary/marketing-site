import React from 'react';
import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import {
    globalMaxWidth,
    sectionOneImageWrapper,
} from '../../../globalStyles/sections.module.less';
import { OutboundLinkFilled } from '../../OutboundLink';
import { LinkOutlined } from '../../../globalStyles';
import { dashboardRegisterUrl } from '../../../../shared';
import {
    container,
    title,
    contentContainer,
    description,
    buttonsContainer,
} from './styles.module.less';

const SectionOne = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <div className={clsx(container, globalMaxWidth)}>
                <div className={contentContainer}>
                    <h1 className={title}>SIMPLY PRICED, PAY AS YOU GO</h1>
                    <p className={description}>
                        Stop trying to guess your monthly bill based on
                        &apos;monthly active rows.&apos; Get instant back-fills
                        without instant bad-bills. We price predictably, on {''}
                        <span>GB of change data</span> moved per month and {''}
                        <span>active connectors.</span>
                    </p>
                    <div className={buttonsContainer}>
                        <OutboundLinkFilled
                            target="_blank"
                            href={dashboardRegisterUrl}
                        >
                            Build Free Pipeline
                        </OutboundLinkFilled>
                        <LinkOutlined
                            href="/contact-us"
                            target="_blank"
                            theme="dark"
                        >
                            Contact Us
                        </LinkOutlined>
                    </div>
                </div>
                <div className={sectionOneImageWrapper}>
                    <StaticImage
                        src="../../../images/pricing/illustration.png"
                        alt="It was just one insert though."
                        quality={100}
                        placeholder="none"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionOne;
