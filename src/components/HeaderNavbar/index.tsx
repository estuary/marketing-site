import React, { useState } from "react"
import { Link } from "gatsby"
import { OutboundLink } from "../../components/OutboundLink"

import LinkProduct from "./Product"
import LinkResources from "./Resources"

const HeaderNavbar = () => {
  const [current, setCurrent] = useState('')

  return (
    <div className="global-header-links">
      <LinkProduct active={current === 'product'} setActive={setCurrent} />
      <Link className="global-header-link" to="/pricing">Pricing</Link>
      <Link className="global-header-link" to="/integrations">Connectors</Link>
      <LinkResources active={current === 'resources'} setActive={setCurrent} />
      <OutboundLink className="global-header-link" href="https://docs.estuary.dev">Docs</OutboundLink>
    </div>
  )
}

export default HeaderNavbar