import clsx from 'clsx';
import {
    defaultWrapperGrey,
    defaultWrapperDarkBlue,
} from '../../../../globalStyles/wrappers.module.less';
import { sectionText } from '../../styles.module.less';
import KeyFeature1 from '../../../../svgs/use-case-solutions-template/key-features/key-feature-1.svg';
import KeyFeature2 from '../../../../svgs/use-case-solutions-template/key-features/key-feature-2.svg';
import KeyFeature3 from '../../../../svgs/use-case-solutions-template/key-features/key-feature-3.svg';
import { KeyFeaturesSectionContent } from '../../../../templates/solutions/shared';
import { SectionTheme } from '../shared';
import Card from './Card';
import { grid, darkGrid } from './styles.module.less';

interface KeyFeaturesProps extends SectionTheme {
    data: KeyFeaturesSectionContent;
}

const KeyFeatures = ({ data, isDarkTheme = false }: KeyFeaturesProps) => {
    const iconColor = isDarkTheme ? 'var(--white)' : 'var(--blue)';

    return (
        <section
            className={
                isDarkTheme ? defaultWrapperDarkBlue : defaultWrapperGrey
            }
        >
            <div className={clsx(grid, isDarkTheme ? darkGrid : null)}>
                <div className={sectionText}>
                    <h2>
                        <span>{data.sectionTitle.highlightedText}</span>{' '}
                        {data.sectionTitle.normalText}
                    </h2>
                    <p>{data.description}</p>
                </div>
                <Card
                    description="Real-time transformations at the source or destination."
                    svg={<KeyFeature2 color={iconColor} />}
                    backgroundColor="#37C0C10D"
                    borderColor="#6ED5D633"
                />
                <Card
                    description="Declarative pipeline definitions for consistent results."
                    svg={<KeyFeature1 color={iconColor} />}
                    backgroundColor="#5072EB0A"
                    borderColor="#5072EB12"
                />
                <Card
                    description="Supports business logic integration directly within the pipeline."
                    svg={<KeyFeature3 color={iconColor} />}
                    backgroundColor="#625EFF0D"
                    borderColor="#625EFF1A"
                />
            </div>
        </section>
    );
};

export default KeyFeatures;
