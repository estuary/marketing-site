import clsx from "clsx"
import { Link } from "gatsby"
import React, { useEffect, useRef } from "react"
import { isDesktop } from "react-device-detect"
import { OutboundLink } from "../../../components/OutboundLink"

import Chevron from "@mui/icons-material/ChevronRight"
import NavbarImage from "../../../svgs/navbar-image-2.svg"

import { caseStudies, listen, read, tour } from "./items"

import { webinarsUrl } from "../../../../shared"
import CardItem from "../CardItem"
const Card = React.lazy(() => import("../Card"))

const HeaderNavbarResources = ({ active, setActive }) => {
    const wrapperRef = useRef(null)

    const onClick = ev => {
        ev.preventDefault()
        if (!isDesktop)
            setActive(prev => (prev === "resources" ? "" : "resources"))
    }

    const onMouseEnter = ev => {
        ev.preventDefault()
        if (isDesktop) setActive("resources")
    }

    const onMouseLeave = ev => {
        ev.preventDefault()
        if (isDesktop) setActive("")
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target) &&
                !event.target.className?.includes?.("active")
            ) {
                setActive("")
            }
        }

        if (active) document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [active])

    return (
        <>
            <Link
                className={clsx("global-header-link", active && "active")}
                to="#"
                onClick={onClick}
                onMouseEnter={onMouseEnter}
            >
                Resources
                <Chevron className="menu-chevron" fontSize="small" />
            </Link>
            <React.Suspense fallback={null}>
                <Card
                    customRef={wrapperRef}
                    show={active}
                    onMouseLeave={onMouseLeave}
                >
                    <CardItem title="READ" onlyContent items={read} />
                    <CardItem
                        className="no-padding"
                        title="LISTEN"
                        onlyContent
                        items={listen}
                    />
                    <CardItem
                        className="hide-on-mobile"
                        title="TOUR"
                        items={tour}
                    />
                    <CardItem
                        className="hide-on-mobile"
                        title="CASE STUDIES"
                        items={caseStudies}
                    />
                    <CardItem className="hide-on-mobile" title="WEBINAR">
                        <NavbarImage />
                        <OutboundLink
                            target="_blank"
                            href={webinarsUrl}
                            className="cta-button"
                        >
                            Watch Estuary 101
                        </OutboundLink>
                    </CardItem>
                </Card>
            </React.Suspense>
        </>
    )
}

export default HeaderNavbarResources
