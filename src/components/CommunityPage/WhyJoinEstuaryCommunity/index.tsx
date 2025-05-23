import Container from '../../Container';
import { CardProps } from '../shared';
import Card from './Card';
import { container, header } from './styles.module.less';

const cardsData: CardProps[] = [
    {
        title: 'Learn best practices',
        description:
            'Discover how others are building low-latency pipelines with Estuary Flow.',
    },
    {
        title: 'Share ideas',
        description: "Suggest features or improvements. We're listening.",
    },
    {
        title: 'Get support fast',
        description:
            'Ask questions and get answers from the Estuary team and other users.',
    },
    {
        title: 'Show off your work',
        description: 'Inspire others and learn from real-world examples.',
    },
    {
        title: 'Stay in the loop',
        description: 'Get early access to new features and community events.',
    },
];

const WhyJoinEstuaryCommunity = () => {
    return (
        <section>
            <Container isVertical className={container}>
                <div className={header}>
                    <h2>
                        Why join <span>the Estuary community</span>?
                    </h2>
                    <p>
                        Connect with developers, data engineers, and the Estuary
                        team building the future of real-time data integration.
                        Our Slack community for data engineers is where
                        questions get answered, features are inspired, and
                        projects come to life.
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

export default WhyJoinEstuaryCommunity;
