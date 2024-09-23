import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import { container, cardsWrapper } from './styles.module.less';
import Card from './Card';

const SectionTwo = () => {
    return (
        <section className={defaultWrapperGrey}>
            <div className={container}>
                <h2>Learn more about ETL, ELT, and CDC alternatives</h2>
                <div className={cardsWrapper}>
                    <Card
                        title="The Data Engineer's Guide to ELT Alternatives"
                        // TODO: Add the links once they exist
                        buttonHref="#"
                    />
                    <Card
                        title="The Data Engineer's Guide to ETL Alternatives"
                        // TODO: Add the links once they exist
                        buttonHref="#"
                    />
                    <Card
                        title="The Data Engineer's Guide to CDC for Analytics, Ops, and AI Pipelines"
                        // TODO: Add the links once they exist
                        buttonHref="#"
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionTwo;
