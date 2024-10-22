import React from 'react';

import PipelinesTable from '../../../components/PipelinesTable';
import {
    Button,
    Container,
    Description,
    LineBreak,
    Title,
    Wrapper,
} from './style';

const Pipelines = () => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    PIPELINES AS <span>FAST</span> AS KAFKA, <LineBreak />
                    <span>EASY</span> AS MANAGED ELT/ETL, <LineBreak />
                    <span>CHEAPER</span> THAN BUILDING IT.
                </Title>
                <Description>Feature Comparison</Description>
                <PipelinesTable />
                <Button target="_blank" href="/etl-tools/estuary-vs-fivetran/">
                    Detailed Comparison
                </Button>
            </Container>
        </Wrapper>
    );
};

export default Pipelines;
