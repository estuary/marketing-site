import Chevron from '@mui/icons-material/ChevronRight';
import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';
import { globalHeaderLink } from '../../styles.module.less';
import { menuChevron, isActive } from '../styles.module.less';

function ProductLink({ active }) {
    return (
        <Link className={clsx(globalHeaderLink, active && isActive)} to="#">
            Product
            <Chevron className={menuChevron} fontSize="small" />
        </Link>
    );
}

export default ProductLink;
