import { ComparisonVendors } from '../shared';
import TableRows from '../TableRows';

const rows = [
    { label: 'Performance (minimum latency)', key: 'perfMinLatency' },
    { label: 'Reliability', key: 'reliability' },
    { label: 'Scalability', key: 'scalability' },
];

const TheAbilities = ({
    xVendor,
    yVendor,
    estuaryVendor,
}: ComparisonVendors) => {
    return (
        <TableRows
            title="Abilities"
            rows={rows}
            xVendor={xVendor}
            yVendor={yVendor}
            estuaryVendor={estuaryVendor}
            dataType="deployment.abilities"
        />
    );
};

export default TheAbilities;
