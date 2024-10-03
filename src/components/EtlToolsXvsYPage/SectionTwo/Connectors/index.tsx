import React from 'react';
import FeatureData from '../FeatureData';
import { ComparisonVendors } from '../shared';

const comparisonTableRows = [
    { label: 'Number of connectors', key: 'count' },
    { label: 'Streaming connectors', key: 'streaming' },
    { label: 'Support for 3rd party connectors', key: 'thirdParty' },
    { label: 'Custom SDK', key: 'customSdk' },
    { label: 'API (for admin)', key: 'adminApi' },
];

const Connectors = ({ xVendor, yVendor, estuaryVendor }: ComparisonVendors) => {
    return (
        <>
            <tr>
                <th colSpan={4}>Connectors</th>
            </tr>
            {comparisonTableRows.map((row) => (
                <tr key={row.key}>
                    <td>{row.label}</td>
                    <td>
                        {xVendor.connectors[row.key].subText ? (
                            <FeatureData
                                icon={xVendor.connectors[row.key]?.icon}
                                subText={xVendor.connectors[row.key]?.subText}
                            />
                        ) : (
                            xVendor.connectors[row.key]
                        )}
                    </td>
                    <td>
                        {yVendor.connectors[row.key].subText ? (
                            <FeatureData
                                icon={yVendor.connectors[row.key]?.icon}
                                subText={yVendor.connectors[row.key]?.subText}
                            />
                        ) : (
                            yVendor.connectors[row.key]
                        )}
                    </td>
                    {estuaryVendor ? (
                        <td>
                            {estuaryVendor.connectors[row.key].subText ? (
                                <FeatureData
                                    icon={
                                        estuaryVendor.connectors[row.key]?.icon
                                    }
                                    subText={
                                        estuaryVendor.connectors[row.key]
                                            ?.subText
                                    }
                                />
                            ) : (
                                estuaryVendor.connectors[row.key]
                            )}
                        </td>
                    ) : null}
                </tr>
            ))}
        </>
    );
};

export default Connectors;
