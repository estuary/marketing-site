import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import ReactPlayer from 'react-player';
import { estuaryProductFlowVideoUrl } from '../../../shared';
import PlayIcon from '../../svgs/play.svg';
import { Button, Container, VideoTextAndButton } from './styles';

const FlowDemoVideo = () => {
    return (
        <Container>
            <ReactPlayer
                light={
                    <StaticImage
                        placeholder="none"
                        alt="estuary flow product end to end demo video"
                        src="../../images/end-to-end-demo-video-thumbnail.png"
                        className="section-five-product-video-thumbnail"
                        layout="constrained"
                        style={{ borderRadius: '12px' }}
                    />
                }
                url={estuaryProductFlowVideoUrl}
                width="100%"
                height="100%"
                playIcon={
                    <VideoTextAndButton>
                        <span>Watch our 80 second end-to-end demo!</span>
                        <Button>
                            <PlayIcon />
                            <span>Play Video</span>
                        </Button>
                    </VideoTextAndButton>
                }
            />
        </Container>
    );
};

export default FlowDemoVideo;
