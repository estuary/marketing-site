import { ComparisonVendors } from '../shared';
import TableRows from '../TableRows';

const rows = [
    {
        label: 'Database replication (CDC)',
        key: 'databaseReplication',
    },
    { label: 'Operational integration', key: 'dataIntegration' },
    { label: 'Data migration', key: 'dataMigration' },
    { label: 'Stream processing', key: 'streamProcessing' },
    { label: 'Operational analytics', key: 'operationalAnalytics' },
    { label: 'AI pipelines', key: 'aiPipelines' },
];

const UseCases = ({ xVendor, yVendor, estuaryVendor }: ComparisonVendors) => {
    return (
        <TableRows
            title="Use cases"
            rows={rows}
            xVendor={xVendor}
            yVendor={yVendor}
            estuaryVendor={estuaryVendor}
            dataType="useCases"
            expandedByDefault
        />
    );
};

export default UseCases;
