import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import SectionHeader from '../SectionHeader';
import Palette from './Palette';

const paletteGroups = [
    {
        title: 'Primary palette',
        colors: [
            { title: 'Blue', hexCode: '5072EB', rgbCode: '80 114 235' },
            { title: 'Green', hexCode: '6ED5D6', rgbCode: '110 213 214' },
            { title: 'Dark Blue', hexCode: '04192B', rgbCode: '4 25 43' },
            { title: 'Gray', hexCode: '47506D', rgbCode: '71 80 109' },
        ],
    },
    {
        title: 'Secondary palette',
        colors: [
            { title: 'Violet', hexCode: '625EFF', rgbCode: '98 94 255' },
            { title: 'Violet 300', hexCode: 'A4B6F4', rgbCode: '164 182 244' },
            { title: 'Violet 200', hexCode: 'EEF1FD', rgbCode: '238 241 253' },
            { title: 'Violet 100', hexCode: 'F6F8FE', rgbCode: '246 248 254' },
        ],
    },
];

const EstuaryColorPalette = () => (
    <section className={defaultWrapperDarkBlue}>
        <Container isDarkTheme isVertical>
            <SectionHeader
                title={
                    <>
                        <span>Estuary</span> color palette
                    </>
                }
                description="Our palette has been carefully chosen to allow for a diverse set of brand executions while remaining highly legible and accessible. Divided into two groups, color should be used with intention and restraint — favoring moments of calm over extremely colorful executions."
            />

            {paletteGroups.map(({ title, colors }, index) => (
                <Palette
                    key={`estuary-color-palette-${index + 1}`}
                    title={title}
                    colors={colors}
                />
            ))}
        </Container>
    </section>
);

export default EstuaryColorPalette;
