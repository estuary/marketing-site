import clsx from 'clsx';
import { FC } from 'react';
import './styles.less';

interface MetricCardsListProps {
    hasIconCards?: boolean;
}

const MetricCardsList: FC<MetricCardsListProps> = ({
    children,
    hasIconCards,
}) => {
    return (
        <ul
            className={clsx(
                'metric-cards-list',
                hasIconCards ? 'metric-cards-with-icon' : null
            )}
        >
            {children}
        </ul>
    );
};

export default MetricCardsList;
