import { ComparisonVendors } from '../shared';
import TableRows from '../TableRows';

const rows = [
    { label: 'Batch and streaming', key: 'batchingStreaming' },
    { label: 'Delivery guarantee', key: 'deliveryGuarantee' },
    { label: 'ELT transforms', key: 'eltTransforms' },
    { label: 'ETL transforms', key: 'etlTransforms' },
    { label: 'Load write method', key: 'loadWhiteMethod' },
    { label: 'DataOps support', key: 'dataOps' },
    { label: 'Schema inference and drift', key: 'schemaInference' },
    { label: 'Store and replay', key: 'storeReplay' },
    { label: 'Time travel', key: 'timeTravel' },
    { label: 'Snapshots', key: 'snapshots' },
    { label: 'Ease of use', key: 'easeOfUse' },
];

const CoreFeatures = ({
    xVendor,
    yVendor,
    estuaryVendor,
}: ComparisonVendors) => {
    return (
        <TableRows
            title="Core features"
            rows={rows}
            xVendor={xVendor}
            yVendor={yVendor}
            estuaryVendor={estuaryVendor}
            dataType="features"
        />
    );
};

export default CoreFeatures;
