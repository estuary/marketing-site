import React from 'react';
import FeatureData from '../FeatureData';
import { ComparisonVendors } from '../shared';
import TitledTableCell from '../TitledTableCell';

const comparisonTableRows = [
    {
        label: 'Database replication (CDC) - sources',
        key: 'databaseReplication',
    },
    { label: 'Replication to ODS', key: 'odsReplication' },
    { label: 'Historical Analytics', key: 'historicalAnalytics' },
    { label: 'Op. data integration', key: 'dataIntegration' },
    { label: 'Data migration', key: 'dataMigration' },
    { label: 'Stream processing', key: 'streamProcessing' },
    { label: 'Operational Analytics', key: 'operationalAnalytics' },
    { label: 'Data science and ML', key: 'dataScienceMl' },
];

const UseCases = ({ xVendor, yVendor, estuaryVendor }: ComparisonVendors) => {
    return (
        <>
            <tr>
                <th colSpan={4}>Use cases</th>
            </tr>
            {comparisonTableRows.map((row) => (
                <tr key={row.key}>
                    <td>{row.label}</td>
                    <TitledTableCell title={xVendor.name}>
                        {xVendor.useCases[row.key].subText ? (
                            <FeatureData
                                icon={xVendor.useCases[row.key]?.icon}
                                subText={xVendor.useCases[row.key].subText}
                            />
                        ) : (
                            xVendor.useCases[row.key]
                        )}
                    </TitledTableCell>
                    <TitledTableCell title={yVendor.name}>
                        {yVendor.useCases[row.key].subText ? (
                            <FeatureData
                                icon={yVendor.useCases[row.key]?.icon}
                                subText={yVendor.useCases[row.key].subText}
                            />
                        ) : (
                            yVendor.useCases[row.key]
                        )}
                    </TitledTableCell>
                    {estuaryVendor ? (
                        <TitledTableCell title={estuaryVendor.name}>
                            {estuaryVendor.useCases[row.key].subText ? (
                                <FeatureData
                                    icon={estuaryVendor.useCases[row.key]?.icon}
                                    subText={
                                        estuaryVendor.useCases[row.key].subText
                                    }
                                />
                            ) : (
                                estuaryVendor.useCases[row.key]
                            )}
                        </TitledTableCell>
                    ) : null}
                </tr>
            ))}
        </>
    );
};

export default UseCases;
