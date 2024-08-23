import { Link } from 'gatsby';
import * as React from 'react';
import ColoredLogo from '../../svgs/colored-logo.svg';
import { OutboundLink } from '../OutboundLink';
import {
    globalHeaderLogoLink,
    globalHeaderLogo,
    globalHeaderTitle,
} from '../styles.module.less';
import { dashboardRegisterUrl } from '../../../shared';
import { navItems } from './utils';

const Navigation = ({ activePage, setActivePage }) => (
    <div className="sidebar-wrap">
        <div>
            <div className="sidebar-logo">
                <Link className={globalHeaderLogoLink} to="/">
                    <ColoredLogo
                        className={globalHeaderLogo}
                        style={{ width: 27, height: 35 }}
                    />
                    <strong className={globalHeaderTitle}>Estuary</strong>
                </Link>
            </div>
            <div className="sidebar-nav">
                {navItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <div
                            className={`nav-item ${item.activePages.includes(activePage) ? 'active' : ''}`}
                            onClick={() => setActivePage(item.page)}
                        >
                            {item.label}
                        </div>
                        {item.steps ? (
                            <ul className="item-steps">
                                {item.steps.map((step, stepIndex) => (
                                    <li
                                        key={stepIndex}
                                        className={`${activePage === step.page ? 'active' : ''}`}
                                        onClick={() => setActivePage(step.page)}
                                    >
                                        {step.label}
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </React.Fragment>
                ))}
            </div>
        </div>
        <div className="ctas-wrap">
            <OutboundLink
                target="_blank"
                href={dashboardRegisterUrl}
                className="pipeline-link"
            >
                Build a Pipeline
            </OutboundLink>
            <OutboundLink
                target="_blank"
                href="https://docs.estuary.dev/"
                className="doc-link"
            >
                View Docs
            </OutboundLink>
        </div>
    </div>
);

export default Navigation;
