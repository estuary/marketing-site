import React from 'react';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import DatabaseSavingWithLowPrice from '../../../svgs/database-saving-with-low-price.svg';
import Advantages from '../../Advantages';
import { PricingCalculator } from '../../PricingCalculator';

const SectionNine = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Advantages // TODO: Move the Advantages component's styles from styled-components to LESS
                icon={<DatabaseSavingWithLowPrice color="#5072EB" />}
                title={
                    <>
                        SPEND <span>2-5X</span> LESS
                    </>
                }
                subtitle="Estuary customers not only do 4x more. They also spend 2-5x less on ETL and ELT. Flow’s unique ability to mix and match streaming and batch loading has also helped customers save as much as 40% on data warehouse compute costs."
                image={
                    // TODO: Move the pricing calculator's styles from styled-components to LESS
                    <PricingCalculator />
                }
                isDarkTheme
                link={{
                    title: 'See Pricing',
                    href: '/pricing',
                }}
            />
        </section>
    );
};

export default SectionNine;
