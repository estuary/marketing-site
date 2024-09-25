import React from 'react';
import { Tab, Tabs } from '@mui/material';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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

interface SectionThreeProps {
    vendors: Vendor[];
    xVendor: Vendor;
}

function a11yProps(index: string | number) {
    return {
        'id': `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

interface TabPanelProps {
    children: React.ReactNode;
    value: string | number;
    index: string | number;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
    return (
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
}

const SectionThree = ({ vendors, xVendor }: SectionThreeProps) => {
    const [selectedVendorId, setSelectedVendorId] = React.useState<
        string | number
    >(xVendor.id);

    const handleChangeSelectedVendor = (
        event: React.SyntheticEvent,
        newVendorId: string | number
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
                            {...a11yProps(id)}
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
                                .map((yVendor) => (
                                    <XvsYCard
                                        key={yVendor.id}
                                        xVendor={{
                                            name: selectedVendor?.name ?? '',
                                            logo: getImage(
                                                selectedVendor?.logo.localFile
                                                    .childImageSharp
                                                    .gatsbyImageData
                                            ),
                                        }}
                                        yVendor={{
                                            name: yVendor.name,
                                            logo: getImage(
                                                yVendor.logo.localFile
                                                    .childImageSharp
                                                    .gatsbyImageData
                                            ),
                                        }}
                                    />
                                ))}
                        </div>
                    </TabPanel>
                ))}
            </div>
        </section>
    );
};

export default SectionThree;
