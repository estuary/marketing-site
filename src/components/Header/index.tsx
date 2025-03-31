import clsx from 'clsx';
import { Link } from 'gatsby';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Slide } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ColoredLogo from '../../svgs/colored-logo.svg';
import GithubIcon from '../../svgs/github-outline.svg';
import SlackIcon from '../../svgs/slack-outline.svg';
import HeaderNavbar from '../HeaderNavbar';
import HeaderNavBarBackground from '../HeaderNavbar/Background';
import {
    globalHeaderLink,
    globalHeaderLogoLink,
    globalHeaderLogo,
    globalHeaderTitle,
} from '../styles.module.less';
import {
    dashboardRegisterUrl,
    dashboardUrl,
    estuaryFlowGithubUrl,
    slackUrl,
} from '../../../shared';
import OutboundLink from '../LinksAndButtons/OutboundLink';
import OutboundLinkFilled from '../LinksAndButtons/OutboundLinkFilled';
import {
    globalHeader,
    globalHeaderWrapper,
    globalHeaderFixed,
    headerBar,
    globalHeaderLinkWrapper,
    globalHeaderLoginTry,
    globalHeaderTryItButton,
    headerSocialIcons,
    globalHeaderMobileMenuWrapper,
    globalHeaderMobileMenuButton,
    headerSocialIcon,
    menuContentDesktop,
    menuContentMobile,
} from './styles.module.less';

const slideTimeout = 150;

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                setMobileMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [wrapperRef]);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const headerNavbar = useMemo(
        () => (
            <HeaderNavbar
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
            />
        ),
        [activeMenu, setActiveMenu]
    );

    return (
        <>
            <HeaderNavBarBackground menuOpen={Boolean(activeMenu)} />
            <header
                className={clsx(headerBar, globalHeaderFixed)}
                ref={wrapperRef}
            >
                <div className={globalHeader}>
                    <Link className={globalHeaderLogoLink} to="/">
                        <ColoredLogo
                            className={globalHeaderLogo}
                            style={{ width: 27, height: 35 }}
                        />
                        <strong className={globalHeaderTitle}>Estuary</strong>
                    </Link>
                    <div className={globalHeaderWrapper}>
                        <Slide
                            direction="left"
                            in={mobileMenuOpen}
                            timeout={{
                                enter: slideTimeout,
                                exit: slideTimeout,
                            }}
                        >
                            <div
                                className={clsx(
                                    globalHeaderLinkWrapper,
                                    menuContentMobile
                                )}
                            >
                                {headerNavbar}
                            </div>
                        </Slide>
                        <div
                            className={clsx(
                                globalHeaderLinkWrapper,
                                menuContentDesktop
                            )}
                        >
                            {headerNavbar}
                        </div>
                        <div className={headerSocialIcons}>
                            <OutboundLink
                                id="slack-header-link"
                                target="_blank"
                                href={slackUrl}
                                className={headerSocialIcon}
                                aria-label="Slack Invite Link"
                            >
                                <SlackIcon className="socialIcon" />
                            </OutboundLink>
                            <OutboundLink
                                id="github-header-link"
                                target="_blank"
                                href={estuaryFlowGithubUrl}
                                className={headerSocialIcon}
                                aria-label="Github Repo Link"
                            >
                                <GithubIcon className="socialIcon" />
                            </OutboundLink>
                        </div>
                        <div className={globalHeaderLoginTry}>
                            <OutboundLink
                                id="log-in-header-link"
                                target="_blank"
                                className={globalHeaderLink}
                                href={dashboardUrl}
                                style={{ marginRight: '1rem' }}
                            >
                                Log in
                            </OutboundLink>
                            <OutboundLinkFilled
                                id="try-it-free-header-link"
                                target="_blank"
                                href={dashboardRegisterUrl}
                                className={globalHeaderTryItButton}
                            >
                                Try it Free
                            </OutboundLinkFilled>
                        </div>
                    </div>
                    <div className={globalHeaderMobileMenuWrapper}>
                        <button
                            onClick={() => setMobileMenuOpen((open) => !open)}
                            className={globalHeaderMobileMenuButton}
                            title="Navigation Menu"
                        >
                            <MenuIcon htmlColor="var(--white)" />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
