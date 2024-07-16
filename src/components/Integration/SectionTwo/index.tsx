import clsx from 'clsx';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import EstuaryLogo from '../../../svgs/colored-logo.svg';
import { Connector } from '../shared';
import {
    connectorDescriptionContainer,
    connectorsFlowImage,
    dashedCircle,
    descriptionDark,
    flowImage,
    flowImagesWrapper,
    sectionTitleDark,
    sourceConnectorImage,
    titleAndImages,
    whiteFilledCircle,
} from '../styles.module.less';

const SectionTwo = ({
    title,
    longDescription,
    shortDescription,
    logo,
}: Connector) => {
    const description = longDescription ?? shortDescription;

    const sourceConnectorLogo = getImage(
        logo?.childImageSharp?.gatsbyImageData
    );

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
                                <div className={dashedCircle}>
                                    <div className={whiteFilledCircle}>
                                        <GatsbyImage
                                            image={sourceConnectorLogo}
                                            alt={`${title} logo`}
                                            className={sourceConnectorImage}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={flowImage}>
                                <div className={dashedCircle}>
                                    <div className={whiteFilledCircle}>
                                        <EstuaryLogo
                                            className={sourceConnectorImage}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className={clsx(flowImage, connectorsFlowImage)}
                            >
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
                    <div
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
