import React, { ReactNode } from 'react';
import StraightLinesBackground from '../BackgroundImages/StraightLinesBackground';
import { OutboundLinkFilled } from '../OutboundLink';
import { background, container, banner } from './styles.module.less';

interface BlogBanner {
    title: ReactNode;
    button: {
        title: string;
        href: string;
    };
}

const BlogBanner = ({ title, button }: BlogBanner) => {
    return (
        <div className={background}>
            <StraightLinesBackground className={container}>
                <div className={banner}>
                    {title}
                    <OutboundLinkFilled href={button.href} target="_blank">
                        {button.title}
                    </OutboundLinkFilled>
                </div>
            </StraightLinesBackground>
        </div>
    );
};

export default BlogBanner;
