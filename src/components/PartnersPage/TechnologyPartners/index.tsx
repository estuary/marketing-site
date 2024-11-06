import React from 'react';
import {
    defaultWrapperDarkBlue,
    globalMaxWidth,
} from '../../../globalStyles/wrappers.module.less';
import PartnerProgramDetails from '../PartnerProgramDetails';
import { Partner } from '../shared';
import TopPlatformIcon from '../../../svgs/top-platform.svg';

const partners: Partner[] = [
    // Replace this with real logos
    {
        icon: <TopPlatformIcon color="#5072EB" width={40} height={40} />,
        name: 'Azure Storage',
    },
    {
        icon: <TopPlatformIcon color="#5072EB" width={40} height={40} />,
        name: 'Azure Storage',
    },
    {
        icon: <TopPlatformIcon color="#5072EB" width={40} height={40} />,
        name: 'Azure Storage',
    },
    {
        icon: <TopPlatformIcon color="#5072EB" width={40} height={40} />,
        name: 'Azure Storage',
    },
    {
        icon: <TopPlatformIcon color="#5072EB" width={40} height={40} />,
        name: 'Azure Storage',
    },
    {
        icon: <TopPlatformIcon color="#5072EB" width={40} height={40} />,
        name: 'Azure Storage',
    },
    {
        icon: <TopPlatformIcon color="#5072EB" width={40} height={40} />,
        name: 'Azure Storage',
    },
    {
        icon: <TopPlatformIcon color="#5072EB" width={40} height={40} />,
        name: 'Azure Storage',
    },
];

const TechnologyPartners = () => (
    <section className={defaultWrapperDarkBlue}>
        <div className={globalMaxWidth}>
            <PartnerProgramDetails
                title="TECHNOLOGY PARTNERS"
                description="Integrate seamlessly with Estuary Flow to enhance the data ecosystem. The Estuary Partner Program is designed to simplify the process for developers and businesses looking to integrate real-time data solutions."
                partners={partners}
                isReverse
                isDarkTheme
            />
        </div>
    </section>
);

export default TechnologyPartners;
