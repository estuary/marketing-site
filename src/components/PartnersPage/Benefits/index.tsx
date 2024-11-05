import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Card from '../Card';
import TopPlatformIcon from '../../../svgs/top-platform.svg';
import IndustryTrendsIcon from '../../../svgs/industry-trends.svg';
import EngineerIcon from '../../../svgs/engineer.svg';
import ConnectorsIcon from '../../../svgs/connectors.svg';
import { container, cardList, subContainer } from './styles.module.less';

const Benefits = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container isDarkTheme isVertical className={container}>
                <h2>PARTNER BENEFITS</h2>
                <div className={subContainer}>
                    <StaticImage
                        src="../../../images/partners-page/digital-gift-card.png"
                        alt="Benefits of partnering with Estuary: Top Platform, Industry Trends and Partner Benefits for real-time data integration."
                        quality={100}
                        placeholder="blurred"
                    />
                    <div className={cardList}>
                        <Card
                            icon={<TopPlatformIcon color="#5072EB" />}
                            title="Co-marketing initiatives"
                            description="Publish content together with Estuary and cross-market new initiatives and product launches for increased reach."
                            isDarkTheme
                        />
                        <Card
                            icon={<IndustryTrendsIcon color="#5072EB" />}
                            title="Referral Incentive"
                            description="Estuary offers a referral incentive of 10% of the yearly contract after a deal is made through a referral."
                            isDarkTheme
                        />
                        <Card
                            icon={<EngineerIcon color="#5072EB" />}
                            title="First-Party Support"
                            description="Gain first-party support from Estuary developers to ensure your integrations are seamless and effective."
                            isDarkTheme
                        />
                        <Card
                            icon={<ConnectorsIcon color="#5072EB" />}
                            title="First-Party Connectors"
                            description="Technology partners receive a first-party connector to enhance integration with Estuary Flow."
                            isDarkTheme
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Benefits;
