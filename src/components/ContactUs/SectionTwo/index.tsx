import React from 'react';
import BuildingIcon from '@mui/icons-material/Apartment';
import { sectionTopBottomPadding } from '../../../globalStyles/wrappers.module.less';
import { estuaryAddress } from '../../../../shared';
import {
    container,
    iconWrapper,
    title,
    card,
    city,
    address,
} from './styles.module.less';

const SectionTwo = () => {
    const {
        streetAddress,
        addressLocality,
        addressRegion,
        postalCode,
        addressCountry,
    } = estuaryAddress;

    return (
        <section className={sectionTopBottomPadding}>
            <div className={container}>
                <div className={iconWrapper}>
                    <BuildingIcon htmlColor="#5072EB" fontSize="large" />
                </div>
                <h2 className={title}>OUR OFFICE</h2>
                <div className={card}>
                    <h3 className={city}>{addressLocality}</h3>
                    <p className={address}>
                        {streetAddress}, {addressLocality}, {addressRegion},{' '}
                        {postalCode}, {addressCountry}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SectionTwo;