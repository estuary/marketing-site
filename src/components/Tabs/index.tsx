// src/components/Tabs.tsx
import React, { ReactNode, useState } from 'react';
import { Tab, TabContainer, TabList } from './styles';

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
        <TabContainer>
            <TabList>
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        $isActive={activeTab === index}
                        onClick={() => handleTabClick(index)}
                    >
                        <span>{tab.label}</span>
                    </Tab>
                ))}
            </TabList>
            {tabs[activeTab].content}
        </TabContainer>
    );
};

export default Tabs;
