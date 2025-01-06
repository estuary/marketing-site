import { Link } from 'gatsby';
import clsx from 'clsx';
import { Fragment } from 'react';
import ColoredLogo from '../../svgs/colored-logo.svg';
import {
    globalHeaderLogoLink,
    globalHeaderLogo,
    globalHeaderTitle,
} from '../styles.module.less';
import { dashboardRegisterUrl, docsPageUrl } from '../../../shared';
import OutboundLink from '../LinksAndButtons/OutboundLink';
import { navItems } from './utils';
import {
    sidebarWrap,
    sidebarLogo,
    ctasWrap,
    pipelineLink,
    docLink,
    navItem,
    active,
    itemSteps,
} from './styles.module.less';

const Navigation = ({ activePage, setActivePage }) => (
    <div className={sidebarWrap}>
        <div>
            <div className={sidebarLogo}>
                <Link className={globalHeaderLogoLink} to="/">
                    <ColoredLogo
                        className={globalHeaderLogo}
                        style={{ width: 27, height: 35 }}
                    />
                    <strong className={globalHeaderTitle}>Estuary</strong>
                </Link>
            </div>
            <div>
                {navItems.map((item, index) => (
                    <Fragment key={index}>
                        <div
                            className={clsx(
                                navItem,
                                item.activePages.includes(activePage)
                                    ? active
                                    : ''
                            )}
                            onClick={() => setActivePage(item.page)}
                        >
                            {item.label}
                        </div>
                        {item.steps ? (
                            <ul className={itemSteps}>
                                {item.steps.map((step, stepIndex) => (
                                    <li
                                        key={stepIndex}
                                        className={`${activePage === step.page ? active : ''}`}
                                        onClick={() => setActivePage(step.page)}
                                    >
                                        {step.label}
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </Fragment>
                ))}
            </div>
        </div>
        <div className={ctasWrap}>
            <OutboundLink
                target="_blank"
                href={dashboardRegisterUrl}
                className={pipelineLink}
            >
                Build a Pipeline
            </OutboundLink>
            <OutboundLink
                target="_blank"
                href={docsPageUrl}
                className={docLink}
            >
                View Docs
            </OutboundLink>
        </div>
    </div>
);

export default Navigation;
