import { Script } from 'gatsby';
import * as React from 'react';
import { isMobile } from 'react-device-detect';
import { ZD_KEY } from './utils';

const WrapPageElementComponent = ({ children }) => {
    const screenSize = React.useMemo(
        () => ({
            width: window.innerWidth,
            height: window.innerHeight,
        }),
        []
    );

    const [dimensions, setDimensions] = React.useState(screenSize);

    React.useEffect(() => {
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
                async
                defer
                src={`https://static.zdassets.com/ekr/snippet.js?key=${ZD_KEY}`}
            />
            <Script
                id="hs-script-loader"
                async
                defer
                strategy="idle"
                src="//js.hs-scripts.com/8635875.js"
            />
        </>
    );
};

export default WrapPageElementComponent;
