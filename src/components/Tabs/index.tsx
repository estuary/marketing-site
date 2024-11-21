// src/components/Tabs.tsx
import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';
import {
    tabStyle,
    activeTabStyle,
    container,
    tabList,
} from './styles.module.less';

interface TabData {
    label: string;
    content: ReactNode;
}

interface TabsProps {
    tabs: TabData[];
}

const Tabs = ({ tabs }: TabsProps) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => setActiveTab(index);

    return (
        <div className={container}>
            <div className={tabList}>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={clsx(
                            tabStyle,
                            activeTab === index ? activeTabStyle : null
                        )}
                    >
                        <span>{tab.label}</span>
                    </div>
                ))}
            </div>
            {tabs[activeTab].content}
        </div>
    );
};

export default Tabs;
