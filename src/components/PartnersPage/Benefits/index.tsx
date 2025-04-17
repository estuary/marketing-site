import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Card from '../../Card';
import TopPlatformIcon from '../../../svgs/success.svg';
import IndustryTrendsIcon from '../../../svgs/industry-trends.svg';
import EngineerIcon from '../../../svgs/engineer.svg';
import ConnectorsIcon from '../../../svgs/connectors.svg';
import { container, cardList, subContainer } from './styles.module.less';

const Benefits = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container isDarkTheme isVertical className={container}>
                <h2>Partner benefits</h2>
                <div className={subContainer}>
                    <StaticImage
                        src="../../../images/partners-page/digital-gift-card.png"
                        alt="Benefits of partnering with Estuary: Top Platform, Industry Trends and Partner Benefits for real-time data integration."
                        quality={100}
                        placeholder="blurred"
                    />
                    <div className={cardList}>
                        <Card
                            Icon={TopPlatformIcon}
                            title="Co-marketing initiatives"
                            isDarkTheme
                        >
                            Publish content together with Estuary and
                            cross-market new initiatives and product launches
                            for increased reach.
                        </Card>
                        <Card
                            Icon={IndustryTrendsIcon}
                            title="Referral Incentive"
                            isDarkTheme
                        >
                            Estuary offers an incentive after a deal is made
                            through a partner referral.
                        </Card>
                        <Card
                            Icon={EngineerIcon}
                            title="First-Party Support"
                            isDarkTheme
                        >
                            Gain first-party support from Estuary developers to
                            ensure your integrations are seamless and effective.
                        </Card>
                        <Card
                            Icon={ConnectorsIcon}
                            title="First-Party Connectors"
                            isDarkTheme
                        >
                            Technology partners may receive a first-party
                            connector to enhance integration with Estuary Flow.
                        </Card>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Benefits;
