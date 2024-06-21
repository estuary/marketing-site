import React from 'react';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import FlowDemoVideo from '../../../../components/FlowDemoVideo';
import { DefaultWrapper } from '../../../../styles/wrappers';
import Step from './Step';
import {
    Container,
    Steps,
    Subtitle,
    TextWrapper,
    Title,
    VideoWrapper,
} from './styles';

const OurConnectors = () => {
    return (
        <DefaultWrapper>
            <Container>
                <TextWrapper>
                    <Title>
                        CREATE A DATA PIPELINE IN <span>MINUTES</span>
                    </Title>
                    <Subtitle>
                        Build new data pipelines that connect many sources to
                        many destinations in minutes.
                    </Subtitle>
                </TextWrapper>
                <Steps>
                    <Step
                        number={1}
                        text="Add 100s of sources and destinations using no-code connectors for streaming CDC, real-time, batch, and SaaS."
                        link={<Link to="/integrations">see connectors</Link>}
                        icon={
                            <StaticImage
                                placeholder="none"
                                alt="Create a data pipeline - Step 1"
                                src="../../../../svgs/product-page/section-four/schema.svg"
                                layout="constrained"
                                loading="lazy"
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
                                src="../../../../svgs/product-page/section-four/real-time-data.svg"
                                layout="constrained"
                                loading="lazy"
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
                                src="../../../../svgs/product-page/section-four/data-computer.svg"
                                layout="constrained"
                                loading="lazy"
                            />
                        }
                    />
                </Steps>
                <VideoWrapper>
                    <FlowDemoVideo />
                </VideoWrapper>
            </Container>
        </DefaultWrapper>
    );
};

export default OurConnectors;
