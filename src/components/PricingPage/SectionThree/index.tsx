import React from 'react';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import { PricingCalculator } from '../../PricingCalculator';
import {
    container,
    title,
    description,
    textWrapper,
    pricingCalculatorWrapper,
} from './styles.module.less';

const SectionThree = () => {
    return (
        <section className={defaultWrapperDark}>
            <div className={container}>
                <div className={textWrapper}>
                    <h2 className={title}>PRICING CALCULATOR</h2>
                    <p className={description}>
                        Use our intuitive pricing calculator to easily estimate
                        your monthly costs. Simply input your requirements, and
                        we'll provide a clear breakdown of your expenses,
                        helping you choose the best plan to fit your budget and
                        needs.
                    </p>
                </div>
                <div className={pricingCalculatorWrapper}>
                    <PricingCalculator />
                </div>
            </div>
        </section>
    );
};

export default SectionThree;
