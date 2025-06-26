import Checkmark from '../../../svgs/checkmark.svg';
import { SolutionSectionListItem } from '../../../templates/solutions/shared';
import { container, iconWrapper } from './styles.module.less';

interface ListProps {
    title?: string;
    items: SolutionSectionListItem[];
}

const List = ({ title, items }: ListProps) => {
    return (
        <div className={container}>
            <h3>{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={`solution-section-list-item-${index + 1}`}>
                        <div className={iconWrapper}>
                            <Checkmark color="var(--green)" />
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: item.text.data.text,
                            }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
