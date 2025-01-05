import React from 'react';
import { tagStyle } from './styles.module.less';

interface TagProps {
    children: string;
}

const Tag = ({ children }: TagProps) => (
    <span className={tagStyle}>{children}</span>
);

export default Tag;
