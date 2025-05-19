import Container from '../../../Container';
import { sectionText, noPadding } from '../../styles.module.less';

import Card from '../../Card';
import { HighlightsSectionContent } from '../../../../templates/solutions/shared';
import ImageDark from '../../../../svgs/use-case-solutions-template/estuary-solutions-highlights-dark.svg';
import ImageLight from '../../../../svgs/use-case-solutions-template/estuary-solutions-highlights-light.svg';
import { SectionTheme } from '../shared';
import { wrapper } from './styles.module.less';

interface HighlightsProps extends SectionTheme {
    data: HighlightsSectionContent;
}

const Highlights = ({ data, isDarkTheme = false }: HighlightsProps) => {
    return (
        <section>
            <Container className={wrapper} isDarkTheme={isDarkTheme} isVertical>
                <Container className={noPadding}>
                    <div className={sectionText}>
                        <h2>
                            <span>{data.sectionTitle.highlightedText}</span>{' '}
                            {data.sectionTitle.normalText}
                        </h2>
                        <p>{data.description}</p>
                    </div>
                    {isDarkTheme ? <ImageDark /> : <ImageLight />}
                </Container>
                <ul>
                    {data.highlightItems.strapi_json_value.map(
                        (highlight, index) => (
                            <li key={index}>
                                <Card
                                    text={highlight}
                                    isDarkTheme={isDarkTheme}
                                />
                            </li>
                        )
                    )}
                </ul>
            </Container>
        </section>
    );
};

export default Highlights;
