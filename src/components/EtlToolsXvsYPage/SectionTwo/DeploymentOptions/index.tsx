import React from 'react';
import FeatureData from '../FeatureData';
import { ComparisonVendors } from '../shared';

const comparisonTableRows = [{ label: 'Deployment options', key: 'options' }];

const DeploymentOptions = ({
    xVendor,
    yVendor,
    estuaryVendor,
}: ComparisonVendors) => {
    return (
        <>
            <tr>
                <th colSpan={4}>Deployment options</th>
            </tr>
            {comparisonTableRows.map((row) => (
                <tr key={row.key}>
                    <td>{row.label}</td>
                    <td>
                        {xVendor.deployment[row.key].subText ? (
                            <FeatureData
                                icon={xVendor.deployment[row.key]?.icon}
                                subText={xVendor.deployment[row.key]?.subText}
                            />
                        ) : (
                            xVendor.deployment[row.key]
                        )}
                    </td>
                    <td>
                        {yVendor.deployment[row.key].subText ? (
                            <FeatureData
                                icon={yVendor.deployment[row.key]?.icon}
                                subText={yVendor.deployment[row.key]?.subText}
                            />
                        ) : (
                            yVendor.deployment[row.key]
                        )}
                    </td>
                    <td>
                        {estuaryVendor.deployment[row.key].subText ? (
                            <FeatureData
                                icon={estuaryVendor.deployment[row.key]?.icon}
                                subText={
                                    estuaryVendor.deployment[row.key]?.subText
                                }
                            />
                        ) : (
                            estuaryVendor.deployment[row.key]
                        )}
                    </td>
                </tr>
            ))}
        </>
    );
};

export default DeploymentOptions;
