import FileIcon from '../../../../svgs/file.svg';
import LinkOutlined from '../../../LinksAndButtons/LinkOutlined';
import { container } from './styles.module.less';

interface CardProps {
    title: string;
    buttonHref: string;
}

const Card = ({ title, buttonHref }: CardProps) => {
    return (
        <div className={container}>
            <div>
                <FileIcon color="var(--blue)" />
            </div>
            <h3>{title}</h3>
            <LinkOutlined href={buttonHref} variant="secondary">
                Read
            </LinkOutlined>
        </div>
    );
};

export default Card;
