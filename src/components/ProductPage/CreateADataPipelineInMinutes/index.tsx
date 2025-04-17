import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import FlowDemoVideo from '../../FlowDemoVideo';
import Container from '../../Container';
import { sectionTopBottomPadding } from '../../../globalStyles/sections.module.less';
import Step from '../../StepCards/Step';
import StepCards from '../../StepCards';
import { textWrapper } from './styles.module.less';

const CreateADataPipelineInMinutes = () => {
    return (
        <section className={sectionTopBottomPadding}>
            <Container isVertical>
                <div className={textWrapper}>
                    <h2>
                        Create a data pipeline in <span>minutes</span>
                    </h2>
                    <p>
                        Build new data pipelines that connect many sources to
                        many destinations in minutes.
                    </p>
                </div>
                <StepCards>
                    <Step
                        title="1"
                        description="Add 100s of sources and destinations using no-code connectors for streaming CDC, real-time, batch, and SaaS."
                        link={<Link to="/integrations">see connectors</Link>}
                        step={
                            <StaticImage
                                placeholder="none"
                                alt="Create a data pipeline - Step 1"
                                src="../../../svgs/product-page/section-four/schema.svg"
                            />
                        }
                    />
                    <Step
                        title="2"
                        description="Choose any speed for each connection from real-time to hour+ batch; schedule fast updates when you need them to save money."
                        step={
                            <StaticImage
                                placeholder="none"
                                alt="Create a data pipeline - Step 2"
                                src="../../../svgs/product-page/section-four/real-time-data.svg"
                            />
                        }
                    />
                    <Step
                        title="3"
                        description="Write in-place updates or the full change history into a destination."
                        step={
                            <StaticImage
                                placeholder="none"
                                alt="Create a data pipeline - Step 3"
                                src="../../../svgs/product-page/section-four/data-computer.svg"
                            />
                        }
                    />
                </StepCards>
                <FlowDemoVideo />
            </Container>
        </section>
    );
};

export default CreateADataPipelineInMinutes;
