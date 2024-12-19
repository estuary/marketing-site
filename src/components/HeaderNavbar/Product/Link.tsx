import Chevron from '@mui/icons-material/ChevronRight';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { globalHeaderLink } from '../../styles.module.less';
import { menuChevron, activeHeaderLink } from '../styles.module.less';

function ProductLink({ active }) {
    return (
        <Link
            className={clsx(globalHeaderLink, active && activeHeaderLink)}
            to="#"
        >
            Product
            <Chevron className={menuChevron} fontSize="small" />
        </Link>
    );
}

export default ProductLink;
