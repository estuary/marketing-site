import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import DoneIcon from '@mui/icons-material/Done';
import { ConnectorType, dashboardRegisterUrl } from '../../../../../../shared';
import {
    Button,
    Container,
    ContainerPreTitle,
    Description,
    Pretitle,
    Title,
    Topic,
    Topics,
} from './styles';

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
                    src="../../../../../images/lp-connector/hero/icon.png"
                    width={40}
                    height={40}
                    quality={100}
                />
                <Pretitle>Real-time ETL & CDC</Pretitle>
            </ContainerPreTitle>
            <Title>
                {connector.type === 'capture' ? (
                    <>
                        <span>MOVE</span> YOUR DATA FROM{' '}
                        {connector.title.toUpperCase()} WITH YOUR{' '}
                        <span>FREE</span> ACCOUNT
                    </>
                ) : (
                    <>
                        <span>STREAM</span> INTO {connector.title.toUpperCase()}{' '}
                        WITH YOUR <span>FREE</span> ACCOUNT
                    </>
                )}
            </Title>
            <Description>
                Continously ingest and deliver both streaming and batch change
                data from 100s of sources using Estuary’s custom no-code
                connectors.
            </Description>
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
