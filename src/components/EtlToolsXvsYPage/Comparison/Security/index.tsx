import { ComparisonVendors } from '../shared';
import TableRows from '../TableRows';

const rows = [
    { label: 'Data source authentication', key: 'dataSourceAuth' },
    { label: 'Encryption', key: 'encryption' },
];

const Security = ({ xVendor, yVendor, estuaryVendor }: ComparisonVendors) => {
    return (
        <TableRows
            title="Security"
            rows={rows}
            xVendor={xVendor}
            yVendor={yVendor}
            estuaryVendor={estuaryVendor}
            dataType="deployment.security"
        />
    );
};

export default Security;
