import { StaticImage } from 'gatsby-plugin-image';
import Advantages from '../../Advantages';
import { estuaryFlowAdvantages } from '../advantages';

const RealTimeAndBatch = () => {
    return (
        <section>
            <Advantages
                title={
                    <>
                        Why <span>Estuary Flow</span> is the best choice for{' '}
                        <span>data integration</span>
                    </>
                }
                subtitle="Estuary Flow combines the most real-time, streaming change data capture (CDC), and batch connectors together into a unified modern data pipeline:"
                image={
                    <StaticImage
                        src="../../../images/real-time-graphic.png"
                        alt="Real-time ETL with Estuary Flow: Seamlessly move data from source to destination for immediate analysis and actionable insights."
                        placeholder="none"
                        quality={100}
                    />
                }
                advantages={estuaryFlowAdvantages}
            />
        </section>
    );
};

export default RealTimeAndBatch;
