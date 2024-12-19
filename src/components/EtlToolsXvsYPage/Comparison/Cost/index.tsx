import { ComparisonVendors } from '../shared';
import TableRows from '../TableRows';

const rows = [
    { label: 'Vendor costs', key: 'vendor' },
    { label: 'Data engineering costs', key: 'dataEngineering' },
    { label: 'Admin costs', key: 'admin' },
];

const Cost = ({ xVendor, yVendor, estuaryVendor }: ComparisonVendors) => {
    return (
        <TableRows
            title="Cost"
            rows={rows}
            xVendor={xVendor}
            yVendor={yVendor}
            estuaryVendor={estuaryVendor}
            dataType="cost"
        />
    );
};

export default Cost;
