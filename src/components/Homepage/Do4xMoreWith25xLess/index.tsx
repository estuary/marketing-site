import * as React from 'react';
import DatabaseSavingWithLowPrice from '../../../svgs/database-saving-with-low-price.svg';
import { PricingCalculator } from '../../PricingCalculator';
import Advantages from '../../Advantages';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import LinkFilled from '../../LinksAndButtons/LinkFilled';

const Do4xMoreWith25xLess = () => {
    return (
        <section className={defaultWrapperGrey}>
            <Advantages
                icon={<DatabaseSavingWithLowPrice color="var(--blue)" />}
                title={
                    <>
                        DO <span>4X MORE </span> WITH 2-5X LESS
                    </>
                }
                subtitle="Estuary customers aren't just benefitting from
                        being more real-time. They are 4x more productive. They
                        deliver new projects in days, not months. And they spend
                        2-5x less on Estuary than on batch ELT."
                image={<PricingCalculator />}
                ctaButtons={
                    <LinkFilled href="/pricing/">See Pricing</LinkFilled>
                }
                isReverseColumnOnMobile
            />
        </section>
    );
};

export default Do4xMoreWith25xLess;
