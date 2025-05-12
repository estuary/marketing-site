import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import { container } from './styles.module.less';
import Card from './Card';

const linkIdPrefix = 'download-estuary-logo-';
const linkIdSuffix = '-link/estuary-logo-section/brand-guidelines-page';
const imgFileFormat = '.png';

const cards = [
    {
        key: 'color-on-light',
        image: (
            <StaticImage
                src="../../../images/brand-guidelines-page/estuary-logos/estuary-logo-color-on-light.png"
                alt="Estuary full-color logo on light background"
                placeholder="blurred"
                quality={100}
            />
        ),
        title: 'Color on light',
        description: 'Use the full-color version for light backgrounds.',
    },
    {
        key: 'color-on-dark',
        image: (
            <StaticImage
                src="../../../images/brand-guidelines-page/estuary-logos/estuary-logo-color-on-dark.png"
                alt="Estuary full-color logo on dark background"
                placeholder="blurred"
                quality={100}
            />
        ),
        title: 'Color on dark',
        description: 'Use the full-color version for dark backgrounds.',
    },
    {
        key: 'mono-on-light',
        image: (
            <StaticImage
                src="../../../images/brand-guidelines-page/estuary-logos/estuary-logo-mono-on-light.png"
                alt="Estuary one-color logo on light background"
                placeholder="blurred"
                quality={100}
            />
        ),
        title: 'Mono on light',
        description: 'Use the one-color version for light backgrounds.',
    },
    {
        key: 'mono-on-dark',
        image: (
            <StaticImage
                src="../../../images/brand-guidelines-page/estuary-logos/estuary-logo-mono-on-dark.png"
                alt="Estuary one-color logo on dark background"
                placeholder="blurred"
                quality={100}
            />
        ),
        title: 'Mono on dark',
        description: 'Use the one-color version for dark backgrounds.',
    },
];

const EstuaryLogoUsage = () => (
    <section className={defaultWrapperGrey}>
        <Container isVertical className={container}>
            <h2>
                <span>Estuary</span> logo usage
            </h2>
            <ul>
                {cards.map(({ key, image, title, description }) => (
                    <Card
                        key={key}
                        image={image}
                        title={title}
                        link={{
                            id: `${linkIdPrefix}${key}${linkIdSuffix}`,
                            fileName: `${key}${imgFileFormat}`,
                            imagePath: `../../../images/brand-guidelines-page/estuary-logos/estuary-logo-${key}${imgFileFormat}`,
                        }}
                        description={description}
                    />
                ))}
            </ul>
        </Container>
    </section>
);

export default EstuaryLogoUsage;
