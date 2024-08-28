import React from 'react';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { DefaultWrapper } from '../../../styles/wrappers';
import FlowDemoVideo from '../../FlowDemoVideo';
import Step from './Step';
import {
    Container,
    Steps,
    Subtitle,
    TextWrapper,
    Title,
    VideoWrapper,
} from './styles';

const SectionFour = () => {
    return (
        <DefaultWrapper>
            <Container>
                <TextWrapper>
                    <Title className="text">
                        CREATE A DATA PIPELINE IN <span>MINUTES</span>
                    </Title>
                    <Subtitle className="text">
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
                </Steps>
                <VideoWrapper>
                    <FlowDemoVideo />
                </VideoWrapper>
            </Container>
        </DefaultWrapper>
    );
};

export default SectionFour;
