import Checkmark from '../../../svgs/checkmark.svg';
import { SolutionSectionListItem } from '../../../templates/solutions/shared';
import { ProcessedHtml } from '../../BlogPostProcessor';
import { container, iconWrapper } from './styles.module.less';

interface ListProps {
    title?: string;
    items: SolutionSectionListItem[];
}

const iconSize = 10;

const List = ({ title, items }: ListProps) => {
    return (
        <div className={container}>
            <h3>{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={`solution-section-list-item-${index + 1}`}>
                        <div className={iconWrapper}>
                            <Checkmark
                                color="var(--green)"
                                width={iconSize}
                                height={iconSize}
                            />
                        </div>
                        <ProcessedHtml body={item.text.data.text} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
