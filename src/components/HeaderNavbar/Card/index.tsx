import React from 'react';
import clsx from 'clsx';

const HeaderCard = ({ show, children, customRef, ...props }) => {
    return (
        <div
            ref={customRef}
            className={clsx('header-card', show && 'show')}
            {...props}
        >
            {children}
        </div>
    );
};

export default HeaderCard;
