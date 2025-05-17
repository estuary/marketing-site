import { StaticImage } from 'gatsby-plugin-image';
import Advantages from '../../Advantages';
import LinkFilled from '../../LinksAndButtons/LinkFilled';

const TheBestRealTimeCdc = () => {
    return (
        <section>
            <Advantages
                title={
                    <>
                        Use the best <span>real-time CDC</span>
                    </>
                }
                subtitle="Estuary Flow is the most real-time, most reliable change
                            data capture (CDC) available today. It is the only CDC
                            with:"
                image={
                    <StaticImage
                        src="../../../images/real-time-graphic.png"
                        alt="Real-time ETL with Estuary Flow: Seamlessly move data from source to destination for immediate analysis and actionable insights."
                        placeholder="none"
                        quality={100}
                    />
                }
                advantages={[
                    {
                        id: 18,
                        title: 'Sub-100ms end-to-end latency',
                    },
                    {
                        id: 19,
                        title: 'Reliable delivery via exactly-once guarantees',
                    },
                    {
                        id: 20,
                        title: 'Flexible pipelines that run at your speed of choice',
                    },
                    {
                        id: 21,
                        title: 'Fully automated schema evolution',
                    },
                    {
                        id: 22,
                        title: 'Ability to maintain a current view or all change history in the destination',
                    },
                    {
                        id: 23,
                        title: 'Truly elastic scaling pipelines for maximum throughput',
                    },
                ]}
                ctaButtons={
                    <LinkFilled
                        id="view-connectors-button/home-page"
                        href="/integrations/"
                    >
                        View Connectors
                    </LinkFilled>
                }
            />
        </section>
    );
};

export default TheBestRealTimeCdc;
