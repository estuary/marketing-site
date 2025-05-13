import { getSlugifiedText } from '../../../../shared';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import SectionHeader from '../SectionHeader';
import { container } from '../styles.module.less';
import Card from './Card';
import { CombinationColor } from './shared';

interface ColorCombination {
    title: string;
    colors: [CombinationColor, CombinationColor];
    foreground: string;
    background: string;
}

const colorCombinations: ColorCombination[] = [
    {
        title: 'White on Dark Blue',
        colors: [
            { title: 'White', hexCode: 'FFFFFF' },
            { title: 'Dark Blue', hexCode: '04192B' },
        ],
        foreground: '#FFFFFF',
        background: '#04192B',
    },
    {
        title: 'Dark Blue on Blue',
        colors: [
            { title: 'Dark Blue', hexCode: '04192B' },
            { title: 'Blue', hexCode: '5072EB' },
        ],
        foreground: '#04192B',
        background: '#5072EB',
    },
    {
        title: 'Green on Dark Blue',
        colors: [
            { title: 'Green', hexCode: '6ED5D6' },
            { title: 'Dark Blue', hexCode: '04192B' },
        ],
        foreground: '#6ED5D6',
        background: '#04192B',
    },
    {
        title: 'Blue on White',
        colors: [
            { title: 'Blue', hexCode: '5072EB' },
            { title: 'White', hexCode: 'FFFFFF' },
        ],
        foreground: '#5072EB',
        background: '#FFFFFF',
    },
    {
        title: 'Dark Blue on Violet',
        colors: [
            { title: 'Dark Blue', hexCode: '04192B' },
            { title: 'Violet 300', hexCode: 'A4B6F4' },
        ],
        foreground: '#04192B',
        background: '#A4B6F4',
    },
    {
        title: 'White on Violet',
        colors: [
            { title: 'White', hexCode: 'FFFFFF' },
            { title: 'Violet 300', hexCode: 'A4B6F4' },
        ],
        foreground: '#FFFFFF',
        background: '#A4B6F4',
    },
    {
        title: 'White on Blue',
        colors: [
            { title: 'White', hexCode: 'FFFFFF' },
            { title: 'Blue', hexCode: '5072EB' },
        ],
        foreground: '#FFFFFF',
        background: '#5072EB',
    },
    {
        title: 'Gray on White',
        colors: [
            { title: 'Gray', hexCode: '47506D' },
            { title: 'White', hexCode: 'FFFFFF' },
        ],
        foreground: '#47506D',
        background: '#FFFFFF',
    },
];

const EstuaryColorCombinations = () => (
    <section className={defaultWrapperDarkBlue}>
        <Container isDarkTheme isVertical className={container}>
            <SectionHeader
                title={
                    <>
                        <span>Estuary</span> color combinations
                    </>
                }
                description="All examples below demonstrate contrast standards, with the exception of small white text on a light violet (Violet 300) background. Avoid using small white text on light violet, as it lacks sufficient contrast for readability."
            />

            <ul>
                {colorCombinations.map(
                    ({ title, colors, foreground, background }) => (
                        <Card
                            key={`estuary-${getSlugifiedText(title)}`}
                            title={title}
                            colors={colors}
                            foreground={foreground}
                            background={background}
                        />
                    )
                )}
            </ul>
        </Container>
    </section>
);

export default EstuaryColorCombinations;
