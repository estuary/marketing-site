import { SyntheticEvent, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { GatsbyImage } from 'gatsby-plugin-image';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { Vendor } from '../../../../shared';
import Checkmark from '../../../svgs/checkmark.svg';
import { container } from '../styles.module.less';
import Container from '../../Container';
import {
    tabs,
    itemImage,
    gridCards,
    tabLabel,
    textWrapper,
} from './styles.module.less';
import XvsYCard from './XvsYCard';

const a11yProps = (vendorId: string) => ({
    'id': `vendor-tab-${vendorId}`,
    'aria-controls': `vendor-tabpanel-${vendorId}`,
});

const tabStyling = {
    'border': '1px solid var(--blue-30-opacity)',
    'borderRadius': '100px',
    'textTransform': 'none',
    'color': 'var(--dark-blue)',
    'transition': 'var(--default-transition)',

    '&:hover': {
        backgroundColor: '#ECEFFC',
        borderColor: '#AEBDF5',
    },

    '&:active': {
        backgroundColor: '#E3E8FB',
        border: '2px solid var(--blue);',
    },

    '&.Mui-selected': {
        backgroundColor: 'var(--blue-15-opacity)',
        border: '2px solid var(--blue);',
        color: 'var(--dark-blue)',
    },
};

interface SectionThreeProps {
    estuaryVendor: Vendor;
    vendors: Vendor[];
}

const ListOfComparisons = ({ estuaryVendor, vendors }: SectionThreeProps) => {
    const [selectedVendorId, setSelectedVendorId] = useState(estuaryVendor.id);

    const handleChangeSelectedVendor = (
        event: SyntheticEvent,
        newVendorId: string
    ) => {
        setSelectedVendorId(newVendorId);
    };

    const selectedVendor = vendors.find(
        (vendor) => vendor.id === selectedVendorId
    );

    return (
        <section>
            <Container isVertical className={container}>
                <div className={textWrapper}>
                    <h2>Browse the Complete List of Comparisons</h2>
                    <p>Choose a vendor and see how it compares to the rest.</p>
                </div>
                <TabContext value={selectedVendorId}>
                    <Tabs
                        value={selectedVendorId}
                        onChange={handleChangeSelectedVendor}
                        aria-label="Vendor comparison tabs"
                        aria-controls=""
                        TabIndicatorProps={{
                            style: { display: 'none' },
                        }}
                        className={tabs}
                    >
                        {vendors.map(({ id, name, logo }) => (
                            <Tab
                                key={id}
                                disableRipple
                                label={
                                    <div className={tabLabel}>
                                        <GatsbyImage
                                            image={
                                                logo.localFile.childImageSharp
                                                    .gatsbyImageData
                                            }
                                            alt={`${name} Logo`}
                                            className={itemImage}
                                        />
                                        <span>{name}</span>
                                        {selectedVendorId === id ? (
                                            <Checkmark
                                                width={20}
                                                color="var(--blue)"
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
                            sx={{ width: '100%' }}
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
            </Container>
        </section>
    );
};

export default ListOfComparisons;
