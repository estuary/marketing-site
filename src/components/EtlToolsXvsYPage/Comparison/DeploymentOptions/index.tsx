import { ComparisonVendors } from '../shared';
import TableRows from '../TableRows';

const rows = [{ label: 'Deployment options', key: 'options' }];

const DeploymentOptions = ({
    xVendor,
    yVendor,
    estuaryVendor,
}: ComparisonVendors) => {
    return (
        <TableRows
            title="Deployment options"
            rows={rows}
            xVendor={xVendor}
            yVendor={yVendor}
            estuaryVendor={estuaryVendor}
            dataType="deployment"
        />
    );
};

export default DeploymentOptions;
