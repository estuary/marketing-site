import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const BigImageBackground = ({
    children,
}: React.BaseHTMLAttributes<HTMLDivElement>) => {
    return (
        <>
            <StaticImage
                layout="fullWidth"
                alt=""
                src="../../images/blogs-bg.png"
                formats={['auto', 'webp', 'avif']}
                style={{
                    position: 'absolute',
                    right: 0,
                    width: '100%',
                }}
            />
            <div
                style={{
                    position: 'relative',
                    display: 'grid',
                    gridArea: '1/1',
                    placeItems: 'center',
                }}
            >
                {children}
            </div>
        </>
    );
};

export default BigImageBackground;
