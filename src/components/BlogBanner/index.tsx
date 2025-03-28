import { ReactNode } from 'react';
import clsx from 'clsx';
import StraightLinesBackground from '../BackgroundImages/StraightLinesBackground';
import OutboundLinkFilled from '../LinksAndButtons/OutboundLinkFilled';
import {
    background,
    container,
    darkContainer,
    banner,
    darkBanner,
} from './styles.module.less';

interface BlogBanner {
    title: ReactNode;
    button: {
        id: string;
        title: string;
        href: string;
    };
    isDarkTheme?: boolean;
}

const BlogBanner = ({ title, button, isDarkTheme = false }: BlogBanner) => {
    return (
        <div className={background}>
            <StraightLinesBackground
                className={clsx(container, isDarkTheme ? darkContainer : null)}
            >
                <div className={clsx(banner, isDarkTheme ? darkBanner : null)}>
                    {title}
                    <OutboundLinkFilled
                        id={button.id}
                        href={button.href}
                        target="_blank"
                    >
                        {button.title}
                    </OutboundLinkFilled>
                </div>
            </StraightLinesBackground>
        </div>
    );
};

export default BlogBanner;
