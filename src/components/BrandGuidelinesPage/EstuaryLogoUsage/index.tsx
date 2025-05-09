import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import { container, cardsWrapper } from './styles.module.less';
import Card from './Card';

const linkIdSuffix = '-link/estuary-logo-section/brand-guidelines-page';

const imagePathPrefix =
    '../../../images/brand-guidelines-page/estuary-logos/estuary-logo-';
const colorOnLightImagePath = `${imagePathPrefix}color-on-light.png`;
const colorOnDarkImagePath = `${imagePathPrefix}color-on-dark.png`;
const monoOnLightImagePath = `${imagePathPrefix}mono-on-light.png`;
const monoOnDarkImagePath = `${imagePathPrefix}mono-on-dark.png`;

const EstuaryLogoUsage = () => {
    return (
        <section className={defaultWrapperGrey}>
            <Container isVertical className={container}>
                <h2>
                    <span>Estuary</span> logo usage
                </h2>
                <div className={cardsWrapper}>
                    <Card
                        image={
                            <StaticImage
                                src={colorOnLightImagePath}
                                alt="Estuary full-color logo on light background"
                                placeholder="blurred"
                                quality={100}
                            />
                        }
                        title="Color on light"
                        link={{
                            id: `download-estuary-logo${linkIdSuffix}`,
                            title: 'Download Estuary Logo',
                            fileName: 'color-on-light.png',
                            imagePath: colorOnLightImagePath,
                        }}
                        description="Use the full-color version for light backgrounds."
                    />
                    <Card
                        image={
                            <StaticImage
                                src={colorOnDarkImagePath}
                                alt="Estuary full-color logo on dark background"
                                placeholder="blurred"
                                quality={100}
                            />
                        }
                        title="Color on dark"
                        link={{
                            id: `download-estuary-logo${linkIdSuffix}`,
                            title: 'Download Estuary Logo',
                            fileName: 'color-on-light.png',
                            imagePath: colorOnDarkImagePath,
                        }}
                        description="Use the full-color version for light backgrounds."
                    />
                    <Card
                        image={
                            <StaticImage
                                src={monoOnLightImagePath}
                                alt="Estuary one-color logo on light background"
                                placeholder="blurred"
                                quality={100}
                            />
                        }
                        title="Mono on light"
                        link={{
                            id: `download-estuary-logo${linkIdSuffix}`,
                            title: 'Download Estuary Logo',
                            fileName: 'color-on-light.png',
                            imagePath: monoOnLightImagePath,
                        }}
                        description="Use the full-color version for light backgrounds."
                    />
                    <Card
                        image={
                            <StaticImage
                                src={monoOnDarkImagePath}
                                alt="Estuary one-color logo on dark background"
                                placeholder="blurred"
                                quality={100}
                            />
                        }
                        title="Mono on dark"
                        link={{
                            id: `download-estuary-logo${linkIdSuffix}`,
                            title: 'Download Estuary Logo',
                            fileName: 'color-on-light.png',
                            imagePath: monoOnDarkImagePath,
                        }}
                        description="Use the full-color version for light backgrounds."
                    />
                </div>
            </Container>
        </section>
    );
};

export default EstuaryLogoUsage;
