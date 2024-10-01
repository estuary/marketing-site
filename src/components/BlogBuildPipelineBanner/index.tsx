import React from 'react';
import StraightLinesBackground from '../BackgroundImages/StraightLinesBackground';
import { OutboundLinkFilled } from '../OutboundLink';
import { dashboardRegisterUrl } from '../../../shared';
import { background, container, banner } from './styles.module.less';

const BlogBuildPipelineBanner = () => {
    return (
        <StraightLinesBackground className={background}>
            <div className={container}>
                <div className={banner}>
                    <h3>
                        Start streaming your data <span>for free</span>
                    </h3>
                    <OutboundLinkFilled
                        href={dashboardRegisterUrl}
                        target="_blank"
                    >
                        Build a Pipeline
                    </OutboundLinkFilled>
                </div>
            </div>
        </StraightLinesBackground>
    );
};

export default BlogBuildPipelineBanner;
