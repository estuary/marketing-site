import React from 'react';

import { LinkFilled } from '../../../globalStyles';
import { DefaultWrapperDark } from '../../../styles/wrappers';
import PipelinesTable from '../../PipelinesTable';
import Container from '../../Container';
import { tableWrapper, title } from './styles.module.less';

const HowEstuaryFlowCompares = () => {
    return (
        <DefaultWrapperDark>
            <Container isVertical>
                <h2 className={title}>
                    HOW <span>ESTUARY FLOW</span> COMPARES
                </h2>
                <div className={tableWrapper}>
                    <h3>Feature Comparison</h3>
                    <PipelinesTable />
                </div>
                <LinkFilled
                    href="/etl-tools/estuary-vs-fivetran/"
                    target="_blank"
                    aria-label="Estuary Flow Comparison versus Fivetran"
                >
                    View Comparisons
                </LinkFilled>
            </Container>
        </DefaultWrapperDark>
    );
};

export default HowEstuaryFlowCompares;
