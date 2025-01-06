import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import FlowDemoVideo from '../../FlowDemoVideo';
import Container from '../../Container';
import { sectionTopBottomPadding } from '../../../globalStyles/sections.module.less';
import Step from './Step';
import { steps, textWrapper } from './styles.module.less';

const CreateADataPipelineInMinutes = () => {
    return (
        <section className={sectionTopBottomPadding}>
            <Container isVertical>
                <div className={textWrapper}>
                    <h2>
                        CREATE A DATA PIPELINE IN <span>MINUTES</span>
                    </h2>
                    <p>
                        Build new data pipelines that connect many sources to
                        many destinations in minutes.
                    </p>
                </div>
                <div className={steps}>
                    <Step
                        number={1}
                        text="Add 100s of sources and destinations using no-code connectors for streaming CDC, real-time, batch, and SaaS."
                        link={<Link to="/integrations">see connectors</Link>}
                        icon={
                            <StaticImage
                                placeholder="none"
                                alt="Create a data pipeline - Step 1"
                                src="../../../svgs/product-page/section-four/schema.svg"
                            />
                        }
                    />
                    <Step
                        number={2}
                        text="Choose any speed for each connection from real-time to hour+ batch; schedule fast updates when you need them to save money."
                        icon={
                            <StaticImage
                                placeholder="none"
                                alt="Create a data pipeline - Step 2"
                                src="../../../svgs/product-page/section-four/real-time-data.svg"
                            />
                        }
                    />
                    <Step
                        number={3}
                        text="Write in-place updates or the full change history into a destination."
                        icon={
                            <StaticImage
                                placeholder="none"
                                alt="Create a data pipeline - Step 3"
                                src="../../../svgs/product-page/section-four/data-computer.svg"
                            />
                        }
                    />
                </div>
                <FlowDemoVideo />
            </Container>
        </section>
    );
};

export default CreateADataPipelineInMinutes;
