import React from 'react';
import { useMediaQuery } from '@mui/material';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import Carousel from '../../Carousel';
import { container, title, planCardsWrapper } from './styles.module.less';
import PlanCard from './PlanCard';
import { plans } from './utils';

const planCards = plans.map((plan, index) => (
    <PlanCard key={index} {...plan} />
));

const SectionTwo = () => {
    const isMobile = useMediaQuery('(max-width:1024px)');

    return (
        <section className={defaultWrapperGrey}>
            <div className={container}>
                <h2 className={title}>CHOOSE YOUR PLAN</h2>
                {isMobile ? (
                    <Carousel
                        aria-label="Pricing plan carousel"
                        hasArrow
                        arrowColor="#47506D"
                        options={{
                            startIndex: Math.floor((planCards.length - 1) / 2),
                        }}
                    >
                        {planCards}
                    </Carousel>
                ) : (
                    <div className={planCardsWrapper}>{planCards}</div>
                )}
            </div>
        </section>
    );
};

export default SectionTwo;
