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
        <StraightLinesBackground className={background}>
            <div className={container}>
                <div className={banner}>
                    <h3>{title}</h3>
                    <OutboundLinkFilled href={button.href} target="_blank">
                        {button.title}
                    </OutboundLinkFilled>
                </div>
            </div>
        </StraightLinesBackground>
    );
};

export default BlogBanner;
