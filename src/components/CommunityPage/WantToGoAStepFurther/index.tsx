import { dashboardRegisterUrl } from '../../../../shared';
import Container from '../../Container';
import Card from './Card';
import { CardProps } from './shared';
import { container } from './styles.module.less';

const linkIdSuffix = '-link/want-to-go-section/community-page';

const cardsData: CardProps[] = [
    {
        title: 'Want to connect directly with an expert?',
        link: {
            id: `contact-us${linkIdSuffix}`,
            label: 'Contact Us',
            href: '/contact-us/',
        },
    },
    {
        title: 'Ready to build real-time pipelines yourself?',
        outboundLink: {
            id: `try-estuary-for-free${linkIdSuffix}`,
            label: 'Try Estuary for Free',
            href: dashboardRegisterUrl,
        },
    },
    {
        title: 'Explore our library of tutorials, walkthroughs, and examples.',
        link: {
            id: `explore-tutorials${linkIdSuffix}`,
            label: 'Explore Tutorials',
            href: '/blog/tutorial/',
        },
    },
];

const WantToGoAStepFurther = () => {
    return (
        <section>
            <Container isVertical className={container}>
                <h2>
                    Want to go <span>a step further</span>?
                </h2>
                <ul>
                    {cardsData.map((card, index) => (
                        <Card
                            key={`step-further-cta-card-${index + 1}`}
                            {...card}
                        />
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default WantToGoAStepFurther;
