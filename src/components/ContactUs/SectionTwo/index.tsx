import React from 'react';
import BuildingIcon from '@mui/icons-material/Apartment';
import { sectionTopBottomPadding } from '../../../globalStyles/wrappers.module.less';
import {
    container,
    iconWrapper,
    title,
    card,
    city,
    address,
} from './styles.module.less';

const SectionTwo = () => {
    return (
        <section className={sectionTopBottomPadding}>
            <div className={container}>
                <div className={iconWrapper}>
                    <BuildingIcon htmlColor="#5072EB" fontSize="large" />
                </div>
                <h2 className={title}>OUR OFFICE</h2>
                <div className={card}>
                    <h3 className={city}>NEW YORK</h3>
                    <p className={address}>
                        244 5th Ave, Suite 1277, New York, NY 10001
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SectionTwo;
