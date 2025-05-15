import Container from '../../Container';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import SectionHeader from '../SectionHeader';
import ArrowRightIcon from '../../../svgs/arrow-right-2.svg';
import OutboundLink from '../../LinksAndButtons/OutboundLink';
import { container, cardsList, card } from './styles.module.less';

const GOOGLE_FONTS_INTER = 'https://fonts.google.com/specimen/Inter';

const EstuaryTypography = () => (
    <section className={defaultWrapperGrey}>
        <Container isVertical className={container}>
            <SectionHeader
                title={
                    <>
                        <span>Estuary</span> typography
                    </>
                }
                description="Inter is a modern and versatile sans-serif typeface, designed for digital interfaces. With influences from humanist and neo-grotesque styles, it balances clarity and elegance. Each character is carefully crafted for smooth readability across all screen resolutions."
                link={
                    <>
                        <OutboundLink
                            href={GOOGLE_FONTS_INTER}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download Inter
                        </OutboundLink>
                        <ArrowRightIcon color="var(--blue)" />
                    </>
                }
            />
            <div className={cardsList}>
                <div className={card}>
                    <div>
                        <span>
                            Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq
                            Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789
                        </span>
                    </div>
                </div>
                <div className={card}>
                    <div>
                        <span>H1 - Estuary</span>
                        <span>Title 1 - Estuary</span>
                        <span>Body 1 - Estuary</span>
                    </div>
                </div>
            </div>
        </Container>
    </section>
);

export default EstuaryTypography;
