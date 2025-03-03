import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography, useMediaQuery, Collapse } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { MouseEvent, useEffect, useMemo, useRef, useState } from 'react';
import {
    tableOfContents,
    accordion,
    accordionSidePadding,
    accordionTitle,
    tocItem,
    isItemSelected,
    tocSubItems,
} from './styles.module.less';

type TocItem = {
    id: string;
    heading: string;
    items?: TocItem[];
};

type RenderTocItemProps = {
    item: TocItem;
    selectKey: string;
    selectedItem: string | null;
    depth: number;
    handleItemClick: (id: string) => void;
};

const hasSelectedDescendant = (
    item: TocItem,
    selected: string | null
): boolean => {
    if (!item.items || !selected) return false;
    return item.items.some(
        (child) =>
            child.id === selected || hasSelectedDescendant(child, selected)
    );
};

const RenderTocItem = ({
    item,
    depth,
    handleItemClick,
    selectKey,
    selectedItem,
}: RenderTocItemProps) => {
    const isSelected = selectKey === selectedItem;
    const isExpanded = isSelected || hasSelectedDescendant(item, selectedItem);

    const handleLinkClick = (
        event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
    ) => {
        if (!isSelected) {
            handleItemClick(selectKey);
        } else {
            event.preventDefault();
            const yOffset = -120;
            const element = document.getElementById(selectKey);
            if (element) {
                const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    };

    return (
        <li className={clsx(tocItem, isSelected && isItemSelected)}>
            <Link to={`#${selectKey}`} onClick={handleLinkClick}>
                {item.heading}
            </Link>
            {depth < 1 && item.items && item.items.length > 0 ? (
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                    <ol role="list" style={{ padding: 0 }}>
                        {item.items.map((nestedItem) => (
                            <li key={nestedItem.id} className={tocSubItems}>
                                <hr />
                                <RenderTocItem
                                    selectKey={nestedItem.id}
                                    item={nestedItem}
                                    depth={depth + 1}
                                    handleItemClick={handleItemClick}
                                    selectedItem={selectedItem}
                                />
                            </li>
                        ))}
                    </ol>
                </Collapse>
            ) : null}
        </li>
    );
};

const observeItems = (
    items: TocItem[],
    observer: IntersectionObserver,
    depth: number = 0
) => {
    items.forEach((item) => {
        if (depth <= 1) {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        }
        if (item.items) {
            observeItems(item.items, observer, depth + 1);
        }
    });
};

export const RenderToc = ({ items }: { items: TocItem[] }) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const intersectionObserver = useRef<IntersectionObserver | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isMobile = useMediaQuery('(max-width: 768px) or (max-height: 790px)');

    useEffect(() => {
        intersectionObserver.current = new IntersectionObserver(
            (entries) => {
                let lastVisibleId: string | undefined;
                entries.forEach((entry) => {
                    if (
                        entry.isIntersecting &&
                        entry.intersectionRatio >= 0.5
                    ) {
                        lastVisibleId = entry.target.id;
                    }
                });
                if (lastVisibleId && !timeoutRef.current) {
                    setSelectedItem(lastVisibleId);
                }
            },
            { threshold: 0.5 }
        );

        observeItems(items, intersectionObserver.current);

        return () => {
            if (intersectionObserver.current) {
                intersectionObserver.current.disconnect();
            }
        };
    }, [items]);

    const handleItemClick = (id: string) => {
        clearTimeout(timeoutRef.current ?? undefined);
        setSelectedItem(id);
        timeoutRef.current = setTimeout(() => {
            timeoutRef.current = null;
        }, 100);
        setTimeout(() => {
            const yOffset = -120;
            const element = document.getElementById(id);
            if (element) {
                const y =
                    element.getBoundingClientRect().top +
                    window.scrollY +
                    yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 10);
    };

    const renderedItems = useMemo(
        () =>
            items.map((item) => (
                <RenderTocItem
                    key={item.id}
                    selectKey={item.id}
                    item={item}
                    depth={0}
                    handleItemClick={handleItemClick}
                    selectedItem={selectedItem}
                />
            )),
        [items, selectedItem]
    );

    return (
        <div className={tableOfContents}>
            <Accordion
                elevation={0}
                className={accordion}
                defaultExpanded={!isMobile}
            >
                <AccordionSummary
                    className={accordionSidePadding}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography className={accordionTitle}>
                        Table of Contents
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={accordionSidePadding}>
                    <ul role="list">{renderedItems}</ul>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
