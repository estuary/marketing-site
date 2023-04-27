import * as React from "react"
import HoverMenu from "material-ui-popup-state/HoverMenu"
import MenuItem from "@mui/material/MenuItem"
import ListSubheader from "@mui/material/ListSubheader"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Collapse from "@mui/material/Collapse"
import Chevron from "@mui/icons-material/ChevronRight"
import ExpandMore from "@mui/icons-material/ExpandMore"
import ExpandLess from "@mui/icons-material/ExpandLess"
import Button from "@mui/material/Button"
import {
    usePopupState,
    bindHover,
    bindFocus,
    bindMenu,
} from "material-ui-popup-state/hooks"
import { Link, navigate } from "gatsby"
import { useState } from "react"

const CascadingContext = React.createContext({
    parentPopupState: null,
    rootPopupState: null,
})

export function CascadingMenuItem({
    onClick,
    ...props
}: React.ComponentProps<typeof MenuItem>) {
    const { rootPopupState } = React.useContext(CascadingContext)
    if (!rootPopupState) throw new Error("must be used inside a CascadingMenu")
    const handleClick = React.useCallback(
        event => {
            rootPopupState.close(event)
            if (onClick) onClick(event)
        },
        [rootPopupState, onClick]
    )

    return <MenuItem {...props} onClick={handleClick} />
}

export function CascadingSubmenu({
    title,
    popupId,
    ...props
}: Omit<
    React.ComponentProps<typeof CascadingMenu> & { popupId: string },
    "popupState"
>) {
    const { parentPopupState } = React.useContext(CascadingContext)
    const popupState = usePopupState({
        popupId,
        variant: "popover",
        parentPopupState,
    })
    return (
        <React.Fragment>
            <MenuItem
                style={{ paddingRight: 0 }}
                {...bindHover(popupState)}
                {...bindFocus(popupState)}
            >
                <span className={"global-header-menu-title"}>{title}</span>
                <Chevron className={"global-header-menu-chevron"} />
            </MenuItem>
            <CascadingMenu
                {...props}
                classes={{
                    ...props.classes,
                    paper: "global-header-menu-submenu",
                }}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                popupState={popupState}
            />
        </React.Fragment>
    )
}

export function CascadingMenu({
    popupState,
    ...props
}: Omit<
    React.ComponentProps<typeof HoverMenu> & {
        popupState: Parameters<typeof bindMenu>[0]
    },
    keyof ReturnType<typeof bindMenu>
>) {
    const { rootPopupState } = React.useContext(CascadingContext)
    const context = React.useMemo(
        () => ({
            rootPopupState: rootPopupState || popupState,
            parentPopupState: popupState,
        }),
        [rootPopupState, popupState]
    )

    return (
        <CascadingContext.Provider value={context}>
            <HoverMenu {...props} {...bindMenu(popupState)} />
        </CascadingContext.Provider>
    )
}

export interface NavItem {
    title: string
    path?: string
    children?: NavItem[]
}

export const NavMenuItem = ({ item }: { item: NavItem }) => {
    if (item.children?.length > 0) {
        let submenu = (
            <CascadingSubmenu
                title={item.title}
                popupId={`${item.title}-${item.path}`}
            >
                {item.children.map(child => (
                    <NavMenuItem item={child} />
                ))}
            </CascadingSubmenu>
        )
        if (item.path) {
            submenu = (
                <Link className="global-header-menu-link" to={item.path||"#"}>
                    {submenu}
                </Link>
            )
        }
        return submenu
    } else {
        return (
            <Link className="global-header-menu-link" to={item.path||"#"}>
                <CascadingMenuItem>
                    {item.title}
                </CascadingMenuItem>
            </Link>
        )
    }
}

export const NavMenuTopLevel = ({ item }: { item: NavItem }) => {
    const popupState = usePopupState({
        popupId: `${item.title}-${item.path}`,
        variant: "popover",
    })
    return (
        <>
            <Link
                className="global-header-link"
                to={item.path || "#"}
                {...bindHover(popupState)}
                {...bindFocus(popupState)}
            >
                {item.title}
                {item.children?.length > 0 ? (
                    <Chevron className={"global-header-menu-chevron-down"} />
                ) : null}
            </Link>
            {item.children?.length > 0 && (
                <CascadingMenu
                    popupState={popupState}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                >
                    {item.children.map(child => (
                        <NavMenuItem key={`${child.path}-${child.title}`} item={child} />
                    ))}
                </CascadingMenu>
            )}
        </>
    )
}

export const NavMenuList = ({ item }: { item: NavItem }) => {
    const [open, setOpen] = useState(false)
    let button = (
        <ListItemButton
            onClick={() => {
                if (item.children?.length > 0) {
                    setOpen(open => !open)
                } else if (item.path) {
                    navigate(item.path)
                }
            }}
        >
            <ListItemText
                primary={
                    <Link to={item.path} className="global-header-link">
                        {item.title}
                    </Link>
                }
            />
            {item.children?.length > 0 ? (
                open ? (
                    <ExpandLess />
                ) : (
                    <ExpandMore />
                )
            ) : null}
        </ListItemButton>
    )
    if (item.children) {
        return (
            <>
                {button}
                <Collapse
                    className="global-header-mobile-menu-borderLeft"
                    in={open}
                    timeout="auto"
                    unmountOnExit
                >
                    <List component="div" disablePadding>
                        {item.children.map(child => (
                            <NavMenuList item={child} />
                        ))}
                    </List>
                </Collapse>
            </>
        )
    } else {
        return button
    }
}
