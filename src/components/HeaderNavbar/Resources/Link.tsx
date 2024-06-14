import Chevron from '@mui/icons-material/ChevronRight';
import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';

function ResourcesLink({ active }) {
    return (
        <Link className={clsx('global-header-link', active && 'active')} to="#">
            Resources
            <Chevron className="menu-chevron" fontSize="small" />
        </Link>
    );
}

export default ResourcesLink;
