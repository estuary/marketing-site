import React from 'react';

import PipelinesTable from '../../../components/PipelinesTable';
import Container from '../../../components/Container';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import { Button, Description, LineBreak, Title, TableWrapper } from './style';

const Pipelines = () => {
    return (
        <section className={defaultWrapperDark}>
            <Container isVertical>
                <Title>
                    PIPELINES AS <span>FAST</span> AS KAFKA, <LineBreak />
                    <span>EASY</span> AS MANAGED ELT/ETL, <LineBreak />
                    <span>CHEAPER</span> THAN BUILDING IT.
                </Title>
                <TableWrapper>
                    <Description>Feature Comparison</Description>
                    <PipelinesTable />
                    <Button
                        target="_blank"
                        href="/etl-tools/estuary-vs-fivetran/"
                    >
                        Detailed Comparison
                    </Button>
                </TableWrapper>
            </Container>
        </section>
    );
};

export default Pipelines;
