import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { DefaultWrapperDarkBlue } from '../../../styles/wrappers';
import ConnectorBackground from '../../../svgs/integration/connector-bg.svg';
import { Connector } from '../shared';
import {
    connectorBackground,
    connectorDescriptionContainer,
    descriptionLight,
    flowImage,
    flowImagesWrapper,
    sectionTitleLight,
    sourceConnectorImage,
    titleAndImages,
} from '../styles.module.less';

const SectionThree = ({
    title,
    longDescription,
    shortDescription,
    logo,
}: Connector) => {
    const description = longDescription ?? shortDescription;

    const destinationConnectorLogo = getImage(
        logo.childImageSharp.gatsbyImageData
    );

    return (
        <DefaultWrapperDarkBlue>
            <div className={connectorDescriptionContainer}>
                <div className={titleAndImages}>
                    <h2 className={sectionTitleLight}>
                        TO <span>{title}</span>
                    </h2>
                    {destinationConnectorLogo ? (
                        <div className={flowImagesWrapper}>
                            <div className={flowImage}>
                                <ConnectorBackground
                                    color="#0C223E"
                                    className={connectorBackground}
                                />
                                <GatsbyImage
                                    image={destinationConnectorLogo}
                                    alt={`${title} logo`}
                                    className={sourceConnectorImage}
                                />
                            </div>
                            <div className={flowImage}>
                                <StaticImage
                                    placeholder="none"
                                    src="../../../images/integration/section-three/connectors.png"
                                    alt="Destination connectors"
                                    layout="constrained"
                                />
                            </div>
                            <div className={flowImage}>
                                <ConnectorBackground
                                    color="#0C223E"
                                    className={connectorBackground}
                                />
                                <StaticImage
                                    placeholder="none"
                                    src="../../../images/estuary-icon-big.png"
                                    alt="Estuary logo"
                                    layout="constrained"
                                    className={sourceConnectorImage}
                                    width={46}
                                />
                            </div>
                        </div>
                    ) : null}
                </div>
                {description ? (
                    <p
                        dangerouslySetInnerHTML={{
                            __html: description,
                        }}
                        className={descriptionLight}
                    />
                ) : null}
            </div>
        </DefaultWrapperDarkBlue>
    );
};

export default SectionThree;
