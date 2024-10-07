import React from 'react';
import FeatureData from '../FeatureData';
import { ComparisonVendors } from '../shared';
import TitledTableCell from '../TitledTableCell';

const comparisonTableRows = [
    { label: 'Data Source Authentication', key: 'dataSourceAuth' },
    { label: 'Encryption', key: 'encryption' },
];

const Security = ({ xVendor, yVendor, estuaryVendor }: ComparisonVendors) => {
    return (
        <>
            <tr>
                <th colSpan={4}>Security</th>
            </tr>
            {comparisonTableRows.map((row) => (
                <tr key={row.key}>
                    <td>{row.label}</td>
                    <TitledTableCell title={xVendor.name}>
                        {xVendor.deployment.security[row.key].subText ? (
                            <FeatureData
                                icon={
                                    xVendor.deployment.security[row.key]?.icon
                                }
                                subText={
                                    xVendor.deployment.security[row.key]
                                        ?.subText
                                }
                            />
                        ) : (
                            xVendor.deployment.security[row.key]
                        )}
                    </TitledTableCell>
                    <TitledTableCell title={yVendor.name}>
                        {yVendor.deployment.security[row.key].subText ? (
                            <FeatureData
                                icon={
                                    yVendor.deployment.security[row.key]?.icon
                                }
                                subText={
                                    yVendor.deployment.security[row.key]
                                        ?.subText
                                }
                            />
                        ) : (
                            yVendor.deployment.security[row.key]
                        )}
                    </TitledTableCell>
                    {estuaryVendor ? (
                        <TitledTableCell title={estuaryVendor.name}>
                            {estuaryVendor.deployment.security[row.key]
                                .subText ? (
                                <FeatureData
                                    icon={
                                        estuaryVendor.deployment.security[
                                            row.key
                                        ]?.icon
                                    }
                                    subText={
                                        estuaryVendor.deployment.security[
                                            row.key
                                        ]?.subText
                                    }
                                />
                            ) : (
                                estuaryVendor.deployment.security[row.key]
                            )}
                        </TitledTableCell>
                    ) : null}
                </tr>
            ))}
        </>
    );
};

export default Security;
