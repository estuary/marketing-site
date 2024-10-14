import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { container, backgroundImage, bigVector } from './styles.module.less';

const BigImageBackground = ({
    children,
    className,
}: React.BaseHTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={container}>
            <StaticImage
                alt=""
                src="../../images/blogs-bg.png"
                className={clsx(backgroundImage, bigVector)}
                placeholder="blurred"
                quality={100}
            />
            <div className={className}>{children}</div>
        </div>
    );
};

export default BigImageBackground;
