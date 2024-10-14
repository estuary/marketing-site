import React, { CSSProperties } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const backgroundImageStyling: CSSProperties = {
    position: 'absolute',
    right: 0,
    width: '100%',
};

const childrenWrapperStyling: CSSProperties = {
    position: 'relative',
    display: 'grid',
    gridArea: '1 / 1',
    placeItems: 'center',
};

const BigImageBackground = ({
    children,
}: React.BaseHTMLAttributes<HTMLDivElement>) => {
    return (
        <>
            <StaticImage
                layout="fullWidth"
                alt=""
                src="../../images/blogs-bg.png"
                style={backgroundImageStyling}
                placeholder="blurred"
            />
            <div style={childrenWrapperStyling}>{children}</div>
        </>
    );
};

export default BigImageBackground;
