import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export interface ConnectorImageProps {
    source: any;
    destination: any;
}

const ConnectorsImageMobile = () => {
    //future work if you want to parametrize the source and destination images
    // const source = props.source;
    // const destination = props.destination;

    return (
        <StaticImage
            src="../images/connector-page-icons-mobile.png"
            alt="Connector logos"
            placeholder="none"
            loading="lazy"
            layout="constrained"
            quality={80}
        />
    );
};

export default ConnectorsImageMobile;
