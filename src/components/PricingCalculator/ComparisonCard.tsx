import { currencyFormatter } from '../../utils';
import { brandName, brandPrice, brandWrapper } from './styles.module.less';

interface ComparisonCardProps {
    title: string;
    price: number;
}

const ComparisonCard = ({ title, price }: ComparisonCardProps) => {
    return (
        <div className={brandWrapper}>
            <span className={brandName}>{title}</span>
            <span className={brandPrice}>
                <span>{currencyFormatter.format(price)}</span> / month
            </span>
        </div>
    );
};

export default ComparisonCard;
