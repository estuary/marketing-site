import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import TopPlatformIcon from '../../../svgs/top-platform.svg';
import IndustryTrendsIcon from '../../../svgs/industry-trends.svg';
import PartnerBenefitsIcon from '../../../svgs/partner-benefits.svg';
import Card from '../Card';
import { container, cardList } from './styles.module.less';

const WhyPartnerWithEstuary = () => (
    <section className={defaultWrapperGrey}>
        <div className={container}>
            <h2>WHY PARTNER WITH ESTUARY?</h2>
            <p>Revolutionize Data Integration</p>
            <div className={cardList}>
                <Card Icon={TopPlatformIcon} title="Top Platform">
                    Estuary Flow is ranked as a top real-time data integration
                    platform, empowering organizations to synchronize data
                    seamlessly across their systems.
                </Card>
                <Card Icon={IndustryTrendsIcon} title="Industry Trends">
                    According to industry trends, real-time data integration is
                    crucial for enterprises to stay competitive, providing
                    up-to-date insights for better decision-making.
                </Card>
                <Card Icon={PartnerBenefitsIcon} title="Partner Benefits">
                    Real-time data integration is essential for modern
                    businesses, and partnering with Estuary ensures your clients
                    can harness the power of up-to-date information.
                </Card>
            </div>
        </div>
    </section>
);

export default WhyPartnerWithEstuary;
