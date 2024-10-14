import React from 'react';

import { IBackgroundImageProps } from 'gatsby-background-image';

import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import {
    container,
    backgroundImage,
    swoopingLines,
} from './styles.module.less';

type DarkSwoopingLinesLeftDirectionBackgroundProps = IBackgroundImageProps & {
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
                className={clsx(backgroundImage, swoopingLines)}
                placeholder="blurred"
                quality={100}
                backgroundColor="#04192b"
            />
            <div className={className}>{children}</div>
        </div>
    );
};

export default DarkSwoopingLinesLeftDirectionBackground;
