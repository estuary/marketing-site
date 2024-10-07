import React from 'react';
import FeatureData from '../FeatureData';
import { ComparisonVendors } from '../shared';
import TitledTableCell from '../TitledTableCell';

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
                    <TitledTableCell title={xVendor.name}>
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
                    </TitledTableCell>
                    <TitledTableCell title={yVendor.name}>
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
                    </TitledTableCell>
                    {estuaryVendor ? (
                        <TitledTableCell title={estuaryVendor.name}>
                            {estuaryVendor.deployment.abilities[row.key]
                                .subText ? (
                                <FeatureData
                                    icon={
                                        estuaryVendor.deployment.abilities[
                                            row.key
                                        ]?.icon
                                    }
                                    subText={
                                        estuaryVendor.deployment.abilities[
                                            row.key
                                        ]?.subText
                                    }
                                />
                            ) : (
                                estuaryVendor.deployment.abilities[row.key]
                            )}
                        </TitledTableCell>
                    ) : null}
                </tr>
            ))}
        </>
    );
};

export default TheAbilities;
