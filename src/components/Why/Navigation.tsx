import { Link } from 'gatsby';
import * as React from 'react';
import ColoredLogo from '../../svgs/colored-logo.svg';
import { OutboundLink } from '../OutboundLink';
import { navItems } from './utils';

const Navigation = ({ activePage, setActivePage }) => (
  <div className="sidebar-wrap">
    <div>
      <div className="sidebar-logo">
        <Link className="global-header-logo-link" to="/">
          <ColoredLogo
            className="global-header-logo"
            style={{ width: 27, height: 35 }}
          />
          <h1 className="global-header-title">Estuary</h1>
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
        href="https://dashboard.estuary.dev/register"
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
