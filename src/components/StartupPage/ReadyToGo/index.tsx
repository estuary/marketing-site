import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
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
        <section className={defaultWrapperGrey}>
            <Container isVertical className={container}>
                <h2>Ready to go with Estuary Flow?</h2>
                <div className={cardsWrapper}>
                    <Card
                        image={
                            <StaticImage
                                src="../../../images/startup-page/connectors.png"
                                alt="" // TODO: Ask Sourabh
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
                                alt="" // TODO: Ask Sourabh
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
                                    alt="" // TODO: Ask Sourabh
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
                                alt="" // TODO: Ask Sourabh
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
