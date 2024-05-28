import clsx from "clsx"
import * as React from "react"

import Footer from "./footer"
import Header from "./header"
const TakeATour = React.lazy(() => import("./TakeATour"))

const Layout = ({
    headerTheme,
    fixedHeader = true,
    showTour = false,
    children,
}: {
    headerTheme: "light" | "dark"
    fixedHeader?: boolean
    showTour?: boolean
    children: React.ReactNode | React.ReactNode[]
}) => {
    return (
        <div className="global-wrapper">
            <React.Suspense fallback={null}>
                <TakeATour />
            </React.Suspense>
            <Header fixedHeader={fixedHeader} />
            <main className={clsx(fixedHeader && "global-main-fixed-header")}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
