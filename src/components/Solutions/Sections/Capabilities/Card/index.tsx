import clsx from 'clsx';
import CloudHandOutlinedIcon from '../../../../../svgs/checkmark.svg';
import { container, darkTheme } from './styles.module.less';

interface CardProps {
    text: string;
    isDarkTheme: boolean;
}

const Card = ({ text, isDarkTheme = false }: CardProps) => {
    return (
        <div className={clsx(container, isDarkTheme ? darkTheme : null)}>
            <CloudHandOutlinedIcon color="var(--blue)" />
            <p>{text}</p>
        </div>
    );
};

export default Card;
