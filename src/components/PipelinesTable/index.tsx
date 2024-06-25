import React from 'react';

import {
    Body,
    Checkmark,
    Close,
    Container,
    Head,
    LineBody,
    LineHead,
    Table,
    TableLine,
} from './style';

const PipelinesTable = () => {
    return (
        <Container>
            <Table>
                <Head>
                    <TableLine>
                        <LineHead />
                        <LineHead>Estuary</LineHead>
                        <LineHead>Batch ELT/ETL</LineHead>
                        <LineHead>DIY Python</LineHead>
                        <LineHead>KAFKA</LineHead>
                    </TableLine>
                </Head>
                <Body>
                    <TableLine>
                        <LineBody>
                            <span>Price</span>
                        </LineBody>
                        <LineBody>
                            <span>$</span>
                        </LineBody>
                        <LineBody>
                            <span>$$-$$$$</span>
                        </LineBody>
                        <LineBody>
                            <span>$-$$$$</span>
                        </LineBody>
                        <LineBody>
                            <span>$-$$$$</span>
                        </LineBody>
                    </TableLine>
                    <TableLine>
                        <LineBody>
                            <span>Speed</span>
                        </LineBody>
                        <LineBody>&#60;100ms</LineBody>
                        <LineBody>5min+</LineBody>
                        <LineBody>Varies</LineBody>
                        <LineBody>&#60;100ms</LineBody>
                    </TableLine>
                    <TableLine>
                        <LineBody>
                            <span>Ease</span>
                        </LineBody>
                        <LineBody>Analysts can manage</LineBody>
                        <LineBody>Analysts can manage</LineBody>
                        <LineBody>Data Engineer</LineBody>
                        <LineBody>Senior Data Engineer</LineBody>
                    </TableLine>
                    <TableLine>
                        <LineBody>
                            <span>Scale</span>
                        </LineBody>
                        <LineBody>
                            <Checkmark />
                        </LineBody>
                        <LineBody>
                            <Close />
                        </LineBody>
                        <LineBody>
                            <Close />
                        </LineBody>
                        <LineBody>
                            <Checkmark />
                        </LineBody>
                    </TableLine>
                </Body>
            </Table>
        </Container>
    );
};

export default PipelinesTable;
