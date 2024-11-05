import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import TopPlatformIcon from '../../../svgs/top-platform.svg';
import IndustryTrendsIcon from '../../../svgs/industry-trends.svg';
import PartnerBenefitsIcon from '../../../svgs/partner-benefits.svg';
import Card from './Card';
import { container, cardList } from './styles.module.less';

const WhyPartnerWithEstuary = () => (
    <section className={defaultWrapperGrey}>
        <div className={container}>
            <h2>WHY PARTNER WITH ESTUARY?</h2>
            <p>Revolutionize Data Integration</p>
            <div className={cardList}>
                <Card
                    icon={<TopPlatformIcon color="#5072EB" />}
                    title="Top Platform"
                    description="Estuary Flow is ranked as a top real-time data integration platform, empowering organizations to synchronize data seamlessly across their systems."
                />
                <Card
                    icon={<IndustryTrendsIcon color="#5072EB" />}
                    title="Industry Trends"
                    description="According to industry trends, real-time data integration is crucial for enterprises to stay competitive, providing up-to-date insights for better decision-making."
                />
                <Card
                    icon={<PartnerBenefitsIcon color="#5072EB" />}
                    title="Partner Benefits"
                    description="Real-time data integration is essential for modern businesses, and partnering with Estuary ensures your clients can harness the power of up-to-date information."
                />
            </div>
        </div>
    </section>
);

export default WhyPartnerWithEstuary;
