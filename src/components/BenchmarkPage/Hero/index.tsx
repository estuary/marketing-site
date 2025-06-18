import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import { wrapper, container, imageWrapperOne } from './styles.module.less';

const Hero = () => {
    return (
        <section className={wrapper}>
            <Container
                isDarkTheme
                className={container}
                isReverseColumnOnMobile
            >
                <HeroSectionDetails
                    title={
                        <>
                            2025 Data Warehouse Benchmark Report -{' '}
                            <span>Big 5</span>
                        </>
                    }
                    description="An in-depth performance comparison of major data warehouses under realistic workloads."
                />
                <div className={imageWrapperOne}>
                    <StaticImage
                        src="../../../images/benchmark-page/hero-image.png"
                        alt="" // TODO: Asked to Sourabh
                        quality={100}
                        placeholder="blurred"
                        loading="eager"
                        layout="constrained"
                    />
                </div>
            </Container>
        </section>
    );
};

export default Hero;
