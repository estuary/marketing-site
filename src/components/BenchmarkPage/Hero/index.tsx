import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import HubSpotFormWrapper from '../../HubSpot/FormWrapper';
import { wrapper, container, formWrapper } from './styles.module.less';

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
                <div className={formWrapper}>
                    <HubSpotFormWrapper formId="6c9314d9-906f-4942-8924-28ac899e972c" />
                </div>
            </Container>
        </section>
    );
};

export default Hero;
