import Chevron from '@mui/icons-material/ChevronRight';
import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';
import { globalHeaderLink } from '../../styles.module.less';
import { menuChevron, activeHeaderLink } from '../styles.module.less';

function ResourcesLink({ active }) {
    return (
        <Link
            className={clsx(globalHeaderLink, active && activeHeaderLink)}
            to="#"
        >
            Resources
            <Chevron className={menuChevron} fontSize="small" />
        </Link>
    );
}

export default ResourcesLink;
