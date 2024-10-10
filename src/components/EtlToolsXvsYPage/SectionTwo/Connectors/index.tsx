import React from 'react';
import { ComparisonVendors } from '../shared';
import TableRows from '../TableRows';

const rows = [
    { label: 'Number of connectors', key: 'count' },
    { label: 'Streaming connectors', key: 'streaming' },
    { label: 'Support for 3rd party connectors', key: 'thirdParty' },
    { label: 'Custom SDK', key: 'customSdk' },
    { label: 'API (for admin)', key: 'adminApi' },
];

const Connectors = ({ xVendor, yVendor, estuaryVendor }: ComparisonVendors) => {
    return (
        <TableRows
            title="Connectors"
            rows={rows}
            xVendor={xVendor}
            yVendor={yVendor}
            estuaryVendor={estuaryVendor}
            dataType="connectors"
        />
    );
};

export default Connectors;
