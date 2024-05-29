import React from 'react';

import PipelinesTable from '../../../../components/PipelinesTable';
import { DefaultWrapper } from '../../../../styles/wrappers';
import { Button, Description, LineBreak, Title, Wrapper } from './style';

const Pipelines = () => {
    return (
        <DefaultWrapper>
            <Wrapper>
                <Title>
                    PIPELINES AS <span>FAST</span> AS KAFKA, <LineBreak />
                    <span>EASY</span> AS MANAGED ELT/ETL, <LineBreak />
                    <span>CHEAPER</span> THAN BUILDING IT.
                </Title>
                <Description>Feature Comparison</Description>
                <PipelinesTable />
                <Button target="_blank" to="/vs-fivetran">
                    View Comparison Pages
                </Button>
            </Wrapper>
        </DefaultWrapper>
    );
};

export default Pipelines;
