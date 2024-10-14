import React from 'react';
import { IBackgroundImageProps } from 'gatsby-background-image';
import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import {
    container,
    backgroundImage,
    swoopingLines,
} from './styles.module.less';

type LightSwoopingLinesRightDirectionBackgroundProps = IBackgroundImageProps & {
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const LightSwoopingLinesRightDirectionBackground = ({
    children,
    className,
}: LightSwoopingLinesRightDirectionBackgroundProps) => {
    return (
        <div className={container}>
            <StaticImage
                alt=""
                src="../../images/lp-connector/hero/Vector.png"
                className={clsx(backgroundImage, swoopingLines)}
                placeholder="blurred"
                quality={100}
                backgroundColor="#f9fafc"
            />
            <div className={className}>{children}</div>
        </div>
    );
};

export default LightSwoopingLinesRightDirectionBackground;
