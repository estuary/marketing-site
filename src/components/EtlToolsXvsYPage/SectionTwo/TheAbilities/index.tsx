import React from 'react';
import FeatureData from '../FeatureData';
import { ComparisonVendors } from '../shared';

const comparisonTableRows = [
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
        <>
            <tr>
                <th colSpan={4}>The abilities</th>
            </tr>
            {comparisonTableRows.map((row) => (
                <tr key={row.key}>
                    <td>{row.label}</td>
                    <td>
                        {xVendor.deployment.abilities[row.key].subText ? (
                            <FeatureData
                                icon={
                                    xVendor.deployment.abilities[row.key]?.icon
                                }
                                subText={
                                    xVendor.deployment.abilities[row.key]
                                        ?.subText
                                }
                            />
                        ) : (
                            xVendor.deployment.abilities[row.key]
                        )}
                    </td>
                    <td>
                        {yVendor.deployment.abilities[row.key].subText ? (
                            <FeatureData
                                icon={
                                    yVendor.deployment.abilities[row.key]?.icon
                                }
                                subText={
                                    yVendor.deployment.abilities[row.key]
                                        ?.subText
                                }
                            />
                        ) : (
                            yVendor.deployment.abilities[row.key]
                        )}
                    </td>
                    <td>
                        {estuaryVendor.deployment.abilities[row.key].subText ? (
                            <FeatureData
                                icon={
                                    estuaryVendor.deployment.abilities[row.key]
                                        ?.icon
                                }
                                subText={
                                    estuaryVendor.deployment.abilities[row.key]
                                        ?.subText
                                }
                            />
                        ) : (
                            estuaryVendor.deployment.abilities[row.key]
                        )}
                    </td>
                </tr>
            ))}
        </>
    );
};

export default TheAbilities;
