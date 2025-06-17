import { StaticImage } from 'gatsby-plugin-image';
import {
    dashboardRegisterUrl,
    docsPageUrl,
    slackUrl,
} from '../../../../shared';
import CtaCards from '../../CtaCards';
import Container from '../../Container';
import { container } from './styles.module.less';

const linkIdSuffix = `-card-button/whats-next-section/demo-page`;

const WhatsNext = () => {
    return (
        <section>
            <Container isVertical className={container}>
                <h2>
                    What&apos;s <span>Next</span>?
                </h2>
                <CtaCards
                    cards={[
                        {
                            image: (
                                <StaticImage
                                    src="../../../images/demo-page/docs.png"
                                    alt="Explore Estuary Flow documentation"
                                    placeholder="blurred"
                                    quality={100}
                                />
                            ),
                            title: 'Explore the docs',
                            href: docsPageUrl,
                            linkId: `explore-the-docs${linkIdSuffix}`,
                        },
                        {
                            image: (
                                <StaticImage
                                    src="../../../images/demo-page/slack.png"
                                    alt="Join the Estuary Slack community for support and updates"
                                    placeholder="blurred"
                                    quality={100}
                                />
                            ),
                            title: 'Join our Slack community',
                            href: slackUrl,
                            linkId: `join-our-slack-community${linkIdSuffix}`,
                        },
                        {
                            image: (
                                <StaticImage
                                    src="../../../images/demo-page/contact.png"
                                    alt="Contact Estuary team for help or inquiries"
                                    placeholder="blurred"
                                    quality={100}
                                />
                            ),
                            title: 'Contact us',
                            href: '/contact-us/',
                            linkId: `contact-us${linkIdSuffix}`,
                        },
                        {
                            image: (
                                <StaticImage
                                    src="../../../images/free.png"
                                    alt="Start using Estuary Flow for free"
                                    placeholder="blurred"
                                    quality={100}
                                />
                            ),
                            title: 'Start for free',
                            href: dashboardRegisterUrl,
                            linkId: `start-for-free${linkIdSuffix}`,
                        },
                    ]}
                />
            </Container>
        </section>
    );
};

export default WhatsNext;
