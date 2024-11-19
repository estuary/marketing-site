import React from 'react';
import Checkmark from '../../../../svgs/checkmark.svg';
import { container } from './styles.module.less';

type AdvantageProps = {
    title: string;
};

const iconSize = 32;

const Advantage = ({ title }: AdvantageProps) => (
    <div className={container}>
        <Checkmark width={iconSize} height={iconSize} color="#5072EB" />
        <p>{title}</p>
    </div>
);

export default Advantage;
