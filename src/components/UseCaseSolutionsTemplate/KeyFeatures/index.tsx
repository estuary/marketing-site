import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import { sectionText } from '../styles.module.less';
import KeyFeature1 from '../../../svgs/use-case-solutions-template/key-features/key-feature-1.svg';
import KeyFeature2 from '../../../svgs/use-case-solutions-template/key-features/key-feature-2.svg';
import KeyFeature3 from '../../../svgs/use-case-solutions-template/key-features/key-feature-3.svg';
import { KeyFeaturesSectionContent } from '../../../templates/use-case-solutions/shared';
import Card from './Card';
import { grid } from './styles.module.less';

interface KeyFeaturesProps {
    data: KeyFeaturesSectionContent;
}

const KeyFeatures = ({ data }: KeyFeaturesProps) => {
    return (
        <section className={defaultWrapperGrey}>
            <div className={grid}>
                <div className={sectionText}>
                    <h2>
                        <span>{data.title.highlightedText}</span>{' '}
                        {data.title.normalText}
                    </h2>
                    <p>{data.description}</p>
                </div>
                <Card
                    description="Real-time transformations at the source or destination."
                    svg={<KeyFeature2 />}
                    backgroundColor="#37C0C10D"
                    borderColor="#6ED5D633"
                />
                <Card
                    description="Declarative pipeline definitions for consistent results."
                    svg={<KeyFeature1 />}
                    backgroundColor="#5072EB0A"
                    borderColor="#5072EB12"
                />
                <Card
                    description="Supports business logic integration directly within the pipeline."
                    svg={<KeyFeature3 />}
                    backgroundColor="#625EFF0D"
                    borderColor="#625EFF1A"
                />
            </div>
        </section>
    );
};

export default KeyFeatures;
