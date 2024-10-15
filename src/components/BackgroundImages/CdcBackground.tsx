import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import {
    container,
    backgroundImage,
    cdcBackgroundImage,
} from './styles.module.less';

const CdcBackground = ({
    children,
    className,
}: React.BaseHTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={container}>
            <StaticImage
                alt=""
                src="../../images/lp-connector/change-data/background.png"
                className={clsx(backgroundImage, cdcBackgroundImage)}
                placeholder="blurred"
                quality={100}
            />
            <div className={className}>{children}</div>
        </div>
    );
};

export default CdcBackground;
