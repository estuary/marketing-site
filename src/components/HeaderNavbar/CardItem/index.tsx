import React from "react"
import { Link } from "gatsby"
import clsx from "clsx"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { isDesktop } from "react-device-detect"
import { GatsbyImage } from "gatsby-plugin-image"

const ItemLink = ({ Name, Description, Icon, Link: link }) => {
  const LinkElement: any = link && link[0] === '/' ? Link : OutboundLink
  const linkProps = link && link[0] === '/' ? { to: link } : { href: link }

  return (
    <LinkElement {...linkProps}>
      <div className="card-item">
        {Icon && 
          <div className="icon">
            <GatsbyImage
              alt={Name}
              image={Icon.localFile.childImageSharp.gatsbyImageData}
              loading="eager"
            />  
          </div>
        }
        <div>
          <p className="title">{Name}</p>
          {Description && <p className="description">{Description}</p>}
        </div>
      </div>
    </LinkElement>
  )
}

const HeaderCardItem = ({ title, items = [], children, hideOnMobile = false, onlyContent, ...props }: any) => {
  return (
    <div className={clsx((!!children || hideOnMobile) && "hide-on-mobile")} {...props}>
      {(!onlyContent || isDesktop) && <p className="card-title">{title}</p>}
      <div className="content">
        {items.map((item, index) => <ItemLink key={index} {...item} />)}
        {children}
      </div>
    </div>
  )
}

export default HeaderCardItem