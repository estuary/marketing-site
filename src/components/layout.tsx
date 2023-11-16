import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import TakeATour from "./TakeATour"

const Layout = ({headerTheme, showTour = false, children}: {headerTheme: "light"|"dark", showTour?: boolean, children: React.ReactNode|React.ReactNode[]}) => {
  const [closeTour, setCloseTour] = React.useState(typeof window !== 'undefined' && !!localStorage.getItem('@estuary/closeTour'))

  return (
    <div className="global-wrapper">
      {showTour && !closeTour && <TakeATour onClose={() => setCloseTour(true)} />}
      <Header theme={headerTheme}/>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

