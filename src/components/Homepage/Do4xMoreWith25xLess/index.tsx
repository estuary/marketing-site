import * as React from 'react';
import DatabaseSavingWithLowPrice from '../../../svgs/database-saving-with-low-price.svg';
import { PricingCalculator } from '../../PricingCalculator';
import Container from '../../Container';
import { LinkFilled } from '../../../globalStyles';
import {
    iconWrapper,
    leftColumn,
    rightColumn,
    wrapper,
} from './styles.module.less';

const Do4xMoreWith25xLess = () => {
    return (
        <section className={wrapper}>
            <Container isReverseColumnOnMobile>
                <div className={leftColumn}>
                    <div className={iconWrapper}>
                        <DatabaseSavingWithLowPrice color="#5072EB" />
                    </div>
                    <h2>
                        <span>DO </span>
                        <span>4X MORE </span>
                        <span>WITH 2-5X LESS</span>
                    </h2>
                    <p>
                        Estuary customers aren&apos;t just benefitting from
                        being more real-time. They are 4x more productive. They
                        deliver new projects in days, not months. And they spend
                        2-5x less on Estuary than on batch ELT.
                    </p>
                    <LinkFilled href="/pricing/">See Pricing</LinkFilled>
                </div>
                <div className={rightColumn}>
                    <PricingCalculator />
                </div>
            </Container>
        </section>
    );
};

export default Do4xMoreWith25xLess;
