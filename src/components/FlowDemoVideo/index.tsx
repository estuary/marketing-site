import { StaticImage } from 'gatsby-plugin-image';
import ReactPlayer from 'react-player';
import { useMemo } from 'react';
import { estuaryProductFlowVideoUrl } from '../../../shared';
import useWindowExistence from '../../hooks/useWindowExistence';
import PlayIcon from '../../svgs/play.svg';
import ButtonFilled from '../LinksAndButtons/ButtonFilled';
import { container, videoTextAndButtonsWrapper } from './styles.module.less';

const FlowDemoVideo = () => {
    const hasWindow = useWindowExistence();

    const thumbnailComponent = useMemo(
        () => (
            <StaticImage
                placeholder="none"
                alt="estuary flow product end to end demo video"
                src="../../images/end-to-end-demo-video-thumbnail.png"
                style={{ borderRadius: '12px' }}
            />
        ),
        []
    );

    return hasWindow ? (
        <div className={container}>
            <ReactPlayer
                light={thumbnailComponent}
                url={estuaryProductFlowVideoUrl}
                width="100%"
                height="100%"
                playIcon={
                    <div className={videoTextAndButtonsWrapper}>
                        <span>Watch our 80 second end-to-end demo!</span>
                        <ButtonFilled>
                            <PlayIcon />
                            <span>Play Video</span>
                        </ButtonFilled>
                    </div>
                }
            />
        </div>
    ) : null;
};

export default FlowDemoVideo;
