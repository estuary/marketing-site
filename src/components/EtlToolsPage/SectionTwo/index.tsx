import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import { sectionTitle } from '../styles.module.less';
import { container, cardsWrapper } from './styles.module.less';
import Card from './Card';

const SectionTwo = () => {
    return (
        <section className={defaultWrapperGrey}>
            <div className={container}>
                <h2 className={sectionTitle}>
                    Learn more about ETL, ELT, and CDC alternatives
                </h2>
                <div className={cardsWrapper}>
                    <Card
                        title="The Data Engineer's Guide to ELT Alternatives"
                        buttonHref="/ELT-comparison-guide"
                    />
                    <Card
                        title="The Data Engineer's Guide to ETL Alternatives"
                        buttonHref="/ETL-alternatives-guide"
                    />
                    <Card
                        title="The Data Engineer's Guide to CDC for Analytics, Ops, and AI Pipelines"
                        buttonHref="/CDC-comparison-guide"
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionTwo;
