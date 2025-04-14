import ChevronRight from '@mui/icons-material/ChevronRight';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { useMemo, useState } from 'react';
import { useLunr } from 'react-lunr';
import clsx from 'clsx';
import { debounce } from 'lodash';
import { ConnectorType, getSlugifiedText } from '../../../shared';
import FlowLogo from '../../svgs/flow-logo.svg';
import { fireTagEvent, normalizeConnector } from '../../utils';
import BigImageBackground from '../BackgroundImages/BigImageBackground';
import ConnectorsLink from '../ConnectorsLink';
import SearchInput from '../SearchInput';
import FlowLogoVector from '../FlowLogoVector';
import ConnectorLogoPlaceholder from '../ConnectorLogoPlaceholder';
import {
    container,
    connectorIndexHeader,
    connectorBottomLink,
    connectorBottomFlow,
    connectorBottomVector,
    connectorOnlycards,
    connectorOnlycardsBackgroundImage,
    connectorCards,
    connectorsSearch,
    connectorsSearchBody,
    connectorCardTop,
    connectorPostCardImage,
    connectorPostCardRecommended,
    connectorCardReadMore,
    connectorCard,
    connectorBottomButton,
} from './styles.module.less';

export interface ConnectorsProps {
    connectorType?: ConnectorType;
    title?: string;
    description?: string;
    bottomTitle?: string;
    bottomDescription?: string;
    showAllConnectors?: boolean;
}

const truncate = (val: string, max: number) => {
    if (val.length > max) {
        const words = val.split(' ');
        const allowed: string[] = [];
        let len = 0;
        while (len < max) {
            const word = words.shift();
            if (word) {
                allowed.push(word);
                len = len + word.length + 1;
            }
        }
        return `${allowed.join(' ')}...`;
    } else {
        return val;
    }
};

const connectorIconSize = 53;

const connectorLogoClassName = clsx(connectorPostCardImage, 'icon-wrapper');

const ConnectorCard = ({
    title,
    shortDescription,
    recommended,
    logo,
    slug,
    type,
    showType = false,
}: ReturnType<typeof normalizeConnector> & { showType?: boolean }) => {
    return (
        <Link
            id={`${getSlugifiedText(title)}-link/connectors-page`}
            to={`${slug}`}
        >
            <div className={connectorCard}>
                <div className={connectorCardTop}>
                    {logo.childImageSharp?.gatsbyImageData ? (
                        <GatsbyImage
                            image={logo.childImageSharp.gatsbyImageData}
                            alt={`${title} Logo`}
                            className={connectorLogoClassName}
                            loading="eager"
                        />
                    ) : (
                        <ConnectorLogoPlaceholder
                            connectorType={type}
                            connectorIconSize={connectorIconSize}
                            className={connectorLogoClassName}
                        />
                    )}
                    {recommended || showType ? (
                        <div style={{ flexGrow: 1 }} />
                    ) : null}
                    {recommended ? (
                        <div>
                            <p className={connectorPostCardRecommended}>
                                RECOMMENDED
                            </p>
                        </div>
                    ) : null}
                    {showType ? (
                        <>
                            {recommended ? (
                                <div style={{ flexBasis: 4 }} />
                            ) : null}
                            <div>
                                <p className={connectorPostCardRecommended}>
                                    {type === 'capture'
                                        ? 'SOURCE'
                                        : 'DESTINATION'}
                                </p>
                            </div>
                        </>
                    ) : null}
                </div>
                <h4>{title}</h4>
                {shortDescription && shortDescription.length > 0 ? (
                    <p>{truncate(shortDescription, 100)}</p>
                ) : null}
                <div style={{ flexGrow: 1 }} />
                <span className={connectorCardReadMore}>
                    Read More <ChevronRight />
                </span>
            </div>
        </Link>
    );
};

export const Connectors = ({
    connectorType,
    title,
    description,
    bottomTitle,
    bottomDescription,
    showAllConnectors = false,
}: ConnectorsProps) => {
    const {
        postgres,
        localSearchConnectors: { index, store },
    } = useStaticQuery(graphql`
        query ConnectorsRootQuery {
            localSearchConnectors {
                index
                store
            }
            postgres {
                allConnectors(orderBy: [RECOMMENDED_DESC, CREATED_AT_DESC]) {
                    nodes {
                        id
                        externalUrl
                        imageName
                        shortDescription
                        longDescription
                        title
                        logoUrl
                        logo {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: CONSTRAINED
                                    placeholder: NONE
                                    quality: 95
                                    width: 53
                                )
                            }
                        }
                        recommended
                        connectorTagsByConnectorIdList {
                            protocol
                        }
                    }
                }
            }
        }
    `);

    const mappedConnectors = useMemo(
        () =>
            postgres.allConnectors.nodes
                .map(normalizeConnector)
                .filter(
                    (connector) =>
                        connector !== undefined &&
                        (connectorType
                            ? connector.type === connectorType
                            : true)
                )
                // eslint-disable-next-line array-callback-return
                .sort((a, b) => {
                    // Sort by recommended, alphabetically
                    // then show all captures, sorted alphabetically
                    // then show all destinations, sorted alphabetically
                    const alpha_sort =
                        a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1;
                    if (a.recommended && b.recommended) {
                        return alpha_sort;
                    } else if (a.recommended) {
                        return -1;
                    } else if (b.recommended) {
                        return 1;
                    } else if (a.type === b.type) {
                        return alpha_sort;
                    } else if (a.type === 'capture') {
                        return -1;
                    }
                }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [postgres]
    );

    const logosByConnectorId = useMemo(() => {
        return Object.assign(
            {},
            ...mappedConnectors.map((con) => ({ [con.id]: con.logo }))
        );
    }, [mappedConnectors]);

    const [query, setQuery] = useState('');

    const results = useLunr(
        query.length > 0
            ? query
                  .split(' ')
                  .map((term) => `${term}* ${term}~1`)
                  .join(' ')
            : '',
        index,
        store
    ).filter((res) =>
        showAllConnectors ? true : (res as any).type === connectorType
    );

    const handleQueryChange = (evt: any) => {
        const newVal = evt.target.value;
        setQuery(newVal ?? '');

        if (newVal && newVal.length > 0) {
            fireTagEvent('event', 'Connector_Search', {
                filterQuery: newVal,
            });
        }
    };

    const debouncedHandleQueryChange = useMemo(
        () => debounce(handleQueryChange, 400),
        []
    );

    return (
        <BigImageBackground>
            <div className={container}>
                <div className={connectorIndexHeader}>
                    <div style={{ maxWidth: '30rem' }}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <FlowLogoVector />
                </div>
                <div className={connectorsSearch}>
                    <div className={connectorsSearchBody}>
                        <SearchInput
                            placeholder={`Search ${title}`}
                            handleQueryChange={debouncedHandleQueryChange}
                        />
                        <ConnectorsLink />
                    </div>
                </div>
                <div className={connectorCards}>
                    {(query.length > 0 ? results : mappedConnectors).map(
                        (connector) => {
                            return (
                                <ConnectorCard
                                    key={connector.id}
                                    {...connector}
                                    logo={logosByConnectorId[connector.id]}
                                    showType={showAllConnectors}
                                />
                            );
                        }
                    )}
                </div>
            </div>
            <>
                <div className={connectorOnlycardsBackgroundImage}>
                    <div className={connectorOnlycards}>
                        <h2>All your data, </h2>
                        <h2>where you need it</h2>
                        <p>
                            Consolidate your data into the leading warehouses,
                            then integrate with your tools of choice.
                        </p>
                    </div>
                </div>

                {showAllConnectors ? null : (
                    <div className={connectorBottomLink}>
                        <div style={{ maxWidth: '30rem' }}>
                            <h2>{bottomTitle}</h2>
                            <p>{bottomDescription}</p>
                            <Link
                                to={`/${bottomTitle?.toLowerCase()}`}
                                className={connectorBottomButton}
                            >
                                See all {bottomTitle?.toLowerCase()}
                            </Link>
                        </div>
                        <div
                            style={{ display: 'block' }}
                            className={connectorBottomVector}
                        >
                            <FlowLogo className={connectorBottomFlow} />
                            <StaticImage
                                src="../../images/connectors-bottom.png"
                                alt={
                                    bottomTitle ??
                                    'Connectors logos background image'
                                }
                                width={500}
                            />
                        </div>
                    </div>
                )}
            </>
        </BigImageBackground>
    );
};
