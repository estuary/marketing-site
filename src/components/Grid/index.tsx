import React, { FC } from 'react';
import clsx from 'clsx';
import { grid } from './styles.module.less';

interface GridProps {
    className?: string;
}

const Grid: FC<GridProps> = ({ children, className }) => (
    <ul className={clsx(grid, className)}>{children}</ul>
);

export default Grid;
