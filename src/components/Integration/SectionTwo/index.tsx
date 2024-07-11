import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import ConnectorBackground from '../../../svgs/integration/connector-bg.svg';
import { Connector } from '../shared';
import {
    connectorBackground,
    connectorDescriptionContainer,
    descriptionDark,
    flowImage,
    flowImagesWrapper,
    sectionTitleDark,
    sourceConnectorImage,
    titleAndImages,
} from '../styles.module.less';

const SectionTwo = ({
    title,
    longDescription,
    shortDescription,
    logo,
}: Connector) => {
    const description = longDescription ?? shortDescription;

    const sourceConnectorLogo = getImage(logo.childImageSharp.gatsbyImageData);

    return (
        <section className={defaultWrapperGrey}>
            <div className={connectorDescriptionContainer}>
                <div className={titleAndImages}>
                    <h2 className={sectionTitleDark}>
                        FROM <span>{title}</span>
                    </h2>
                    {sourceConnectorLogo ? (
                        <div className={flowImagesWrapper}>
                            <div className={flowImage}>
                                <ConnectorBackground
                                    color="#EEF1FD"
                                    className={connectorBackground}
                                />
                                <GatsbyImage
                                    image={sourceConnectorLogo}
                                    alt={`${title} logo`}
                                    className={sourceConnectorImage}
                                />
                            </div>
                            <div className={flowImage}>
                                <ConnectorBackground
                                    color="#EEF1FD"
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
                            <div className={flowImage}>
                                <StaticImage
                                    placeholder="none"
                                    src="../../../images/integration/section-two/connectors.png"
                                    alt="Destination connectors"
                                    layout="constrained"
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
                        className={descriptionDark}
                    />
                ) : null}
            </div>
        </section>
    );
};

export default SectionTwo;
