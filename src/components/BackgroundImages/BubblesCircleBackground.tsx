import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import {
    backgroundImage,
    bubbleCircleBackgroundImage,
} from './styles.module.less';
import BackgroundWrapper from './BackgroundWrapper';

const BubblesCircleBackground = ({
    children,
    className,
}: React.BaseHTMLAttributes<HTMLDivElement>) => {
    return (
        <BackgroundWrapper>
            <StaticImage
                alt=""
                src="../../images/lp-connector/take-a-tour/background.png"
                className={clsx(backgroundImage, bubbleCircleBackgroundImage)}
                placeholder="blurred"
                quality={100}
            />
            <div className={className}>{children}</div>
        </BackgroundWrapper>
    );
};

export default BubblesCircleBackground;
