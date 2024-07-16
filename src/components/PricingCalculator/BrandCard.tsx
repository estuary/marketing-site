import * as React from 'react';
import { currencyFormatter } from '../../utils';
import { usePricingCalculator } from './PricingCalculatorProvider';
import { BrandName, BrandPrice, BrandWrapper } from './styles';

type BrandCardProps = {
    title: string;
    price: number;
};

const BrandCard = ({ title, price }: BrandCardProps) => {
    const { isDarkTheme } = usePricingCalculator();

    return (
        <BrandWrapper $isDarkTheme={isDarkTheme}>
            <BrandName $isDarkTheme={isDarkTheme}>{title}</BrandName>
            <BrandPrice $isDarkTheme={isDarkTheme}>
                <span>{currencyFormatter.format(price)}</span> / month
            </BrandPrice>
        </BrandWrapper>
    );
};

export default BrandCard;
