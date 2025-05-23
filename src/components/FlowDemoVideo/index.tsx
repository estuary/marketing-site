import { StaticImage } from 'gatsby-plugin-image';
import ReactPlayer from 'react-player';
import { useState, useMemo } from 'react';
import { estuaryProductFlowVideoUrl } from '../../../shared';
import useWindowExistence from '../../hooks/useWindowExistence';
import PlayIcon from '../../svgs/play.svg';
import ButtonFilled from '../LinksAndButtons/ButtonFilled';
import { container, videoTextAndButtonsWrapper } from './styles.module.less';

const FlowDemoVideo = () => {
    const hasWindow = useWindowExistence();
    const [isPlaying, setIsPlaying] = useState(false);

    const thumbnailComponent = useMemo(
        () => (
            <StaticImage
                placeholder="none"
                alt="estuary flow product end to end demo video"
                src="../../images/overview-video-thumbnail.png"
                style={{ borderRadius: '12px' }}
            />
        ),
        []
    );

    const handlePreviewClick = () => setIsPlaying(true);

    if (!hasWindow) return null;

    return (
        <div className={container}>
            <ReactPlayer
                light={thumbnailComponent}
                url={estuaryProductFlowVideoUrl}
                width="100%"
                height="100%"
                playing={isPlaying}
                onClickPreview={handlePreviewClick}
                controls
                playIcon={
                    <div className={videoTextAndButtonsWrapper}>
                        <span>
                            See Estuary in action — watch our 2-minute overview!
                        </span>
                        <ButtonFilled id="play-video-button">
                            <PlayIcon />
                            <span>Play Video</span>
                        </ButtonFilled>
                    </div>
                }
            />
        </div>
    );
};

export default FlowDemoVideo;
