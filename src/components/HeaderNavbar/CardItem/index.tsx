import clsx from "clsx"
import { Link } from "gatsby"
import React from "react"
import { OutboundLink } from "../../OutboundLink"

const ItemLink = ({ name, description, Image, to }) => {
  const LinkElement: any = to[0] === '/' ? Link : OutboundLink
  const linkProps = to[0] === '/' ? { to } : { href: to }

  return (
    <LinkElement {...linkProps}>
      <div className="card-item">
        {Image && <div className="icon"><Image /></div>}
        <div>
          <p className="title">{name}</p>
          {description && <p className="description">{description}</p>}
        </div>
      </div>
    </LinkElement>
  )
}

// Always show the title on desktop
// Hide the title on mobile if onlyContent is true
const HeaderCardItem = ({ title, items = [], children, onlyContent, ...props }: any) => {
  return (
    <div {...props}>
      <p className={clsx({ "card-title": true, "hide-on-mobile": onlyContent })}>{title}</p>
      <div className="content">
        {items.map((item, index) => <ItemLink key={index} {...item} />)}
        {children}
      </div>
    </div>
  )
}

export default HeaderCardItem