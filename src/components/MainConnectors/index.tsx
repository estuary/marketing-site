import clsx from 'clsx';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import OpenaiLogo from '../../svgs/openai-logo.svg';
import PineconeLogo from '../../svgs/pinecone-logo.svg';
import {
    connector,
    container,
    hasLightBackgroundColor,
    link,
} from './styles.module.less';

type MainConnectorsProps = {
    isLightTheme?: boolean;
};

const MainConnectors = ({ isLightTheme = false }: MainConnectorsProps) => {
    const linkClasses = clsx(link, isLightTheme && hasLightBackgroundColor);
    const svgLogoColor = isLightTheme ? '#04192B' : '#ffffff';

    return (
        <ul className={container}>
            <li className={connector} key="main-connector-amazon-redshift-logo">
                <Link to="/destination/redshift" className={linkClasses}>
                    <StaticImage
                        placeholder="none"
                        alt="Amazon Redshift logo"
                        src="../../images/amazon-redshift-logo.png"
                    />
                </Link>
            </li>
            <li className={connector} key="main-connector-databricks-logo">
                <Link to="/destination/databricks" className={linkClasses}>
                    <StaticImage
                        placeholder="none"
                        alt="Databricks logo"
                        src="../../images/databricks-logo.png"
                    />
                </Link>
            </li>
            <li className={connector} key="main-connector-elastic-logo">
                <Link to="/destination/elasticsearch" className={linkClasses}>
                    <StaticImage
                        placeholder="none"
                        alt="Elastic logo"
                        src="../../images/elastic-logo.png"
                    />
                </Link>
            </li>
            <li className={connector} key="main-connector-google-storage-logo">
                <Link to="/source/gcs" className={linkClasses}>
                    <StaticImage
                        placeholder="none"
                        alt="Google Storage logo"
                        src="../../images/google-storage-logo.png"
                    />
                </Link>
            </li>
            <li className={connector} key="main-connector-openai-logo">
                <Link to="/destination/pinecone" className={linkClasses}>
                    <OpenaiLogo color={svgLogoColor} />
                </Link>
            </li>
            <li className={connector} key="main-connector-mongodb-logo">
                <Link to="/destination/mongodb" className={linkClasses}>
                    <StaticImage
                        placeholder="none"
                        alt="MongoDB logo"
                        src="../../images/mongodb-logo.png"
                    />
                </Link>
            </li>
            <li className={connector} key="main-connector-pinecone-logo">
                <Link to="/destination/pinecone" className={linkClasses}>
                    <PineconeLogo color={svgLogoColor} />
                </Link>
            </li>
        </ul>
    );
};

export default MainConnectors;
