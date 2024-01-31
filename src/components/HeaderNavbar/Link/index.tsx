import React, { useRef, useEffect } from "react"
import clsx from "clsx"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { isDesktop } from "react-device-detect"

import Chevron from "@mui/icons-material/ChevronRight"
import NavbarImage from "../../../svgs/navbar-image-1.svg"

import Card from "../Card"
import CardItem from "../CardItem"

const HeaderNavbarLink = ({ active, setActive, item }) => {
  const wrapperRef = useRef(null);

  const LinkElement: any = item.Link && item.Link[0] === '/' ? Link : OutboundLink

  const onClick = (ev) => {
    ev.preventDefault()
    if (!isDesktop) setActive((prev) => prev === item.Name ? '' : item.Name)
  }

  const onMouseEnter = (ev) => {
    ev.preventDefault()
    if (isDesktop) setActive(item.Name)
  }

  const onMouseLeave = (ev) => {
    ev.preventDefault()
    if (isDesktop) setActive('')
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (isDesktop && wrapperRef.current && !wrapperRef.current.contains(event.target) && !event.target.className?.includes?.('active')) {
        setActive('')
      }
    }

    if (active) document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    };
  }, [active]);

  return (
      <>
        <LinkElement 
          className={clsx("global-header-link", active && "active")}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          {...{ [item.Link && item.Link[0] === '/' ? 'to' : 'href']: item.Link }}
        >
          {item.Name}
          {!!item.navbar_link_sections.length && <Chevron className="menu-chevron" fontSize="small" />}
        </LinkElement>
        {!!item.navbar_link_sections.length && <Card customRef={wrapperRef} show={active} onMouseLeave={onMouseLeave}>
          {item.navbar_link_sections.map((section) => 
            <CardItem key={section.Title} title={section.Title} onlyContent={section.MobileShowTitle === false} hideOnMobile={section.MobileShowElement !== true} items={section.Items || []}>
              {!!section.Image && 
                <>
                  <NavbarImage />
                    <LinkElement
                      className="cta-button"
                      target="_blank"
                      {...{ [section.Image.ButtonLink && section.Image.ButtonLink[0] === '/' ? 'to' : 'href']: section.Image.ButtonLink }}
                  >
                      {section.Image.ButtonLabel}
                  </LinkElement>
                </>
              }
            </CardItem>
          )}
        </Card>}
      </>
  )
}

export default HeaderNavbarLink