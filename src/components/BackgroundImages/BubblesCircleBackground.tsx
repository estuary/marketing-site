import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import {
    container,
    backgroundImage,
    bubbleCircleBackgroundImage,
} from './styles.module.less';

const BubblesCircleBackground = ({
    children,
    className,
}: React.BaseHTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={container}>
            <StaticImage
                alt=""
                src="../../images/lp-connector/take-a-tour/background.png"
                className={clsx(backgroundImage, bubbleCircleBackgroundImage)}
                placeholder="blurred"
                quality={100}
            />
            <div className={className}>{children}</div>
        </div>
    );
};

export default BubblesCircleBackground;
