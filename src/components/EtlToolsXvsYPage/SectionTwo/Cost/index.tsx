import React from 'react';
import FeatureData from '../FeatureData';
import { ComparisonVendors } from '../shared';

const comparisonTableRows = [
    { label: 'Vendor costs', key: 'vendor' },
    { label: 'Data engineering costs', key: 'dataEngineering' },
    { label: 'Admin costs', key: 'admin' },
];

const Cost = ({ xVendor, yVendor, estuaryVendor }: ComparisonVendors) => {
    return (
        <>
            <tr>
                <th colSpan={4}>Cost</th>
            </tr>
            {comparisonTableRows.map((row) => (
                <tr key={row.key}>
                    <td>{row.label}</td>
                    <td>
                        {xVendor.cost[row.key].subText ? (
                            <FeatureData
                                numberOfDollarSigns={
                                    xVendor.cost[row.key]?.numberOfDollarSigns
                                        .array
                                }
                                subText={xVendor.cost[row.key]?.subText}
                            />
                        ) : (
                            xVendor.cost[row.key]
                        )}
                    </td>
                    <td>
                        {yVendor.cost[row.key].subText ? (
                            <FeatureData
                                numberOfDollarSigns={
                                    yVendor.cost[row.key]?.numberOfDollarSigns
                                        .array
                                }
                                subText={yVendor.cost[row.key]?.subText}
                            />
                        ) : (
                            yVendor.cost[row.key]
                        )}
                    </td>
                    <td>
                        {estuaryVendor.cost[row.key].subText ? (
                            <FeatureData
                                numberOfDollarSigns={
                                    estuaryVendor.cost[row.key]
                                        ?.numberOfDollarSigns.array
                                }
                                subText={estuaryVendor.cost[row.key]?.subText}
                            />
                        ) : (
                            estuaryVendor.cost[row.key]
                        )}
                    </td>
                </tr>
            ))}
        </>
    );
};

export default Cost;
