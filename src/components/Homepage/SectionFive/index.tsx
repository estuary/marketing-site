import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import ReactPlayer from 'react-player';
import { estuaryProductFlowVideoUrl } from '../../../../shared';
import useWindowExistence from '../../../hooks/useWindowExistence';
import PlayIcon from '../../../svgs/play.svg';
import {
    Button,
    Container,
    Description,
    Title,
    VideoTextAndButton,
    VideoWrapper,
    Wrapper,
} from './styles';

const SectionFive = () => {
    const hasWindow = useWindowExistence();

    return (
        <Container>
            <Wrapper>
                <Title>
                    <span>Built </span>
                    in minutes
                </Title>
                <Description>
                    Use the UI to quickly build end-to-end pipelines using
                    no-code connectors. Estuary Flow does the rest.
                </Description>
                {hasWindow ? (
                    <VideoWrapper>
                        <ReactPlayer
                            light={
                                <StaticImage
                                    placeholder="none"
                                    alt="estuary flow product end to end demo video"
                                    src="../../../images/end-to-end-demo-video-thumbnail.png"
                                    className="section-five-product-video-thumbnail"
                                    layout="constrained"
                                />
                            }
                            url={estuaryProductFlowVideoUrl}
                            width="100%"
                            height="100%"
                            playIcon={
                                <VideoTextAndButton>
                                    <span>
                                        Watch our 80 second end-to-end demo!
                                    </span>
                                    <Button>
                                        <PlayIcon />
                                        <span>Play Video</span>
                                    </Button>
                                </VideoTextAndButton>
                            }
                        />
                    </VideoWrapper>
                ) : null}
            </Wrapper>
        </Container>
    );
};

export default SectionFive;
