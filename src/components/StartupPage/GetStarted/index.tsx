import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import LinkFilled from '../../LinksAndButtons/LinkFilled';
import { container, cardsWrapper } from './styles.module.less';
import Card from './Card';

const GetStarted = () => {
    return (
        <section className={defaultWrapperDark}>
            <Container className={container} isVertical>
                <h2>Get started</h2>
                <div className={cardsWrapper}>
                    <Card
                        image={
                            <StaticImage
                                src="../../../images/startup-page/guides-and-resources.png"
                                alt="Guides and tutorials available in the Estuary Flow startup program."
                                placeholder="blurred"
                                quality={100}
                            />
                        }
                        title="Guides and resources"
                        description="Tap into step-by-step tutorials, live workshops, and expert tips so you can accelerate your path to success."
                    />
                    <Card
                        image={
                            <StaticImage
                                src="../../../images/startup-page/apply-in-minutes.png"
                                alt="Quick application process to join the Estuary Flow startup program."
                                placeholder="blurred"
                                quality={100}
                            />
                        }
                        title="Apply in minutes"
                        description="Complete the short application and our team will confirm your eligibility within a few business days."
                    />
                </div>
                <LinkFilled>Apply Now</LinkFilled>
            </Container>
        </section>
    );
};

export default GetStarted;
