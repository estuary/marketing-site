import React from 'react';
import TitledTableCell from './TitledTableCell';
import { table } from './styles.module.less';

const Table = ({ headers, data }) => {
    return (
        <table className={table}>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) =>
                            cellIndex === 0 ? (
                                <td key={cellIndex}>{cell}</td>
                            ) : (
                                <TitledTableCell
                                    key={cellIndex}
                                    title={headers[cellIndex]}
                                >
                                    {cell}
                                </TitledTableCell>
                            )
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
