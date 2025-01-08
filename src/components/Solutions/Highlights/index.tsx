import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import { sectionText, noPadding } from '../styles.module.less';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Card from '../Card';
import { HighlightsSectionContent } from '../../../templates/solutions/shared';
import { wrapper } from './styles.module.less';

interface HighlightsProps {
    data: HighlightsSectionContent;
}

const Highlights = ({ data }: HighlightsProps) => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container className={wrapper} isDarkTheme isVertical>
                <Container className={noPadding}>
                    <div className={sectionText}>
                        <h2>
                            <span>{data.title.highlightedText}</span>{' '}
                            {data.title.normalText}
                        </h2>
                        <p>{data.description}</p>
                    </div>
                    <StaticImage
                        src="../../../images/use-case-solutions-template/estuary-solutions-highlights.png"
                        alt="Estuary solutions highlights" // TODO: Ask alt text to Sourabh.
                        quality={100}
                        placeholder="blurred"
                    />
                </Container>
                <ul>
                    {data.highlightItems.map((highlight, index) => (
                        <li key={index}>
                            <Card
                                text={highlight}
                                tag="Highlights"
                                isDarkTheme
                            />
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default Highlights;
