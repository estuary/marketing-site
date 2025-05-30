import Container from '../../Container';
import { CardProps } from '../shared';
import Card from './Card';
import { container, header } from './styles.module.less';

const cardsData: CardProps[] = [
    {
        title: '#support',
        description: "Troubleshooting? We've got you covered.",
    },
    {
        title: '#ask-estuary',
        description:
            'Chat data, integration patterns, and ask general questions.',
    },
    {
        title: '#ask-ai',
        description: 'Ask our AI assistant for immediate answers.',
    },
    {
        title: '#general',
        description: 'Join the conversation and stay up to date.',
    },
];

const SlackChannelsYouWillLove = () => {
    return (
        <section>
            <Container
                isDarkTheme
                isReverseColumnOnMobile
                className={container}
            >
                <div className={header}>
                    <h2>
                        <span>Slack channels</span> you&apos;ll love
                    </h2>
                    <p>
                        Join thousands of data engineers, architects, and
                        builders using Estuary to move data in real time. Ask
                        questions, share wins, or just hang out — there&apos;s a
                        channel for everything.
                    </p>
                </div>
                <ul>
                    {cardsData.map((card, index) => (
                        <Card key={`why-join-card-${index + 1}`} {...card} />
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default SlackChannelsYouWillLove;
