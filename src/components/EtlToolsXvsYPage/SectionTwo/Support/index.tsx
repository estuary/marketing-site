import React from 'react';
import { ComparisonVendors } from '../shared';
import TableRows from '../TableRows';

const rows = [{ label: 'Support', key: 'support' }];

const Support = ({ xVendor, yVendor, estuaryVendor }: ComparisonVendors) => {
    return (
        <TableRows
            title="Support"
            rows={rows}
            xVendor={xVendor}
            yVendor={yVendor}
            estuaryVendor={estuaryVendor}
            dataType="support"
        />
    );
};

export default Support;
