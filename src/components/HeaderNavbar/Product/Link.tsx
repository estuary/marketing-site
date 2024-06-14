import Chevron from '@mui/icons-material/ChevronRight';
import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';

function ProductLink({ active }) {
    return (
        <Link className={clsx('global-header-link', active && 'active')} to="#">
            Product
            <Chevron className="menu-chevron" fontSize="small" />
        </Link>
    );
}

export default ProductLink;
