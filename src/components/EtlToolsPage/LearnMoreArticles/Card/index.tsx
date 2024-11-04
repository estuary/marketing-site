import React from 'react';
import FileIcon from '../../../../svgs/file.svg';
import { LinkOutlined } from '../../../../globalStyles';
import { container } from './styles.module.less';

interface CardProps {
    title: string;
    buttonHref: string;
}

const Card = ({ title, buttonHref }: CardProps) => {
    return (
        <div className={container}>
            <div>
                <FileIcon color="#5072EB" />
            </div>
            <h3>{title}</h3>
            <LinkOutlined href={buttonHref}>Read</LinkOutlined>
        </div>
    );
};

export default Card;
