import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { Link } from 'gatsby';
import * as React from 'react';
import BlackCheckmark from '../svgs/checkmark-black.svg';
import PricingCloud from '../svgs/cloud-pricing.svg';
import WhiteCheckmark from '../svgs/light-checkmark.svg';
import PricingOpenSource from '../svgs/pricing-open-source-black.svg';
import { costPerGB } from '../utils';
import { OutboundLink } from './OutboundLink';

interface CustomTabPanelProps {
    children: React.ReactNode;
    value: number;
    index: number;
    style?: React.CSSProperties;
    [key: string]: any;
}

function CustomTabPanel({
    children,
    value,
    index,
    ...other
}: CustomTabPanelProps) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index ? (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            ) : null}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        'id': `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ChecklistItem = ({ children, white = false }) => (
    <div className="pricing-page-checklist-item">
        {white ? (
            <>
                <WhiteCheckmark className="pricing-page-tile-checkmark-image" />
                <p className="pricing-page-tile-checklist-item-text text-white">
                    {children}
                </p>
            </>
        ) : (
            <>
                <BlackCheckmark className="pricing-page-tile-checkmark-image" />
                <p className="pricing-page-tile-checklist-item-text">
                    {children}
                </p>
            </>
        )}
    </div>
);

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="pricing plan tabs"
                >
                    <Tab
                        icon={
                            <PricingOpenSource className="pricing-page-tile-icon" />
                        }
                        label="Free"
                        {...a11yProps(0)}
                    />
                    <Tab
                        icon={<PricingCloud />}
                        label="Cloud"
                        {...a11yProps(1)}
                    />
                    <Tab
                        icon={<PricingCloud />}
                        label="Enterprise"
                        {...a11yProps(2)}
                    />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <div className="pricing-page-tile">
                    <div className="pricing-page-checklist-wrapper">
                        <ChecklistItem>
                            Up to 10GB / mo for any 2 connectors
                        </ChecklistItem>
                        <ChecklistItem>Millisecond Latency</ChecklistItem>
                        <ChecklistItem>
                            UI & CLI for building & monitoring pipelines
                        </ChecklistItem>
                        <ChecklistItem>
                            Limited Data Retention in Estuary Cloud
                        </ChecklistItem>
                        <ChecklistItem>
                            Incremental Syncing for lower CDC cost
                        </ChecklistItem>
                        <ChecklistItem>Streaming Infrastructure</ChecklistItem>
                    </div>
                    <Link
                        className="pricing-page-tile-button"
                        to="https://github.com/estuary/flow"
                    >
                        Get started
                    </Link>
                </div>
            </CustomTabPanel>
            <CustomTabPanel
                style={{ backgroundColor: '#5072EB' }}
                value={value}
                index={1}
            >
                <div className="pricing-page-checklist-wrapper">
                    <ChecklistItem white>
                        {costPerGB} change data moved +$.14/hour/connector
                    </ChecklistItem>
                    <ChecklistItem white>
                        All features of Free plan, plus...{' '}
                    </ChecklistItem>
                    <ChecklistItem white>
                        Data stored in your cloud
                    </ChecklistItem>
                    <ChecklistItem white>99.9% uptime SLA</ChecklistItem>

                    <ChecklistItem white>Unlimited Connectors</ChecklistItem>
                    <ChecklistItem white>
                        9x5 Customer Support via Slack/Email
                    </ChecklistItem>
                </div>
                <OutboundLink
                    target="_blank"
                    href="https://dashboard.estuary.dev/register"
                    className="pricing-page-tile-button-white"
                >
                    Try it free
                </OutboundLink>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <div className="pricing-page-checklist-wrapper-custom">
                    <ChecklistItem>
                        All features of Free + Cloud, plus...
                    </ChecklistItem>
                    <ChecklistItem>SOC2 & HIPAA Certificates</ChecklistItem>
                    <ChecklistItem>Customer Success Manager</ChecklistItem>
                    <ChecklistItem>24x7 support available</ChecklistItem>
                    <ChecklistItem>Provisioned servers</ChecklistItem>
                </div>
                <Link
                    className="pricing-page-tile-button"
                    to="/about#contact-us"
                >
                    Contact us
                </Link>
            </CustomTabPanel>
        </Box>
    );
}
