import clsx from 'clsx';
import { colorCard } from '../../styles.module.less';
import { CombinationColor } from '../shared';
import { getSlugifiedText } from '../../../../../shared';
import { container, sample, footer, labels, codes } from './styles.module.less';

export interface CardProps {
    title: string;
    colors: [CombinationColor, CombinationColor];
    foreground: string;
    background: string;
}

const Card = ({
    title,
    colors: [fg, bg],
    foreground,
    background,
}: CardProps) => {
    const lines = Array.from({ length: 4 }, () => title);
    const hexCodes = [fg.hexCode, bg.hexCode];

    return (
        <li className={clsx(colorCard, container)}>
            <div className={sample} style={{ backgroundColor: background }}>
                {lines.map((text, index) => (
                    <p
                        key={`${getSlugifiedText(text)}-sample-${index + 1}`}
                        style={{ color: foreground }}
                    >
                        {text}
                    </p>
                ))}
            </div>

            <div className={footer}>
                <div className={labels}>
                    <span>{fg.title}</span>
                    <span>{bg.title}</span>
                </div>
                <div className={codes}>
                    {hexCodes.map((hexCode) => (
                        <span key={`hex-code-${hexCode}`}>
                            <strong>HEX</strong> {hexCode}
                        </span>
                    ))}
                </div>
            </div>
        </li>
    );
};

export default Card;
