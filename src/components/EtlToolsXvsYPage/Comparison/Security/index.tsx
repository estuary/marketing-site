import { ComparisonVendors } from '../shared';
import TableRows from '../TableRows';

const rows = [
    { label: 'SOC2', key: 'socTwo' },
    { label: 'Data source authentication', key: 'dataSourceAuth' },
    { label: 'Encryption', key: 'encryption' },
    { label: 'HIPAA compliance', key: 'hipaaCompliance' },
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
