import { slackUrl } from '../../../../shared';
import ColoredSlackLogoIcon from '../../../svgs/colored-slack-logo.svg';
import OutboundLinkFilled from '../../LinksAndButtons/OutboundLinkFilled';
import SlackIcon from '../../../svgs/slack-outline.svg';
import { container, iconWrapper, footerText } from './styles.module.less';

const Hero = () => {
    return (
        <section>
            <div className={container}>
                <div className={iconWrapper}>
                    <ColoredSlackLogoIcon />
                </div>
                <h1>
                    <span>Join the</span> <span>Estuary</span>{' '}
                    <span>community</span>
                </h1>
                <p>Get support, share wins, and move fast — together.</p>
                <OutboundLinkFilled
                    id="join-our-slack-button/hero-section/community-page"
                    href={slackUrl}
                    target="_blank"
                >
                    <SlackIcon /> Join Our Slack
                </OutboundLinkFilled>
                <span className={footerText}>
                    Supportive conversations. Zero spam.
                </span>
            </div>
        </section>
    );
};

export default Hero;
