import React, { useMemo } from 'react';
import FeatureData from '../FeatureData';
import TitledTableCell from '../TitledTableCell';

interface ComparisonVendor {
    name: string;
    [key: string]: any;
}

interface Row {
    label: string;
    key: string;
}

interface TableRowsProps {
    title: string;
    rows: Row[];
    xVendor: ComparisonVendor;
    yVendor: ComparisonVendor;
    estuaryVendor: ComparisonVendor | null;
    dataType: string;
}

const getNestedProperty = (obj: Record<string, any>, path: string) => {
    return path.split('.').reduce((acc, key) => acc?.[key], obj);
};

const TableRows = React.memo(
    ({
        title,
        rows,
        xVendor,
        yVendor,
        estuaryVendor,
        dataType,
    }: TableRowsProps) => {
        const xVendorData = useMemo(() => {
            return rows.map(
                (row) => getNestedProperty(xVendor, dataType)?.[row.key] || {}
            );
        }, [xVendor, dataType, rows]);

        const yVendorData = useMemo(() => {
            return rows.map(
                (row) => getNestedProperty(yVendor, dataType)?.[row.key] || {}
            );
        }, [yVendor, dataType, rows]);

        const estuaryVendorData = useMemo(() => {
            return estuaryVendor
                ? rows.map(
                      (row) =>
                          getNestedProperty(estuaryVendor, dataType)?.[
                              row.key
                          ] || {}
                  )
                : [];
        }, [estuaryVendor, dataType, rows]);

        return (
            <>
                <tr>
                    <th colSpan={4}>{title}</th>
                </tr>
                {rows.map((row, index) => (
                    <tr key={row.key}>
                        <td>{row.label}</td>
                        <TitledTableCell title={xVendor.name}>
                            {xVendorData[index].subText ? (
                                <FeatureData
                                    icon={xVendorData[index].icon}
                                    subText={xVendorData[index].subText}
                                    numberOfDollarSigns={
                                        dataType === 'cost'
                                            ? xVendorData[index]
                                                  .numberOfDollarSigns?.array
                                            : undefined
                                    }
                                />
                            ) : (
                                xVendorData[index]
                            )}
                        </TitledTableCell>
                        <TitledTableCell title={yVendor.name}>
                            {yVendorData[index].subText ? (
                                <FeatureData
                                    icon={yVendorData[index].icon}
                                    subText={yVendorData[index].subText}
                                    numberOfDollarSigns={
                                        dataType === 'cost'
                                            ? yVendorData[index]
                                                  .numberOfDollarSigns?.array
                                            : undefined
                                    }
                                />
                            ) : (
                                yVendorData[index]
                            )}
                        </TitledTableCell>
                        {estuaryVendor ? (
                            <TitledTableCell title={estuaryVendor.name}>
                                {estuaryVendorData[index].subText ? (
                                    <FeatureData
                                        icon={estuaryVendorData[index].icon}
                                        subText={
                                            estuaryVendorData[index].subText
                                        }
                                        numberOfDollarSigns={
                                            dataType === 'cost'
                                                ? estuaryVendorData[index]
                                                      .numberOfDollarSigns
                                                      ?.array
                                                : undefined
                                        }
                                    />
                                ) : (
                                    estuaryVendorData[index]
                                )}
                            </TitledTableCell>
                        ) : null}
                    </tr>
                ))}
            </>
        );
    }
);

export default TableRows;
