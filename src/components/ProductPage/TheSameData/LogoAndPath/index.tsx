import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import clsx from 'clsx';
import { cicle, path, analyticsPath } from './styles.module.less';

type LogoAndPathProps = {
    tab: 'analytics' | 'ops' | 'ai';
};

const LogoAndPath = ({ tab }: LogoAndPathProps) => {
    return (
        <>
            <div className={cicle}>
                <StaticImage
                    placeholder="none"
                    alt="Estuary logo"
                    src="../../../../images/product-page/section-five/circle-estuary-logo.png"
                />
            </div>
            <div
                className={clsx(
                    path,
                    tab === 'analytics' ? analyticsPath : null
                )}
            >
                <StaticImage
                    placeholder="none"
                    alt="Flow path with arrow"
                    src="../../../../svgs/product-page/section-five/path-arrow.svg"
                />
            </div>
        </>
    );
};

export default LogoAndPath;
