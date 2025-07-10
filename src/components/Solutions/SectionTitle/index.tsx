import clsx from 'clsx';
import { SectionTitle as SectionTitleType } from '../../../templates/solutions/shared';
import { title, reverseTitle } from './styles.module.less';

interface SectionTitleProps {
    sectionTitle: SectionTitleType;
}

const SectionTitle = ({
    sectionTitle: { normalTextComesFirst, normalText, highlightedText },
}: SectionTitleProps) => {
    return (
        <h2 className={clsx(title, normalTextComesFirst ? reverseTitle : null)}>
            <span>{highlightedText}</span> <span>{normalText}</span>
        </h2>
    );
};

export default SectionTitle;
