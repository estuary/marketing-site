import { Link } from 'gatsby';
import { ReactNode } from 'react';
import { connector, logoWrapper } from '../styles.module.less';

interface ConnectorLinkProps {
    connectorId: string;
    to: string;
    image: ReactNode;
    connectorName: string;
}

const ConnectorLink = ({
    connectorId,
    to,
    image,
    connectorName,
}: ConnectorLinkProps) => {
    return (
        <Link
            id={`${connectorId}-connector-button/how-it-works-section/product-page`}
            className={connector}
            to={to}
        >
            <div className={logoWrapper}>{image}</div>
            <span>{connectorName}</span>
        </Link>
    );
};

export default ConnectorLink;
