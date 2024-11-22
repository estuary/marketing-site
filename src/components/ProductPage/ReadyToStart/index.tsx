import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import CalendarIcon from '../../../svgs/product-page/section-fourteen/calendar.svg';
import LoginIcon from '../../../svgs/product-page/section-fourteen/login.svg';
import { dashboardRegisterUrl } from '../../../../shared';
import Container from '../../Container';
import OutboundLinkOutlined from '../../LinksAndButtons/OutboundLinkOutlined';
import LinkOutlined from '../../LinksAndButtons/LinkOutlined';
import {
    boxes,
    columns,
    contactUsBox,
    getStartedBox,
    iconWrapper,
    imageWrapper,
    textWrapper,
    sectionTitle,
} from './styles.module.less';

const iconColor = '#5072EB';

const ReadyToStart = () => {
    return (
        <section className={defaultWrapperDark}>
            <Container isVertical>
                <h2 className={sectionTitle}>READY TO START?</h2>
                <div className={columns}>
                    <div className={boxes}>
                        <div className={getStartedBox}>
                            <div className={textWrapper}>
                                <h3>BUILD A PIPELINE</h3>
                                <p>
                                    Try out Estuary free, and build a new
                                    pipeline in minutes.
                                </p>
                            </div>
                            <OutboundLinkOutlined
                                href={dashboardRegisterUrl}
                                target="_blank"
                            >
                                <div className={iconWrapper}>
                                    <LoginIcon color={iconColor} />
                                </div>
                                GET STARTED
                            </OutboundLinkOutlined>
                        </div>
                        <div className={contactUsBox}>
                            <div className={textWrapper}>
                                <h3>SET UP AN APPOINTMENT</h3>
                                <p>
                                    Set up an appointment to get a personalized
                                    overview.
                                </p>
                            </div>
                            <LinkOutlined href="/contact-us/">
                                <div className={iconWrapper}>
                                    <CalendarIcon color={iconColor} />
                                </div>
                                CONTACT US
                            </LinkOutlined>
                        </div>
                    </div>
                    <div className={imageWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Rocket image"
                            src="../../../images/product-page/section-fourteen/rocket.png"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ReadyToStart;
