import { StaticImage } from 'gatsby-plugin-image';
import { estuaryProductFlowVideoUrl } from '../../../shared';
import useWindowExistence from '../../hooks/useWindowExistence';
import Video from '../Video';

interface FlowDemoVideo {
    pageId: string;
}

const FlowDemoVideo = ({ pageId }) => {
    const hasWindow = useWindowExistence();

    if (!hasWindow) return null;

    return (
        <Video
            thumbnail={
                <StaticImage
                    placeholder="none"
                    alt="estuary flow product end to end demo video"
                    src="../../images/overview-video-thumbnail.png"
                    style={{ borderRadius: '12px' }}
                />
            }
            url={estuaryProductFlowVideoUrl}
            title="See Estuary in action — watch our 2-minute overview!"
            pageId={pageId}
        />
    );
};

export default FlowDemoVideo;
