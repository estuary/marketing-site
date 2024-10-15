import React from 'react';
import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import { container, backgroundImage, fullHeight } from './styles.module.less';
import { backgroundColors } from './shared';

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
                className={clsx(backgroundImage, fullHeight)}
                placeholder="blurred"
                quality={100}
                backgroundColor={backgroundColors.dark}
            />
            <div className={className}>{children}</div>
        </div>
    );
};

export default StraightLinesBackground;
