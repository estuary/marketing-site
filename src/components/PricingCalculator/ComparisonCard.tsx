import * as React from 'react';
import { currencyFormatter } from '../../utils';
import { BrandName, BrandPrice, BrandWrapper } from './styles';

interface ComparisonCardProps {
    title: string;
    price: number;
}

const ComparisonCard = ({ title, price }: ComparisonCardProps) => {
    return (
        <BrandWrapper>
            <BrandName>{title}</BrandName>
            <BrandPrice>
                <span>{currencyFormatter.format(price)}</span> / month
            </BrandPrice>
        </BrandWrapper>
    );
};

export default ComparisonCard;
