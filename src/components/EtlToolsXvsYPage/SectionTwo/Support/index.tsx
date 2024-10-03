import React from 'react';
import FeatureData from '../FeatureData';
import { ComparisonVendors } from '../shared';

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
                    <td>
                        {xVendor.support[row.key].subText ? (
                            <FeatureData
                                cellTitle={xVendor.support[row.key]?.cellTitle}
                                subText={xVendor.support[row.key]?.subText}
                            />
                        ) : (
                            xVendor.support[row.key]
                        )}
                    </td>
                    <td>
                        {yVendor.support[row.key].subText ? (
                            <FeatureData
                                cellTitle={yVendor.support[row.key]?.cellTitle}
                                subText={yVendor.support[row.key]?.subText}
                            />
                        ) : (
                            yVendor.support[row.key]
                        )}
                    </td>
                    <td>
                        {estuaryVendor.support[row.key].subText ? (
                            <FeatureData
                                cellTitle={
                                    estuaryVendor.support[row.key]?.cellTitle
                                }
                                subText={
                                    estuaryVendor.support[row.key]?.subText
                                }
                            />
                        ) : (
                            estuaryVendor.support[row.key]
                        )}
                    </td>
                </tr>
            ))}
        </>
    );
};

export default Support;
