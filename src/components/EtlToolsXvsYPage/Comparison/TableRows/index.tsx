import { memo } from 'react';
import FeatureData from '../FeatureData';
import TitledTableCell from '../../../Table/TitledTableCell';

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

const TableRows = memo(
    ({
        title,
        rows,
        xVendor,
        yVendor,
        estuaryVendor,
        dataType,
    }: TableRowsProps) => {
        return (
            <>
                <tr>
                    <th colSpan={4}>{title}</th>
                </tr>
                {rows.map((row) => {
                    const xVendorData: any =
                        getNestedProperty(xVendor, dataType)?.[row.key] ?? {};
                    const yVendorData: any =
                        getNestedProperty(yVendor, dataType)?.[row.key] ?? {};
                    const estuaryVendorData: any = estuaryVendor
                        ? getNestedProperty(estuaryVendor, dataType)?.[
                              row.key
                          ] ?? {}
                        : {};

                    return (
                        <tr key={row.key}>
                            <td>{row.label}</td>
                            <TitledTableCell title={xVendor.name}>
                                {xVendorData.subText ? (
                                    <FeatureData
                                        icon={xVendorData.icon}
                                        subText={xVendorData.subText}
                                        numberOfDollarSigns={
                                            dataType === 'cost'
                                                ? xVendorData
                                                      .numberOfDollarSigns
                                                      ?.array
                                                : undefined
                                        }
                                    />
                                ) : (
                                    xVendorData
                                )}
                            </TitledTableCell>
                            <TitledTableCell title={yVendor.name}>
                                {yVendorData.subText ? (
                                    <FeatureData
                                        icon={yVendorData.icon}
                                        subText={yVendorData.subText}
                                        numberOfDollarSigns={
                                            dataType === 'cost'
                                                ? yVendorData
                                                      .numberOfDollarSigns
                                                      ?.array
                                                : undefined
                                        }
                                    />
                                ) : (
                                    yVendorData
                                )}
                            </TitledTableCell>
                            {estuaryVendor ? (
                                <TitledTableCell title={estuaryVendor.name}>
                                    {estuaryVendorData.subText ? (
                                        <FeatureData
                                            icon={estuaryVendorData.icon}
                                            subText={estuaryVendorData.subText}
                                            numberOfDollarSigns={
                                                dataType === 'cost'
                                                    ? estuaryVendorData
                                                          .numberOfDollarSigns
                                                          ?.array
                                                    : undefined
                                            }
                                        />
                                    ) : (
                                        estuaryVendorData
                                    )}
                                </TitledTableCell>
                            ) : null}
                        </tr>
                    );
                })}
            </>
        );
    }
);

export default TableRows;
