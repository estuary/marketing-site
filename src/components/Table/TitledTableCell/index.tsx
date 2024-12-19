import { ReactNode } from 'react';

interface TitledTableCellProps {
    title: string;
    children: ReactNode;
}

const TitledTableCell = ({ title, children }: TitledTableCellProps) => {
    return (
        <td>
            <strong>{title}</strong>
            {children}
        </td>
    );
};

export default TitledTableCell;
