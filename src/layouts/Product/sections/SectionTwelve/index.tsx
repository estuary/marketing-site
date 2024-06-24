import React from 'react';

import PipelinesTable from '../../../../components/PipelinesTable';
import { LinkFilled } from '../../../../globalStyles';
import { DefaultWrapperDark } from '../../../../styles/wrappers';
import { Container, TableTitle, TableWrapper, Title } from './styles';

const SectionTwelve = () => {
    return (
        <DefaultWrapperDark>
            <Container>
                <Title>
                    HOW <span>ESTUARY FLOW</span> COMPARES
                </Title>
                <TableWrapper>
                    <TableTitle>Feature Comparison</TableTitle>
                    <PipelinesTable />
                </TableWrapper>
                <LinkFilled
                    to="/vs-fivetran"
                    aria-label="Estuary Flow Comparison versus Fivetran"
                >
                    View Comparisons
                </LinkFilled>
            </Container>
        </DefaultWrapperDark>
    );
};

export default SectionTwelve;
