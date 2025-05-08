import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import { dashboardRegisterUrl } from '../../../../shared';
import {
    container,
    cardsWrapper,
    signInImageWrapper,
} from './styles.module.less';
import Card from './Card';

const signInPrefix = 'Sign in with ';

const ReadyToGo = () => {
    return (
        <section className={defaultWrapperDark}>
            <Container isVertical className={container}>
                <h2>Ready to go with Estuary Flow?</h2>
                <div className={cardsWrapper}>
                    <Card
                        image={
                            <StaticImage
                                src="../../../images/startup-page/connectors.png"
                                alt="Estuary Flow's supported data connectors for real-time sync"
                                placeholder="blurred"
                                quality={100}
                            />
                        }
                        title="Connectors"
                        href="/integrations/"
                    />
                    <Card
                        image={
                            <StaticImage
                                src="../../../images/startup-page/demo.png"
                                alt="Schedule a live demo to see how Estuary Flow works for startups"
                                placeholder="blurred"
                                quality={100}
                            />
                        }
                        title="Book a Demo"
                        href="/contact-us/"
                    />
                    <Card
                        image={
                            <div className={signInImageWrapper}>
                                <StaticImage
                                    src="../../../images/startup-page/sign-in.png"
                                    alt="Login to Estuary Flow"
                                    placeholder="blurred"
                                    quality={100}
                                />
                                <span>{signInPrefix}Azure</span>
                                <span>{signInPrefix}Google</span>
                                <span>{signInPrefix}Github</span>
                            </div>
                        }
                        title="Login"
                        href={dashboardRegisterUrl}
                    />
                    <Card
                        image={
                            <StaticImage
                                src="../../../images/startup-page/free.png"
                                alt="Start using Estuary Flow for free with $2,000 in startup credits"
                                placeholder="blurred"
                                quality={100}
                            />
                        }
                        title="Start Free"
                        href={dashboardRegisterUrl}
                    />
                </div>
            </Container>
        </section>
    );
};

export default ReadyToGo;
