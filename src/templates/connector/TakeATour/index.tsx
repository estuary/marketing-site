import { StaticImage } from 'gatsby-plugin-image';
import ReactPlayer from 'react-player';
import { estuaryProductFlowVideoUrl } from '../../../../shared';
import useWindowExistence from '../../../hooks/useWindowExistence';
import { containerIcon } from '../styles.module.less';
import Container from '../../../components/Container';
import BubblesCircleBackground from '../../../components/BackgroundImages/BubblesCircleBackground';
import {
    containerButton,
    containerContent,
    containerIcons,
    containerLeft,
    estuaryProductVideo,
    videoPreviewContainer,
    estuaryproductvideoThumbnail,
} from './styles.module.less';
import TakeATourButtons from './TakeATourButtons';

const TakeATour = () => {
    // We are not using this section anymore. Is it okay if we remove it?
    const hasWindow = useWindowExistence();

    return (
        <section>
            <Container isReverseColumnOnMobile>
                <BubblesCircleBackground className={containerLeft}>
                    {hasWindow ? (
                        <ReactPlayer
                            light={
                                <div className={videoPreviewContainer}>
                                    <StaticImage
                                        quality={90}
                                        placeholder="none"
                                        alt="estuary flow product video"
                                        src="../../../images/homepage-product-video.svg"
                                        className={estuaryproductvideoThumbnail}
                                    />
                                </div>
                            }
                            url={estuaryProductFlowVideoUrl}
                            className={estuaryProductVideo}
                        />
                    ) : null}
                </BubblesCircleBackground>
                <div className={containerContent}>
                    <div className={containerIcons}>
                        <div className={containerIcon}>
                            <StaticImage
                                alt="Microsoft Logo"
                                src="../../../images/microsoft-logo.png"
                                width={46}
                                height={46}
                                quality={100}
                            />
                        </div>
                        <div className={containerIcon}>
                            <StaticImage
                                alt="AWS Logo"
                                src="../../../images/aws-logo.png"
                                width={46}
                                height={46}
                                quality={100}
                            />
                        </div>
                        <div className={containerIcon}>
                            <StaticImage
                                alt="Google Cloud Logo"
                                src="../../../images/google-cloud-logo.png"
                                width={46}
                                height={46}
                                quality={100}
                            />
                        </div>
                    </div>
                    <h2>TAKE A TOUR</h2>
                    <p>
                        Learn more about how Estuary can help with real-time
                        replication.
                    </p>
                    <div className={containerButton}>
                        <TakeATourButtons />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TakeATour;
