import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Cicle, Path } from './styles';

type LogoAndPathProps = {
    tab: 'analytics' | 'ops' | 'ai';
};

const LogoAndPath = ({ tab }: LogoAndPathProps) => {
    return (
        <>
            <Cicle>
                <StaticImage
                    placeholder="none"
                    alt="Estuary logo"
                    src="../../../../images/product-page/section-five/circle-estuary-logo.png"
                />
            </Cicle>
            <Path $tab={tab}>
                <StaticImage
                    placeholder="none"
                    alt="Flow path with arrow"
                    src="../../../../svgs/product-page/section-five/path-arrow.svg"
                />
            </Path>
        </>
    );
};

export default LogoAndPath;
