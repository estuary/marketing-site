import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import HubSpotFormWrapper from '../../HubSpot/FormWrapper';
import { formWrapper } from './styles.module.less';

const GetTheReport = () => {
    return (
        <section>
            <Container isReverseColumnOnMobile>
                <StaticImage
                    src="../../../images/benchmark-page/pdf.png"
                    alt="" // TODO: Asked to Sourabh
                    quality={100}
                    placeholder="blurred"
                    loading="eager"
                    layout="constrained"
                />
                <div className={formWrapper}>
                    <h2>Get the report</h2>
                    <HubSpotFormWrapper formId="6c9314d9-906f-4942-8924-28ac899e972c" />
                </div>
            </Container>
        </section>
    );
};

export default GetTheReport;
