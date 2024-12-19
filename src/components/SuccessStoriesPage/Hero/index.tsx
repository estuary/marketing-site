import { StaticImage } from 'gatsby-plugin-image';
import { IStaticImageProps } from 'gatsby-plugin-image/dist/src/components/static-image.server';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import ContactUsCta from '../../HeroSectionActions/ContactUsCta';
import { wrapper } from './styles.module.less';

const commonProps: Partial<IStaticImageProps> = {
    placeholder: 'blurred',
    loading: 'eager',
};

const Hero = () => (
    <section className={wrapper}>
        <Container>
            <HeroSectionDetails
                title={
                    <>
                        ESTUARY FLOW <span>POWERS ORGANIZATIONS WORLDWIDE</span>
                    </>
                }
                description="See how our customers build with Estuary Flow to solve their challanges."
                ctaButtons={<ContactUsCta linkVariant="filled" />}
            />
            <StaticImage
                src="../../../images/customers-page/hero-image.png"
                alt="Estuary - ETL tool"
                quality={100}
                placeholder="blurred"
                loading="eager"
            />
        </Container>
        <h2>FEATURED CUSTOMERS</h2>
        <ul>
            <li key="coalesce">
                <StaticImage
                    src="../../../images/customer-logos/coalesce.png"
                    alt="Coalesce logo"
                    {...commonProps}
                />
            </li>
            <li key="flashpack">
                <StaticImage
                    src="../../../images/customer-logos/flashpack.svg"
                    alt="Flash Pack logo"
                    {...commonProps}
                />
            </li>
            <li key="shp">
                <StaticImage
                    src="../../../images/customer-logos/shp.svg"
                    alt="SHP logo"
                    {...commonProps}
                />
            </li>
            <li key="fenestra">
                <StaticImage
                    src="../../../images/customer-logos/fenestra.png"
                    alt="Fenestra logo"
                    {...commonProps}
                />
            </li>
            <li key="deep-sync">
                <StaticImage
                    src="../../../images/customer-logos/deep-sync.png"
                    alt="Deep Sync logo"
                    {...commonProps}
                />
            </li>
            <li key="excess-telecom">
                <StaticImage
                    src="../../../images/customer-logos/excess-telecom.png"
                    alt="Excess Telecom logo"
                    {...commonProps}
                />
            </li>
            <li key="flock-freight">
                <StaticImage
                    src="../../../images/customer-logos/flock-freight.png"
                    alt="Flock Freight logo"
                    {...commonProps}
                />
            </li>
            <li key="launch-metrics">
                <StaticImage
                    src="../../../images/customer-logos/launch-metrics.png"
                    alt="Launch Metrics logo"
                    {...commonProps}
                />
            </li>
            <li key="chili-piper">
                <StaticImage
                    src="../../../images/customer-logos/chili-piper.png"
                    alt="Chili Piper logo"
                    {...commonProps}
                />
            </li>
            <li key="revunit">
                <StaticImage
                    src="../../../images/customer-logos/revunit.png"
                    alt="Revunit logo"
                    {...commonProps}
                />
            </li>
        </ul>
    </section>
);

export default Hero;
