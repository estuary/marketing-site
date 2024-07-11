import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Link } from 'gatsby';
import * as React from 'react';

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

const RenderTocItem = ({
    item,
    depth,
    handleItemClick,
    selectKey,
    selectedItem,
}: RenderTocItemProps) => {
    console.log('selectKey', selectKey);
    console.log('selectedItem', selectedItem);
    const isSelected = selectKey === selectedItem;

    const handleLinkClick = (
        event: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
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

    const renderedItems = React.useMemo(
        () =>
            depth === 0 && item.items && item.items.length > 0 ? (
                <ol>
                    {item.items.map((nestedItem) => (
                        <RenderTocItem
                            key={nestedItem.id}
                            selectKey={nestedItem.id}
                            item={nestedItem}
                            depth={1}
                            handleItemClick={handleItemClick}
                            selectedItem={selectedItem}
                        />
                    ))}
                </ol>
            ) : null,
        [depth, handleItemClick, item.items, selectedItem]
    );

    if (depth > 1) {
        return null;
    }

    return (
        <li
            style={{
                fontWeight: isSelected ? 'bold' : undefined,
                color: isSelected ? '#47506d' : undefined,
            }}
        >
            <span className="before-item" />
            <Link to={`#${selectKey}`} onClick={handleLinkClick}>
                {item.heading}
            </Link>
            {renderedItems}
        </li>
    );
};

export const RenderToc = ({ items }: { items: TocItem[] }) => {
    const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
    const intersectionObserver = React.useRef<IntersectionObserver | null>(
        null
    );
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
        intersectionObserver.current = new IntersectionObserver(
            (entries) => {
                let lastVisibleId;
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

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) {
                intersectionObserver.current?.observe(element);
            }
        });

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
                    window.pageYOffset +
                    yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 10);
    };

    console.log('selectedItem', selectedItem);

    const renderedItems = React.useMemo(
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
        <div className="table-of-contents">
            <Accordion elevation={0} className="accordion">
                <AccordionSummary
                    className="accordion-side-padding"
                    expandIcon={
                        <ExpandMoreIcon
                            sx={{ color: '#47506d', fontSize: '2rem' }}
                        />
                    }
                >
                    <Typography className="accordion-title">
                        In this article
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-side-padding">
                    <ul role="list">{renderedItems}</ul>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
