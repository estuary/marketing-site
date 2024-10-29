import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import DoneIcon from '@mui/icons-material/Done';
import { ConnectorType, dashboardRegisterUrl } from '../../../../../shared';
import HeroSectionDetails from '../../../../components/HeroSectionDetails';
import { Button, Container, ContainerPreTitle, Topic, Topics } from './styles';

type ContentProps = {
    connector: {
        title: string;
        type: ConnectorType;
    };
};

const Content = ({ connector }: ContentProps) => {
    return (
        <Container>
            <ContainerPreTitle>
                <StaticImage
                    placeholder="none"
                    alt="icon"
                    src="../../../../images/lp-connector/hero/icon.png"
                    width={40}
                    height={40}
                    quality={100}
                />
                <span>Real-time ETL & CDC</span>
            </ContainerPreTitle>
            <HeroSectionDetails
                title={
                    connector.type === 'capture' ? (
                        <>
                            <span>MOVE</span>{' '}
                            <span>
                                YOUR DATA FROM {connector.title.toUpperCase()}{' '}
                                WITH YOUR
                            </span>{' '}
                            <span>FREE</span> <span>ACCOUNT</span>
                        </>
                    ) : (
                        <>
                            <span>STREAM</span>{' '}
                            <span>
                                INTO {connector.title.toUpperCase()} WITH YOUR
                            </span>{' '}
                            <span>FREE</span> <span>ACCOUNT</span>
                        </>
                    )
                }
                description="Continously ingest and deliver both streaming and batch change
                data from 100s of sources using Estuary's custom no-code
                connectors."
            />
            <Topics>
                <Topic>
                    <DoneIcon htmlColor="#47506d" fontSize="small" />
                    <span>&#60;100ms</span> Data pipelines
                </Topic>
                <Topic>
                    <DoneIcon htmlColor="#47506d" fontSize="small" />
                    <span>100+</span> Connectors
                </Topic>
                <Topic>
                    <DoneIcon htmlColor="#47506d" fontSize="small" />
                    <span>2-5x</span> less than batch ELT
                </Topic>
            </Topics>
            <Button target="_blank" href={dashboardRegisterUrl}>
                Try it free
            </Button>
        </Container>
    );
};

export default Content;
