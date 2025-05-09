import Container from '../../Container';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import OutboundLinkFilled from '../../LinksAndButtons/OutboundLinkFilled';
import LinkOutlined from '../../LinksAndButtons/LinkOutlined';
import SlackIcon from '../../../svgs/slack-outline.svg';
import ArrowRightIcon from '../../../svgs/arrow-right-2.svg';
import { slackUrl } from '../../../../shared';
import { container, buttonsWrapper } from './styles.module.less';

const iconSize = 18;

const linkIdSuffix = '-button/have-questions-section/startup-page';

const HaveQuestions = () => {
    return (
        <section className={defaultWrapperGrey}>
            <Container className={container} isVertical>
                <h2>Have questions?</h2>
                <div className={buttonsWrapper}>
                    <OutboundLinkFilled
                        id={`join-our-community${linkIdSuffix}`}
                        href={slackUrl}
                        target="_blank"
                    >
                        Join our community Slack{' '}
                        <SlackIcon width={iconSize} height={iconSize} />
                    </OutboundLinkFilled>
                    <LinkOutlined
                        id={`reach-out${linkIdSuffix}`}
                        href="/contact-us/"
                        target="_blank"
                    >
                        Reach out{' '}
                        <ArrowRightIcon
                            width={iconSize}
                            height={iconSize}
                            color="var(--blue)"
                        />
                    </LinkOutlined>
                </div>
            </Container>
        </section>
    );
};

export default HaveQuestions;
