import React from 'react';
import { useMediaQuery } from '@mui/material';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import Carousel from '../../Carousel';
import Container from '../../Container';
import { container, planCardsWrapper } from './styles.module.less';
import PlanCard from './PlanCard';
import { plans } from './utils';

const planCards = plans.map((plan, index) => (
    <PlanCard key={index} {...plan} />
));

const ChooseYourPlan = () => {
    const isMobile = useMediaQuery('(max-width:1024px)');

    return (
        <section className={defaultWrapperGrey}>
            <Container isVertical className={container}>
                <h2>CHOOSE YOUR PLAN</h2>
                {isMobile ? (
                    <Carousel
                        aria-label="Pricing plan carousel"
                        hasArrow
                        arrowColor="var(--grey)"
                        options={{
                            startIndex: 1,
                        }}
                    >
                        {planCards}
                    </Carousel>
                ) : (
                    <div className={planCardsWrapper}>{planCards}</div>
                )}
            </Container>
        </section>
    );
};

export default ChooseYourPlan;
