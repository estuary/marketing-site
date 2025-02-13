import { StaticImage } from 'gatsby-plugin-image';
import { docsPageUrl, slackUrl, webinarsUrl } from '../../../../shared';
import RecordIcon from '../../../svgs/record-outlined.svg';
import HeroSectionDetails from '../../HeroSectionDetails';
import Container from '../../Container';
import HeroSectionActions from '../../HeroSectionActions';
import Card from './Card';
import { wrapper, cardsList } from './styles.module.less';

const Hero = () => {
    return (
        <section className={wrapper}>
            <Container>
                <HeroSectionDetails
                    title={<span>ESTUARY FLOW</span>}
                    description="Estuary Flow is the only platform purpose-built for
                            real-time ETL and ELT data pipelines. Batch-load for
                            analytics, and stream for ops and AI - all set up in
                            minutes, with millisecond latency."
                    ctaButtons={<HeroSectionActions pageId="product-page" />}
                    hasSubscriptionBenefits
                />
                <StaticImage
                    src="../../../images/real-time-graphic.png"
                    alt="Real-time ETL with Estuary Flow: Seamlessly move data from source to destination for immediate analysis and actionable insights."
                    placeholder="none"
                    loading="eager"
                />
            </Container>
            <div className={cardsList}>
                <Card
                    title="SEE OVERVIEW"
                    description="Learn how to build a pipeline in minutes."
                    isActive
                    href={webinarsUrl}
                    icon={<RecordIcon color="var(--white)" />}
                    buttonId="see-overview-button-product-page"
                />
                <Card
                    title="QUICKSTART"
                    description="Create a free account and use a tutorial for a pipeline."
                    href={`${docsPageUrl}/getting-started/quickstart/`}
                    icon={
                        <StaticImage
                            src="../../../svgs/product-page/section-one/sign-up-outlined.svg"
                            alt="Register now and learn how to create a pipeline with our tutorial"
                            loading="eager"
                        />
                    }
                    buttonId="quickstart-button-product-page"
                />
                <Card
                    title="JOIN COMMUNITY"
                    description="Connect with others, and ask the experts."
                    href={slackUrl}
                    icon={
                        <StaticImage
                            src="../../../svgs/product-page/section-one/slack-outlined.svg"
                            alt="Join the Estuary community and receive support from experts"
                            style={{ color: 'var(--blue)' }}
                            loading="eager"
                        />
                    }
                    buttonId="join-community-button-product-page"
                />
            </div>
        </section>
    );
};

export default Hero;
