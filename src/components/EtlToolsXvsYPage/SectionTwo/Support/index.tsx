import React from 'react';
import FeatureData from '../FeatureData';
import { ComparisonVendors } from '../shared';
import TitledTableCell from '../TitledTableCell';

const comparisonTableRows = [{ label: 'Support', key: 'support' }];

const Support = ({ xVendor, yVendor, estuaryVendor }: ComparisonVendors) => {
    return (
        <>
            <tr>
                <th colSpan={4}>Support</th>
            </tr>
            {comparisonTableRows.map((row) => (
                <tr key={row.key}>
                    <td>{row.label}</td>
                    <TitledTableCell title={xVendor.name}>
                        {xVendor.support[row.key].subText ? (
                            <FeatureData
                                cellTitle={xVendor.support[row.key]?.cellTitle}
                                subText={xVendor.support[row.key]?.subText}
                            />
                        ) : (
                            xVendor.support[row.key]
                        )}
                    </TitledTableCell>
                    <TitledTableCell title={yVendor.name}>
                        {yVendor.support[row.key].subText ? (
                            <FeatureData
                                cellTitle={yVendor.support[row.key]?.cellTitle}
                                subText={yVendor.support[row.key]?.subText}
                            />
                        ) : (
                            yVendor.support[row.key]
                        )}
                    </TitledTableCell>
                    {estuaryVendor ? (
                        <TitledTableCell title={estuaryVendor.name}>
                            {estuaryVendor.support[row.key].subText ? (
                                <FeatureData
                                    cellTitle={
                                        estuaryVendor.support[row.key]
                                            ?.cellTitle
                                    }
                                    subText={
                                        estuaryVendor.support[row.key]?.subText
                                    }
                                />
                            ) : (
                                estuaryVendor.support[row.key]
                            )}
                        </TitledTableCell>
                    ) : null}
                </tr>
            ))}
        </>
    );
};

export default Support;
