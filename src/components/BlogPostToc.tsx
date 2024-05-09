import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Link } from "gatsby";
import React, { MouseEvent, useEffect, useRef, useState } from "react";

type TocItem = {
    id: string
    heading: string
    items?: TocItem[]
}

type RenderTocItemProps = {
    item: TocItem; depth: number;
    handleItemClick: (id: string) => void;
    isSelected: boolean
}

const RenderTocItem = ({ item, depth, handleItemClick, isSelected }: RenderTocItemProps) => {
    if (depth > 1) {
        return null
    }

    const handleLinkClick = (event: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (!isSelected) {
            handleItemClick(item.id);
        } else {
            event.preventDefault();
            const yOffset = -120;
            const element = document.getElementById(item.id);
            if (element) {
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    };

    return (
        <li style={{ fontWeight: isSelected ? 'bold' : 'normal', color: isSelected ? "#47506d" : "#989daf" }}>
            <div className="before-item" />
            <Link to={`#${item.id}`} onClick={handleLinkClick}>{item.heading}</Link>
        </li>
    )
}

export const RenderToc = ({ items }: { items: TocItem[] }) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const intersectionObserver = useRef<IntersectionObserver | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        intersectionObserver.current = new IntersectionObserver(
            (entries) => {
                let lastVisibleId = null;
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
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
                intersectionObserver.current.observe(element);
            }
        });

        return () => {
            if (intersectionObserver.current) {
                intersectionObserver.current.disconnect();
            }
        };
    }, [items]);

    const handleItemClick = (id: string) => {
        clearTimeout(timeoutRef.current);
        setSelectedItem(id);
        timeoutRef.current = setTimeout(() => {
            timeoutRef.current = null;
        }, 100);
        setTimeout(() => {
            const yOffset = -120;
            const element = document.getElementById(id);
            if (element) {
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 10);
    };

    return (
        <div className="table-of-contents">
            <Accordion elevation={0} className="accordion">
                <AccordionSummary className="accordion-side-padding" expandIcon={<ExpandMoreIcon sx={{ color: "#47506d", fontSize: "2rem" }} />}>
                    <Typography className="accordion-title">In this article</Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-side-padding">
                    <ul>
                        {items.map(item => (
                            <RenderTocItem key={item.id} item={item} depth={0} handleItemClick={handleItemClick} isSelected={item.id === selectedItem} />
                        ))}
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
