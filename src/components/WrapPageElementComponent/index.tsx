import { Script } from 'gatsby';
import { isMobile } from 'react-device-detect';
import { useMemo, useState, useEffect } from 'react';
import { ZD_KEY } from './utils';

const WrapPageElementComponent = ({ children }) => {
    const screenSize = useMemo(
        () => ({
            width: window.innerWidth,
            height: window.innerHeight,
        }),
        []
    );

    const [dimensions, setDimensions] = useState(screenSize);

    useEffect(() => {
        const subscriber = () => setDimensions(screenSize);
        window.addEventListener('load', subscriber);
        return () => window.removeEventListener('load', subscriber);
    }, [screenSize]);

    if (
        process.env.NODE_ENV === 'development' ||
        isMobile ||
        dimensions.width < 768
    ) {
        return children;
    }

    return (
        <>
            {children}
            <Script
                id="ze-snippet"
                key="gatsby-plugin-zendesk-chat"
                strategy="idle"
                defer
                src={`https://static.zdassets.com/ekr/snippet.js?key=${ZD_KEY}`}
            />
            <Script
                id="hs-script-loader"
                defer
                strategy="idle"
                src="//js.hs-scripts.com/8635875.js"
            />
        </>
    );
};

export default WrapPageElementComponent;
