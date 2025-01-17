import { ReactNode } from 'react';
import Container from '../../../Container';
import { sectionText, noPadding } from '../../styles.module.less';
import { defaultWrapperDarkBlue } from '../../../../globalStyles/wrappers.module.less';
import Card from '../../Card';
import { HighlightsSectionContent } from '../../../../templates/solutions/shared';
import { wrapper } from './styles.module.less';

interface HighlightsProps {
    data: HighlightsSectionContent;
    image: ReactNode;
}

const Highlights = ({ data, image }: HighlightsProps) => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container className={wrapper} isDarkTheme isVertical>
                <Container className={noPadding}>
                    <div className={sectionText}>
                        <h2>
                            <span>{data.sectionTitle.highlightedText}</span>{' '}
                            {data.sectionTitle.normalText}
                        </h2>
                        <p>{data.description}</p>
                    </div>
                    {image}
                </Container>
                <ul>
                    {data.highlightItems.strapi_json_value.map(
                        (highlight, index) => (
                            <li key={index}>
                                <Card text={highlight} isDarkTheme />
                            </li>
                        )
                    )}
                </ul>
            </Container>
        </section>
    );
};

export default Highlights;
