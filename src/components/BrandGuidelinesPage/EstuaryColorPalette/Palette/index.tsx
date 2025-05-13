import { Color } from '../../shared';
import { container } from './styles.module.less';
import Card from './Card';

interface PaletteProps {
    title: string;
    colors: Color[];
}

const Palette = ({ title, colors }: PaletteProps) => (
    <div className={container}>
        <h3>{title}</h3>
        <ul>
            {colors.map((color) => (
                <Card key={`palette-color-${color.hexCode}`} {...color} />
            ))}
        </ul>
    </div>
);

export default Palette;
