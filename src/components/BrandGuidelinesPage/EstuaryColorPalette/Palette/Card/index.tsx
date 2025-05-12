import { Color } from '../shared';
import { container, color, colorCodesWrapper } from './styles.module.less';

const Card = ({ title, hexCode, rgbCode }: Color) => {
    return (
        <li className={container}>
            <div style={{ backgroundColor: `#${hexCode}` }} className={color} />
            <h4>{title}</h4>
            <div className={colorCodesWrapper}>
                <span>
                    <strong>HEX</strong> {hexCode}
                </span>
                <span>
                    <strong>RGB</strong> {rgbCode}
                </span>
            </div>
        </li>
    );
};

export default Card;
