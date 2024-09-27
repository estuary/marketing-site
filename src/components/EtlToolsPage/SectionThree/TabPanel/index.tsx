import React from 'react';

interface TabPanelProps {
    children: React.ReactNode;
    value: string | number;
    index: string | number;
}

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
    >
        {value === index ? <div>{children}</div> : null}
    </div>
);

export default TabPanel;
