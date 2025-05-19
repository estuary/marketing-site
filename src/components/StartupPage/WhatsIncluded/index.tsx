import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import SuccessIcon from '../../../svgs/success.svg';
import HealthWebsiteIcon from '../../../svgs/health-website.svg';
import FileIcon from '../../../svgs/file.svg';
import GiveAccessIcon from '../../../svgs/give-access.svg';
import LinkFilled from '../../LinksAndButtons/LinkFilled';
import AdvantageCard from './AdvantageCard';
import {
    advatangeCardsWrapper,
    outerContainer,
    innerContainer,
    imageWrapper,
} from './styles.module.less';

const WhatsIncluded = () => {
    return (
        <section>
            <Container isVertical className={outerContainer}>
                <h2>What&apos;s included</h2>
                <Container className={innerContainer}>
                    <div className={advatangeCardsWrapper}>
                        <AdvantageCard
                            icon={<SuccessIcon />}
                            title="$2K in free usage"
                            description={
                                <>
                                    Access our Cloud plan with{' '}
                                    <strong>$2,000</strong> in usage credits,
                                    valid for 12 months.
                                </>
                            }
                        />
                        <AdvantageCard
                            icon={<HealthWebsiteIcon />}
                            title="Complimentary tech support"
                            description="Receive complimentary email and Slack support from our technical team to guide you through setup and best practices."
                        />
                        <AdvantageCard
                            icon={<FileIcon color="var(--blue)" />}
                            title="Guides and resources"
                            description="Tap into step-by-step tutorials, live workshops, and expert tips so you can accelerate your path to success."
                        />
                        <AdvantageCard
                            icon={<GiveAccessIcon color="var(--blue)" />}
                            title="Eligibility requirements"
                            items={[
                                'Raised less than $5 million in total funding.',
                                'Not a current or former Estuary Flow customer.',
                            ]}
                        />
                    </div>
                    <div className={imageWrapper}>
                        <StaticImage
                            src="../../../images/startup-page/whats-included-image.png"
                            alt=" Overview of Estuary Flow startup benefits: $2K credits, tech support, guides, and eligibility requirements."
                            quality={100}
                            placeholder="blurred"
                            loading="eager"
                            layout="constrained"
                        />
                        <span>Guide</span>
                        <span>Tutorial</span>
                        <span>Credits</span>
                        <span>12 months</span>
                        <span>$2000</span>
                        <span>Eligibility</span>
                    </div>
                </Container>
                <LinkFilled
                    id="apply-now-button/whats-included-section/startup-page"
                    href="/contact-us/"
                    target="_blank"
                >
                    Apply Now
                </LinkFilled>
            </Container>
        </section>
    );
};

export default WhatsIncluded;
