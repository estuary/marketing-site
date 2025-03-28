import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import Advantages from '../../Advantages';
import { estuaryFlowAdvantages } from '../advantages';

const RealTimeAndBatch = () => {
    return (
        <section className={defaultWrapperGrey}>
            <Advantages
                title={
                    <>
                        WHY <span>ESTUARY FLOW</span> IS THE BEST CHOICE FOR{' '}
                        <span>DATA INTEGRATION</span>
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
