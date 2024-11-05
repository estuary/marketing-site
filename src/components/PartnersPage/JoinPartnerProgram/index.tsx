import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import PartnerProgramDetails from '../PartnerProgramDetails';
import { Partner } from '../shared';
import TopPlatformIcon from '../../../svgs/top-platform.svg';
import { container } from './styles.module.less';

const partners: Partner[] = [
    // Replace this with real logos
    {
        icon: <TopPlatformIcon color="#5072EB" />,
        name: 'Azure Storage',
    },
    {
        icon: <TopPlatformIcon color="#5072EB" />,
        name: 'Azure Storage',
    },
    {
        icon: <TopPlatformIcon color="#5072EB" />,
        name: 'Azure Storage',
    },
    {
        icon: <TopPlatformIcon color="#5072EB" />,
        name: 'Azure Storage',
    },
    {
        icon: <TopPlatformIcon color="#5072EB" />,
        name: 'Azure Storage',
    },
    {
        icon: <TopPlatformIcon color="#5072EB" />,
        name: 'Azure Storage',
    },
    {
        icon: <TopPlatformIcon color="#5072EB" />,
        name: 'Azure Storage',
    },
    {
        icon: <TopPlatformIcon color="#5072EB" />,
        name: 'Azure Storage',
    },
];

const JoinPartnerProgram = () => (
    <section className={defaultWrapperGrey}>
        <div className={container}>
            <h2>JOIN THE ESTUARY PARTNER PROGRAM</h2>
            <p>
                Join leaders in the data integration space. If you have the
                technology, solutions, and expertise to drive faster, smarter
                data integration, we want to partner with you.
            </p>
            <PartnerProgramDetails
                title="SERVICE INTEGRATION PARTNERS"
                description="Enable clients to build efficient, real-time data pipelines using Estuary Flow, transforming their data management and analytics capabilities."
                partners={partners}
            />
        </div>
    </section>
);

export default JoinPartnerProgram;
