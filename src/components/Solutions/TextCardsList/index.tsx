import Card from '../Card';
import { container } from './styles.module.less';

interface TextCardsListProps {
    items: string[];
    isDarkTheme?: boolean;
}

const TextCardsList = ({ items, isDarkTheme = false }: TextCardsListProps) => {
    return (
        <ul className={container}>
            {items.map((item, index) => (
                <li key={index}>
                    <Card text={item} isDarkTheme={isDarkTheme} />
                </li>
            ))}
        </ul>
    );
};

export default TextCardsList;
