import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { GatsbyImage } from 'gatsby-plugin-image';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import { Vendor } from '../../../../shared';
import Checkmark from '../../../svgs/checkmark.svg';
import { sectionTitle } from '../styles.module.less';
import {
    container,
    tabs,
    itemImage,
    gridCards,
    tabLabel,
} from './styles.module.less';
import XvsYCard from './XvsYCard';

const a11yProps = (vendorId: string) => ({
    'id': `vendor-tab-${vendorId}`,
    'aria-controls': `vendor-tabpanel-${vendorId}`,
});

const tabStyling = {
    'border': '1px solid #5072EB4D',
    'borderRadius': '100px',
    'textTransform': 'none',
    'color': '#04192B',
    'transition': 'var(--default-transition)',

    '&:hover': {
        backgroundColor: '#ECEFFC',
        borderColor: '#AEBDF5',
    },

    '&:active': {
        backgroundColor: '#E3E8FB',
        border: '2px solid #5072EB',
    },

    '&.Mui-selected': {
        backgroundColor: '#5072EB26',
        border: '2px solid #5072EB',
        color: '#04192B',
    },
};

interface SectionThreeProps {
    estuaryVendor: Vendor;
    vendors: Vendor[];
}

const SectionThree = ({ estuaryVendor, vendors }: SectionThreeProps) => {
    const [selectedVendorId, setSelectedVendorId] = useState(estuaryVendor.id);

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
                <h2 className={sectionTitle}>
                    Browse the Complete List of Comparisons
                </h2>
                <p>Choose a vendor and see how it compares to the rest.</p>
                <TabContext value={selectedVendorId}>
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
                                            <Checkmark
                                                width={20}
                                                color="#5072EB"
                                            />
                                        ) : null}
                                    </div>
                                }
                                value={id}
                                {...a11yProps(name)}
                                sx={tabStyling}
                            />
                        ))}
                    </Tabs>
                    {vendors.map(({ id }) => (
                        <TabPanel
                            key={id}
                            value={selectedVendorId}
                            keepMounted
                            hidden={selectedVendorId !== id}
                        >
                            <div className={gridCards}>
                                {vendors
                                    .filter(
                                        (yVendor) =>
                                            yVendor.id !== selectedVendorId
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
                </TabContext>
            </div>
        </section>
    );
};

export default SectionThree;