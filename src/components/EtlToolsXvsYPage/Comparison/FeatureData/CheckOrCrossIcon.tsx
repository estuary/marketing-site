import React from 'react';
import Checkmark from '../../../../svgs/checkmark.svg';
import CrossIcon from '../../../../svgs/cross.svg';

const CheckOrCrossIcon = ({ icon }) => {
    if (icon === true) {
        return <Checkmark width={20} color="#2DA771" />;
    } else if (icon === false) {
        return <CrossIcon width={20} color="var(--red)" />;
    }
    return null;
};

export default CheckOrCrossIcon;
