import clsx from 'clsx';
import { currencyFormatter } from '../../utils';
import {
    brandPrice,
    brandWrapper,
    secondaryHighlightedCard,
} from './styles.module.less';

interface ComparisonCardProps {
    title: string;
    price: number;
}

const ComparisonCard = ({ title, price }: ComparisonCardProps) => {
    return (
        <div className={clsx(brandWrapper, secondaryHighlightedCard)}>
            <span className={brandPrice}>
                Compared to {title}, you save{' '}
                <strong>{currencyFormatter.format(price)}</strong> / month!
            </span>
        </div>
    );
};

export default ComparisonCard;
