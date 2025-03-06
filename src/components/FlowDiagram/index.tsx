import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import {
    desktopImage,
    mobileImage,
    diagram,
    diagramCards,
} from './styles.module.less';

interface HomepageFlowDiagramProps {
    DiagramCardsClassName?: string;
    hasDesktopImageOnly?: boolean;
}

const HomepageFlowDiagram = ({
    DiagramCardsClassName,
    hasDesktopImageOnly = false,
}: HomepageFlowDiagramProps) => {
    return (
        <div className={diagram}>
            <div className={clsx(diagramCards, DiagramCardsClassName)}>
                <h4>Connect to Data Source</h4>
                <h4>Put Your Data to Work</h4>
                <div>
                    <span>CDC & Real-time Streams</span>
                </div>
                <div>
                    <span>Files & Databases</span>
                </div>
                <div>
                    <span>Apps & Cloud Services</span>
                </div>
                <div>
                    <span>Analytics</span>
                </div>
                <div>
                    <span>Operations</span>
                </div>
                <div>
                    <span>AI</span>
                </div>
                <div>
                    <h4>Combine & Transform</h4>
                </div>
            </div>
            <StaticImage
                placeholder="blurred"
                alt=""
                src="../../images/homepage/move-and-transform-data.png"
                quality={100}
                className={hasDesktopImageOnly ? null : desktopImage}
            />
            {hasDesktopImageOnly ? null : (
                <StaticImage
                    placeholder="blurred"
                    alt=""
                    src="../../images/homepage/move-and-transform-data-mobile.png"
                    quality={100}
                    className={mobileImage}
                    layout="fullWidth"
                />
            )}
        </div>
    );
};

export default HomepageFlowDiagram;
