import React, { ReactNode } from 'react';
import { vendorNameMobile } from '../styles.module.less';

interface TitledTableCellProps {
    title: string;
    children: ReactNode;
}

const TitledTableCell = ({ title, children }: TitledTableCellProps) => {
    return (
        <td>
            <strong className={vendorNameMobile}>{title}</strong>
            {children}
        </td>
    );
};

export default TitledTableCell;
