import React from 'react';
import FeatureData from '../FeatureData';
import { ComparisonVendors } from '../shared';
import TitledTableCell from '../TitledTableCell';

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
                    <TitledTableCell title={xVendor.name}>
                        {xVendor.connectors[row.key].subText ? (
                            <FeatureData
                                icon={xVendor.connectors[row.key]?.icon}
                                subText={xVendor.connectors[row.key]?.subText}
                            />
                        ) : (
                            xVendor.connectors[row.key]
                        )}
                    </TitledTableCell>
                    <TitledTableCell title={yVendor.name}>
                        {yVendor.connectors[row.key].subText ? (
                            <FeatureData
                                icon={yVendor.connectors[row.key]?.icon}
                                subText={yVendor.connectors[row.key]?.subText}
                            />
                        ) : (
                            yVendor.connectors[row.key]
                        )}
                    </TitledTableCell>
                    {estuaryVendor ? (
                        <TitledTableCell title={estuaryVendor.name}>
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
                        </TitledTableCell>
                    ) : null}
                </tr>
            ))}
        </>
    );
};

export default Connectors;
