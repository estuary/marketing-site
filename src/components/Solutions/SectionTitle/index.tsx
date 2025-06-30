import { SectionTitle as SectionTitleType } from '../../../templates/solutions/shared';

interface SectionTitleProps {
    sectionTitle?: SectionTitleType;
}

const SectionTitle = ({ sectionTitle }: SectionTitleProps) => {
    return (
        <h2>
            {sectionTitle?.normalTextComesFirst ? (
                <>
                    {sectionTitle.normalText}{' '}
                    <span>{sectionTitle.highlightedText}</span>
                </>
            ) : (
                <>
                    <span>{sectionTitle?.highlightedText}</span>{' '}
                    {sectionTitle?.normalText}
                </>
            )}
        </h2>
    );
};

export default SectionTitle;
