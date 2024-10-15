import React from 'react';

import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import { container, backgroundImage, fullHeight } from './styles.module.less';
import { backgroundColors } from './shared';

type DarkSwoopingLinesLeftDirectionBackgroundProps = {
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const DarkSwoopingLinesLeftDirectionBackground = ({
    children,
    className,
}: DarkSwoopingLinesLeftDirectionBackgroundProps) => {
    return (
        <div className={container}>
            <StaticImage
                alt=""
                src="../../images/overlay-vector-left.png"
                className={clsx(backgroundImage, fullHeight)}
                placeholder="blurred"
                quality={100}
                backgroundColor={backgroundColors.dark}
            />
            <div className={className}>{children}</div>
        </div>
    );
};

export default DarkSwoopingLinesLeftDirectionBackground;
