import clsx from 'clsx';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import EstuaryLogo from '../../../svgs/colored-logo.svg';
import { Connector } from '../shared';
import {
    connectorDescriptionContainer,
    connectorsFlowImage,
    darkenDashedCircle,
    dashedCircle,
    descriptionLight,
    flowImage,
    flowImagesWrapper,
    sectionTitleLight,
    sourceConnectorImage,
    titleAndImages,
    whiteFilledCircle,
} from '../styles.module.less';

const SectionThree = ({
    title,
    longDescription,
    shortDescription,
    logo,
}: Connector) => {
    const description = longDescription ?? shortDescription;

    const destinationConnectorLogo = getImage(
        logo?.childImageSharp?.gatsbyImageData
    );

    return (
        <section className={defaultWrapperDarkBlue}>
            <div className={connectorDescriptionContainer}>
                <div className={titleAndImages}>
                    <h2 className={sectionTitleLight}>
                        TO <span>{title}</span>
                    </h2>
                    {destinationConnectorLogo ? (
                        <div className={flowImagesWrapper}>
                            <div
                                className={clsx(flowImage, connectorsFlowImage)}
                            >
                                <StaticImage
                                    placeholder="none"
                                    src="../../../images/integration/section-three/connectors.png"
                                    alt="Destination connectors"
                                />
                            </div>
                            <div className={flowImage}>
                                <div
                                    className={clsx(
                                        dashedCircle,
                                        darkenDashedCircle
                                    )}
                                >
                                    <div className={whiteFilledCircle}>
                                        <EstuaryLogo
                                            className={sourceConnectorImage}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={flowImage}>
                                <div
                                    className={clsx(
                                        dashedCircle,
                                        darkenDashedCircle
                                    )}
                                >
                                    <div className={whiteFilledCircle}>
                                        <GatsbyImage
                                            image={destinationConnectorLogo}
                                            alt={`${title} logo`}
                                            className={sourceConnectorImage}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
                {description ? (
                    <div
                        dangerouslySetInnerHTML={{
                            __html: description,
                        }}
                        className={descriptionLight}
                    />
                ) : null}
            </div>
        </section>
    );
};

export default SectionThree;
