import Container from '../../../Container';
import { sectionText, noPadding } from '../../styles.module.less';
import { HighlightsSectionContent } from '../../../../templates/solutions/shared';
import ImageDark from '../../../../svgs/use-case-solutions-template/estuary-solutions-highlights-dark.svg';
import ImageLight from '../../../../svgs/use-case-solutions-template/estuary-solutions-highlights-light.svg';
import { SectionTheme } from '../shared';
import SectionTitle from '../../SectionTitle';
import TextCardsList from '../../TextCardsList';

interface HighlightsProps extends SectionTheme {
    data: HighlightsSectionContent;
}

const Highlights = ({ data, isDarkTheme = false }: HighlightsProps) => {
    return (
        <section>
            <Container isDarkTheme={isDarkTheme} isVertical>
                <Container className={noPadding}>
                    <div className={sectionText}>
                        <SectionTitle sectionTitle={data.sectionTitle} />
                        <p>{data.description}</p>
                    </div>
                    {isDarkTheme ? <ImageDark /> : <ImageLight />}
                </Container>
                <TextCardsList
                    items={data.highlightItems.strapi_json_value}
                    isDarkTheme={isDarkTheme}
                />
            </Container>
        </section>
    );
};

export default Highlights;
