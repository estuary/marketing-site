import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import DoneIcon from '@mui/icons-material/Done';
import { ConnectorType, dashboardRegisterUrl } from '../../../../../shared';
import HeroSectionDetails from '../../../../components/HeroSectionDetails';
import OutboundLinkFilled from '../../../../components/LinksAndButtons/OutboundLinkFilled';
import { container, containerPreTitleWrapper } from './styles.module.less';

type ContentProps = {
    connector: {
        title: string;
        type: ConnectorType;
    };
};

const Content = ({ connector }: ContentProps) => {
    return (
        <div className={container}>
            <div className={containerPreTitleWrapper}>
                <StaticImage
                    placeholder="none"
                    alt="icon"
                    src="../../../../images/lp-connector/hero/icon.png"
                    width={40}
                    height={40}
                    quality={100}
                />
                <span>REAL-TIME ETL & CDC</span>
            </div>
            <HeroSectionDetails
                title={
                    connector.type === 'capture' ? (
                        <>
                            <span>MOVE</span>{' '}
                            <span>
                                YOUR DATA FROM {connector.title} WITH YOUR
                            </span>{' '}
                            <span>FREE</span> <span>ACCOUNT</span>
                        </>
                    ) : (
                        <>
                            <span>STREAM</span>{' '}
                            <span>INTO {connector.title} WITH YOUR</span>{' '}
                            <span>FREE</span> <span>ACCOUNT</span>
                        </>
                    )
                }
                description="Continously ingest and deliver both streaming and batch change
                data from 100s of sources using Estuary's custom no-code
                connectors."
            />
            <ul>
                <li>
                    <DoneIcon htmlColor="#47506d" fontSize="small" />
                    <span>&#60;100ms</span> Data pipelines
                </li>
                <li>
                    <DoneIcon htmlColor="#47506d" fontSize="small" />
                    <span>100+</span> Connectors
                </li>
                <li>
                    <DoneIcon htmlColor="#47506d" fontSize="small" />
                    <span>2-5x</span> less than batch ELT
                </li>
            </ul>
            <OutboundLinkFilled target="_blank" href={dashboardRegisterUrl}>
                Try it free
            </OutboundLinkFilled>
        </div>
    );
};

export default Content;
