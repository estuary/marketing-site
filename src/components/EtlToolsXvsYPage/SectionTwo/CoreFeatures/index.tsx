import React from 'react';
import FeatureData from '../FeatureData';
import { ComparisonVendors } from '../shared';

const comparisonTableRows = [
    { label: 'Batch and streaming', key: 'batchingStreaming' },
    { label: 'Delivery guarantee', key: 'deliveryGuarantee' },
    { label: 'Load write method', key: 'loadWhiteMethod' },
    { label: 'DataOps support', key: 'dataOps' },
    { label: 'ELT transforms', key: 'eltTransforms' },
    { label: 'ETL transforms', key: 'etlTransforms' },
    { label: 'Schema inference and drift', key: 'schemaInference' },
    { label: 'Store and replay', key: 'storeReplay' },
    { label: 'Time travel', key: 'timeTravel' },
    { label: 'Workflow', key: 'workflow' },
];

const CoreFeatures = ({
    xVendor,
    yVendor,
    estuaryVendor,
}: ComparisonVendors) => {
    return (
        <>
            <tr>
                <th colSpan={4}>Core features</th>
            </tr>
            {comparisonTableRows.map((row) => (
                <tr key={row.key}>
                    <td>{row.label}</td>
                    <td>
                        {xVendor.features[row.key].subText ? (
                            <FeatureData
                                icon={xVendor.features[row.key]?.icon}
                                subText={xVendor.features[row.key]?.subText}
                            />
                        ) : (
                            xVendor.features[row.key]
                        )}
                    </td>
                    <td>
                        {yVendor.features[row.key].subText ? (
                            <FeatureData
                                icon={yVendor.features[row.key]?.icon}
                                subText={yVendor.features[row.key]?.subText}
                            />
                        ) : (
                            yVendor.features[row.key]
                        )}
                    </td>
                    {estuaryVendor ? (
                        <td>
                            {estuaryVendor.features[row.key].subText ? (
                                <FeatureData
                                    icon={estuaryVendor.features[row.key]?.icon}
                                    subText={
                                        estuaryVendor.features[row.key]?.subText
                                    }
                                />
                            ) : (
                                estuaryVendor.features[row.key]
                            )}
                        </td>
                    ) : null}
                </tr>
            ))}
        </>
    );
};

export default CoreFeatures;