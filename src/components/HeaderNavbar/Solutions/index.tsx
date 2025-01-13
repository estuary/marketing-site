import {
    useMediaQuery,
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from '@mui/material';
import Card from '../Card';
import CardItem from '../CardItem';
import { accordionDetails } from '../styles.module.less';
import { accordionStyles, accordionSummaryStyles } from '../shared';
import MenuLink from '../MenuLink';
import {
    useCaseSolutions,
    industrySolutions,
    technologySolutions,
} from './items';

const HeaderNavbarSolutions = ({ active, setActive }) => {
    const isMobile = useMediaQuery('(max-width:1142px)');

    const onClick = (ev: { preventDefault: () => void }) => {
        if (isMobile) {
            ev.preventDefault();
            setActive((prev: string) =>
                prev === 'solutions' ? '' : 'solutions'
            );
        }
    };

    const onMouseEnter = (ev: { preventDefault: () => void }) => {
        if (!isMobile) {
            ev.preventDefault();
            setActive('solutions');
        }
    };

    return (
        <Accordion elevation={0} expanded={active} sx={accordionStyles}>
            <AccordionSummary
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                sx={accordionSummaryStyles}
            >
                <MenuLink title="Solutions" active={active} />
            </AccordionSummary>
            <AccordionDetails className={accordionDetails}>
                <Card>
                    <CardItem title="USE CASES" items={useCaseSolutions} />
                    <CardItem title="INDUSTRY" items={industrySolutions} />
                    <CardItem title="TECHNOLOGY" items={technologySolutions} />
                </Card>
            </AccordionDetails>
        </Accordion>
    );
};

export default HeaderNavbarSolutions;
