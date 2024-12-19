import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import Card from '../Card';
import CdcBackground from '../../../../../components/BackgroundImages/CdcBackground';
import {
    container,
    containerCards,
    containerCardsReverse,
} from './styles.module.less';

const TheAutomationCards = ({ reverseDesktop = false }) => {
    return (
        <CdcBackground className={container}>
            <div className={containerCards}>
                <Card
                    title="HIGH THROUGHPUT"
                    description="Distributed event-driven architecture enable boundless scaling with exactly-once semantics."
                >
                    <StaticImage
                        alt="icon-2"
                        src="../../../../../images/lp-connector/change-data/icon-02.png"
                    />
                </Card>
                <Card
                    title="DURABLE REPLICATION"
                    description="Cloud storage backed CDC w/ heart beats ensures reliability, even if your destination is down."
                >
                    <StaticImage
                        alt="icon-3"
                        src="../../../../../images/lp-connector/change-data/icon-03.png"
                    />
                </Card>
            </div>
            <div
                className={clsx(
                    containerCards,
                    reverseDesktop ? containerCardsReverse : null
                )}
            >
                <Card
                    title="REAL-TIME INGESTION"
                    description="Capture and relay every  insert, update, and delete in milliseconds."
                >
                    <StaticImage
                        alt="icon-1"
                        src="../../../../../images/lp-connector/change-data/icon-01.png"
                    />
                </Card>
            </div>
        </CdcBackground>
    );
};

export default TheAutomationCards;
