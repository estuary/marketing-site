import React from 'react';
import FeatureData from '../FeatureData';
import { ComparisonVendors } from '../shared';
import TitledTableCell from '../TitledTableCell';

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
                    <TitledTableCell title={xVendor.name}>
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
                    </TitledTableCell>
                    <TitledTableCell title={yVendor.name}>
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
                    </TitledTableCell>
                    {estuaryVendor ? (
                        <TitledTableCell title={estuaryVendor.name}>
                            {estuaryVendor.cost[row.key].subText ? (
                                <FeatureData
                                    numberOfDollarSigns={
                                        estuaryVendor.cost[row.key]
                                            ?.numberOfDollarSigns.array
                                    }
                                    subText={
                                        estuaryVendor.cost[row.key]?.subText
                                    }
                                />
                            ) : (
                                estuaryVendor.cost[row.key]
                            )}
                        </TitledTableCell>
                    ) : null}
                </tr>
            ))}
        </>
    );
};

export default Cost;
