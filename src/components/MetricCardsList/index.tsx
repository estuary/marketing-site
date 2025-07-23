import clsx from 'clsx';
import { FC } from 'react';
import { metricCardsList, metricCardsWithIcon } from './styles.module.less';

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
                metricCardsList,
                hasIconCards ? metricCardsWithIcon : null
            )}
        >
            {children}
        </ul>
    );
};

export default MetricCardsList;
