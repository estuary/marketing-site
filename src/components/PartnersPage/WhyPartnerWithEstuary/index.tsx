import React from 'react';
import TopPlatformIcon from '../../../svgs/success.svg';
import IndustryTrendsIcon from '../../../svgs/industry-trends.svg';
import PartnerBenefitsIcon from '../../../svgs/give-access.svg';
import Card from '../../Card';
import CardsSection from '../../CardsSection';

const WhyPartnerWithEstuary = () => (
    <CardsSection
        title="WHY PARTNER WITH ESTUARY?"
        description="Revolutionize Data Integration"
    >
        <Card Icon={TopPlatformIcon} title="Top Platform">
            Estuary Flow is ranked as a top real-time data integration platform,
            empowering organizations to synchronize data seamlessly across their
            systems.
        </Card>
        <Card Icon={IndustryTrendsIcon} title="Industry Trends">
            According to industry trends, real-time data integration is crucial
            for enterprises to stay competitive, providing up-to-date insights
            for better decision-making.
        </Card>
        <Card Icon={PartnerBenefitsIcon} title="Partner Benefits">
            Real-time data integration is essential for modern businesses, and
            partnering with Estuary ensures your clients can harness the power
            of up-to-date information.
        </Card>
    </CardsSection>
);

export default WhyPartnerWithEstuary;
