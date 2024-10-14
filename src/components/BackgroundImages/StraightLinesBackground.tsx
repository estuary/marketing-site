import React from 'react';
import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import {
    container,
    backgroundImage,
    swoopingLines,
} from './styles.module.less';

type StraightLinesBackgroundProps = {
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const StraightLinesBackground = ({
    children,
    className,
}: StraightLinesBackgroundProps) => {
    return (
        <div className={container}>
            <StaticImage
                alt=""
                src="../../images/lp-connector/real-time/Vector.png"
                className={clsx(backgroundImage, swoopingLines)}
                placeholder="blurred"
                quality={100}
                backgroundColor="#04192b"
            />
            <div className={className}>{children}</div>
        </div>
    );
};

export default StraightLinesBackground;
