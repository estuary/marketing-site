import { Link } from 'gatsby';
import ChevronRightIcon from '../../../svgs/chevron-right.svg';

interface HeaderViewAllLinkProps {
    to: string;
    viewAllSuffix: string;
}

const HeaderViewAllLink = ({ viewAllSuffix, to }: HeaderViewAllLinkProps) => {
    return (
        <Link to={to}>
            View all {viewAllSuffix}
            <ChevronRightIcon color="var(--blue)" height={12} />
        </Link>
    );
};

export default HeaderViewAllLink;
