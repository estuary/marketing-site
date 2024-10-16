import React from 'react';
import { ComparisonVendors } from '../shared';
import TableRows from '../TableRows';

const rows = [
    {
        label: 'Database replication (CDC) - sources',
        key: 'databaseReplication',
    },
    { label: 'Replication to ODS', key: 'odsReplication' },
    { label: 'Op. data integration', key: 'dataIntegration' },
    { label: 'Data migration', key: 'dataMigration' },
    { label: 'Stream processing', key: 'streamProcessing' },
    { label: 'Operational Analytics', key: 'operationalAnalytics' },
    { label: 'AI Pipelines', key: 'aiPipelines' },
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
        />
    );
};

export default UseCases;
