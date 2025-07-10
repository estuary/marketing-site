import ReactPlayer from 'react-player';
import { useState } from 'react';
import clsx from 'clsx';
import useWindowExistence from '../../hooks/useWindowExistence';
import PlayIcon from '../../svgs/play.svg';
import ButtonFilled from '../LinksAndButtons/ButtonFilled';
import {
    container,
    videoTextAndButtonsWrapper,
    noButtonMarginBottom,
} from './styles.module.less';

interface VideoProps {
    thumbnail: JSX.Element;
    url: string;
    pageId: string;
    title?: string;
    width?: string;
    height?: string;
}

const Video = ({
    thumbnail,
    url,
    pageId,
    title,
    width,
    height,
}: VideoProps) => {
    const hasWindow = useWindowExistence();
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePreviewClick = () => setIsPlaying(true);

    if (!hasWindow) return null;

    return (
        <div className={container} style={{ width, height }}>
            <ReactPlayer
                light={thumbnail}
                url={url}
                width="100%"
                height="100%"
                playing={isPlaying}
                onClickPreview={handlePreviewClick}
                controls
                playIcon={
                    <div
                        className={clsx(
                            videoTextAndButtonsWrapper,
                            noButtonMarginBottom
                        )}
                    >
                        {title ? <span>{title}</span> : null}
                        <ButtonFilled id={`play-video-button/${pageId}`}>
                            <PlayIcon />
                            <span>Play Video</span>
                        </ButtonFilled>
                    </div>
                }
            />
        </div>
    );
};

export default Video;
