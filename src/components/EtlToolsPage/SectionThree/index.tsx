import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { GatsbyImage } from 'gatsby-plugin-image';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import { Vendor } from '../../../../shared';
import Checkmark from '../../../svgs/checkmark.svg';
import {
    container,
    tabs,
    itemImage,
    gridCards,
    vendorTab,
    tabLabel,
} from './styles.module.less';
import '../styles.module.less';
import XvsYCard from './XvsYCard';
import TabPanel from './TabPanel';

const a11yProps = (vendorName: string | number) => ({
    'id': `vendor-tab-${vendorName}`,
    'aria-controls': `vendor-tabpanel-${vendorName}`,
});

interface SectionThreeProps {
    vendors: Vendor[];
}

const SectionThree = ({ vendors }: SectionThreeProps) => {
    const [selectedVendorId, setSelectedVendorId] = useState('');

    useEffect(() => {
        const estuaryFlowVendor = vendors.find((vendor) => {
            const vendorName = vendor.name.toLowerCase();
            return (
                vendorName.includes('estuary') || vendorName.includes('flow')
            );
        });

        if (estuaryFlowVendor) {
            setSelectedVendorId(estuaryFlowVendor.id);
        }
    }, [vendors]);

    const handleChangeSelectedVendor = (
        event: React.SyntheticEvent,
        newVendorId: string
    ) => {
        setSelectedVendorId(newVendorId);
    };

    const selectedVendor = vendors.find(
        (vendor) => vendor.id === selectedVendorId
    );

    return (
        <section className={defaultWrapperDark}>
            <div className={container}>
                <h2>Browse the Complete List of Comparisons</h2>
                <p>Choose a vendor and see how it compares to the rest.</p>
                <Tabs
                    value={selectedVendorId}
                    onChange={handleChangeSelectedVendor}
                    aria-label="Vendor comparison tabs"
                    TabIndicatorProps={{
                        style: { display: 'none' },
                    }}
                    className={tabs}
                >
                    {vendors.map(({ id, name, logo }) => (
                        <Tab
                            key={id}
                            label={
                                <div className={tabLabel}>
                                    <GatsbyImage
                                        image={
                                            logo?.localFile.childImageSharp
                                                ?.gatsbyImageData
                                        }
                                        alt={`${name} Logo`}
                                        className={itemImage}
                                    />
                                    <span>{name}</span>
                                    {selectedVendorId === id ? (
                                        <Checkmark width={20} color="#5072EB" />
                                    ) : null}
                                </div>
                            }
                            value={id}
                            {...a11yProps(name)}
                            className={vendorTab}
                            sx={{
                                '&.Mui-selected': {
                                    backgroundColor: '#5072EB26',
                                    border: '2px solid #5072EB',
                                    color: '#04192B',
                                },
                            }}
                        />
                    ))}
                </Tabs>
                {vendors.map(({ id }) => (
                    <TabPanel key={id} value={selectedVendorId} index={id}>
                        <div className={gridCards}>
                            {vendors
                                .filter(
                                    (yVendor) => yVendor.id !== selectedVendorId
                                )
                                .map((yVendor) =>
                                    selectedVendor ? (
                                        <XvsYCard
                                            key={yVendor.id}
                                            xVendor={selectedVendor}
                                            yVendor={yVendor}
                                        />
                                    ) : null
                                )}
                        </div>
                    </TabPanel>
                ))}
            </div>
        </section>
    );
};

export default SectionThree;
