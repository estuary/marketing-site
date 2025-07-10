import Container from '../../Container';
import BanknotesIcon from '../../../svgs/banknotes.svg';
import BoltIcon from '../../../svgs/bolt.svg';
import ArrowsPointingOutIcon from '../../../svgs/arrows-pointing-out.svg';
import ShieldCheckIcon from '../../../svgs/shield-check.svg';
import FireIcon from '../../../svgs/fire.svg';
import SquaresPlusIcon from '../../../svgs/squares-plus.svg';
import Card from './Card';
import { container } from './styles.module.less';

const keyHighlights = [
    {
        icon: <BanknotesIcon />,
        title: 'Cost',
        description:
            'Understand how leading data warehouses compare when it comes to price efficiency. We measured performance-per-dollar across identical workloads to help you identify the most cost-effective options for your use case.',
    },
    {
        icon: <BoltIcon />,
        title: 'Speed',
        description:
            'Benchmark results reveal which platforms offer the fastest query times under various analytical workloads — so you can choose a solution that meets your SLAs for real-time and batch analytics.',
    },
    {
        icon: <ArrowsPointingOutIcon />,
        title: 'Scalability',
        description:
            'Explore how well each warehouse handles increasing data volumes and concurrent queries. We tested vertical and horizontal scaling to expose differences in architecture and throughput.',
    },
    {
        icon: <ShieldCheckIcon />,
        title: 'Reliability',
        description:
            'From uptime guarantees to consistency under load, we evaluated how each warehouse performs under stress conditions to highlight platform resilience.',
    },
    {
        icon: <FireIcon />,
        title: 'Key Trends',
        description:
            'The study uncovers notable trends across the warehouse ecosystem — including architectural shifts, trade-offs between compute and storage, and new optimization patterns shaping the future of analytics infrastructure.',
    },
    {
        icon: <SquaresPlusIcon />,
        title: 'And much more…',
        description:
            "Dive into a comprehensive, transparent, and unbiased performance analysis. Whether you're migrating, optimizing, or comparing vendors, this benchmark gives you the data to make informed decisions.",
    },
];

const KeyHighlights = () => {
    return (
        <section>
            <Container isVertical className={container}>
                <h2>Key highlights</h2>
                <ul>
                    {keyHighlights.map((keyHighlight, index) => (
                        <Card
                            key={`key-highlight-${index}`}
                            {...keyHighlight}
                        />
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default KeyHighlights;
