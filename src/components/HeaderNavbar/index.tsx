import React, { useState } from "react"

import useHeaderNavbar from "./useHeaderNavbar"

import LinkItem from "./Link"

const HeaderNavbar = () => {
  const [current, setCurrent] = useState('')
  const { navbarData } = useHeaderNavbar()

  return (
    <div className="global-header-links">
      {navbarData.navbar_links.map((itemLink) => 
        <LinkItem key={itemLink.Name} active={current === itemLink.Name} setActive={setCurrent} item={itemLink} />
      )}
    </div>
  )
}

export default HeaderNavbar