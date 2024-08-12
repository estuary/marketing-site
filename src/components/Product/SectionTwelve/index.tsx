import React from 'react';

import { LinkFilled } from '../../../globalStyles';
import { DefaultWrapperDark } from '../../../styles/wrappers';
import PipelinesTable from '../../PipelinesTable';
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
