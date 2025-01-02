import { Fragment } from 'react';
import DollarSignIcon from '../../../../svgs/dollar-sign.svg';
import HyphenIcon from '../../../../svgs/hyphen.svg';
import { dollarSignsWrapper } from './styles.module.less';

const iconColor = 'var(--violet)';

const DollarSigns = ({ numberOfDollarSigns }) => {
    if (!numberOfDollarSigns) return null;

    return (
        <div className={dollarSignsWrapper}>
            {numberOfDollarSigns.map((num, index) => (
                <Fragment key={index}>
                    {Array.from({ length: num }).map((_, i) => (
                        <DollarSignIcon key={i} color={iconColor} />
                    ))}
                    {index < numberOfDollarSigns.length - 1 ? (
                        <HyphenIcon color={iconColor} />
                    ) : null}
                </Fragment>
            ))}
        </div>
    );
};

export default DollarSigns;
