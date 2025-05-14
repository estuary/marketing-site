import clsx from 'clsx';
import { Color } from '../../../shared';
import { colorCard } from '../../../styles.module.less';
import { container, color, colorCodesWrapper } from './styles.module.less';

const Card = ({ title, hexCode, rgbCode }: Color) => {
    return (
        <li className={clsx(colorCard, container)}>
            <div style={{ backgroundColor: `#${hexCode}` }} className={color} />
            <h4>{title}</h4>
            <div className={colorCodesWrapper}>
                <span>
                    <strong>HEX</strong> <span>{hexCode}</span>
                </span>
                <span>
                    <strong>RGB</strong> <span>{rgbCode}</span>
                </span>
            </div>
        </li>
    );
};

export default Card;
