import React, { FC } from 'react';
import { grid } from './styles.module.less';

const Grid: FC = ({ children }) => <ul className={grid}>{children}</ul>;

export default Grid;
