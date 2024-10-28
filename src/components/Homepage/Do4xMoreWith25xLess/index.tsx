import * as React from 'react';
import DatabaseSavingWithLowPrice from '../../../svgs/database-saving-with-low-price.svg';
import { PricingCalculator } from '../../PricingCalculator';
import Container from '../../Container';
import {
    Button,
    IconWrapper,
    LeftColumn,
    RightColumn,
    Wrapper,
} from './styles';

const Do4xMoreWith25xLess = () => {
    return (
        <Wrapper>
            <Container isReverseColumnOnMobile>
                <LeftColumn>
                    <IconWrapper>
                        <DatabaseSavingWithLowPrice color="#5072EB" />
                    </IconWrapper>
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
                    <Button href="/pricing" target="_blank">
                        See Pricing
                    </Button>
                </LeftColumn>
                <RightColumn>
                    <PricingCalculator />
                </RightColumn>
            </Container>
        </Wrapper>
    );
};

export default Do4xMoreWith25xLess;
