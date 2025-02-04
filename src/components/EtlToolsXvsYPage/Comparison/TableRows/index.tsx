import { memo, useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Collapse } from '@mui/material';
import FeatureData from '../FeatureData';
import TitledTableCell from '../../../Table/TitledTableCell';
import { accordionToggleButton, collapseWrapper } from './styles.module.less';

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
    expandedByDefault?: boolean;
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
        expandedByDefault = false,
    }: TableRowsProps) => {
        const [expandTableSection, setExpandTableSection] = useState(false);

        const toggleTableSectionOpen = () => {
            setExpandTableSection(!expandTableSection);
        };

        useEffect(() => {
            if (expandedByDefault) {
                setExpandTableSection(true);
            }
        }, [expandedByDefault]);

        return (
            <>
                <tr>
                    <th colSpan={4}>
                        <button
                            className={accordionToggleButton}
                            onClick={toggleTableSectionOpen}
                        >
                            {title}{' '}
                            {expandTableSection ? (
                                <ExpandLessIcon />
                            ) : (
                                <ExpandMoreIcon />
                            )}
                        </button>
                    </th>
                </tr>
                <tr>
                    <td colSpan={4} className={collapseWrapper}>
                        <Collapse in={expandTableSection} timeout="auto">
                            <table>
                                <tbody>
                                    {rows.map((row) => {
                                        const xVendorData: any =
                                            getNestedProperty(
                                                xVendor,
                                                dataType
                                            )?.[row.key] ?? {};
                                        const yVendorData: any =
                                            getNestedProperty(
                                                yVendor,
                                                dataType
                                            )?.[row.key] ?? {};
                                        const estuaryVendorData: any =
                                            estuaryVendor
                                                ? getNestedProperty(
                                                      estuaryVendor,
                                                      dataType
                                                  )?.[row.key] ?? {}
                                                : {};

                                        return (
                                            <tr key={row.key}>
                                                <td>{row.label}</td>
                                                <TitledTableCell
                                                    title={xVendor.name}
                                                >
                                                    {xVendorData.subText ? (
                                                        <FeatureData
                                                            icon={
                                                                xVendorData.icon
                                                            }
                                                            subText={
                                                                xVendorData.subText
                                                            }
                                                            numberOfDollarSigns={
                                                                dataType ===
                                                                'cost'
                                                                    ? xVendorData
                                                                          .numberOfDollarSigns
                                                                          ?.array
                                                                    : undefined
                                                            }
                                                        />
                                                    ) : null}
                                                    {typeof xVendorData ===
                                                    'string'
                                                        ? xVendorData
                                                        : null}
                                                </TitledTableCell>
                                                <TitledTableCell
                                                    title={yVendor.name}
                                                >
                                                    {yVendorData.subText ? (
                                                        <FeatureData
                                                            icon={
                                                                yVendorData.icon
                                                            }
                                                            subText={
                                                                yVendorData.subText
                                                            }
                                                            numberOfDollarSigns={
                                                                dataType ===
                                                                'cost'
                                                                    ? yVendorData
                                                                          .numberOfDollarSigns
                                                                          ?.array
                                                                    : undefined
                                                            }
                                                        />
                                                    ) : null}
                                                    {typeof yVendorData ===
                                                    'string'
                                                        ? yVendorData
                                                        : null}
                                                </TitledTableCell>
                                                {estuaryVendor ? (
                                                    <TitledTableCell
                                                        title={
                                                            estuaryVendor.name
                                                        }
                                                    >
                                                        {estuaryVendorData.subText ? (
                                                            <FeatureData
                                                                icon={
                                                                    estuaryVendorData.icon
                                                                }
                                                                subText={
                                                                    estuaryVendorData.subText
                                                                }
                                                                numberOfDollarSigns={
                                                                    dataType ===
                                                                    'cost'
                                                                        ? estuaryVendorData
                                                                              .numberOfDollarSigns
                                                                              ?.array
                                                                        : undefined
                                                                }
                                                            />
                                                        ) : null}
                                                        {typeof estuaryVendorData ===
                                                        'string'
                                                            ? estuaryVendorData
                                                            : null}
                                                    </TitledTableCell>
                                                ) : null}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </Collapse>
                    </td>
                </tr>
            </>
        );
    }
);

export default TableRows;
