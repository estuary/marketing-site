import clsx from 'clsx';
import { Link } from 'gatsby';
import { useEffect, useRef, useState } from 'react';
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
    isOpen,
    globalHeaderLoginTry,
    globalHeaderTryItButton,
    headerSocialIcons,
    globalHeaderMobileMenuWrapper,
    globalHeaderMobileMenuButton,
    headerSocialIcon,
} from './styles.module.less';

/* const useNavItems = () => {
  const queryResults = useStaticQuery(graphql`
    query GetNavData {
      allStrapiProductComparisonPage {
        nodes {
          Slug
          their_name
        }
      }
      allStrapiCaseStudy {
        nodes {
          Slug
          Title
        }
      }
    }
  `);

  return [
    {
      title: 'Product',
      children: [
        isDesktop && {
          title: 'Product Tour',
          path: '/why',
        },
        {
          title: 'About Flow',
          path: '/product',
        },
        {
          title: 'Integrations',
          path: '/integrations',
          children: [
            {
              title: 'Sources',
              path: '/sources',
            },
            {
              title: 'Destinations',
              path: '/destinations',
            },
          ],
        },
      ].filter(Boolean),
    },
    {
      title: 'Pricing',
      path: '/pricing',
    },
    {
      title: 'Connectors',
      path: 'https://estuary.dev/integrations/',
    },
    {
      title: 'Resources',
      children: [
        {
          title: 'Docs',
          path: 'https://docs.estuary.dev',
        },
        {
          title: 'Blog',
          path: '/blog/data-engineering',
        },
        {
          title: 'Success Story',
          children: queryResults.allStrapiCaseStudy.nodes.map((successStory) => ({
            title: successStory.Title,
            path: `/success-stories/${successStory.Slug}`,
          })),
        },
        {
          title: 'Comparisons',
          children: queryResults.allStrapiProductComparisonPage.nodes.map((comparison) => ({
            title: comparison.their_name,
            path: `/${comparison.Slug}`,
          })),
        },
        {
          title: 'Podcasts',
          path: '/podcasts',
        },
        {
          title: 'Contact',
          path: 'contact-us',
        },
      ],
    },
    {
      title: 'Docs',
      path: '/docs',
    },
  ];
}; */

const MenuBarsImage = () => (
    <svg
        width="20"
        height="12"
        viewBox="0 0 20 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z"
            fill="white"
        />
    </svg>
);

type HeaderProps = {
    fixedHeader?: boolean;
};

const Header = ({ fixedHeader }: HeaderProps) => {
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

    return (
        <>
            <HeaderNavBarBackground
                menuOpen={Boolean(mobileMenuOpen || activeMenu)}
            />
            <header
                className={clsx(headerBar, fixedHeader && globalHeaderFixed)}
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
                        <div
                            className={clsx(
                                globalHeaderLinkWrapper,
                                Boolean(mobileMenuOpen || activeMenu) && isOpen
                            )}
                        >
                            <HeaderNavbar
                                activeMenu={activeMenu}
                                setActiveMenu={setActiveMenu}
                            />
                        </div>
                        <div className={headerSocialIcons}>
                            <OutboundLink
                                target="_blank"
                                href={slackUrl}
                                className={headerSocialIcon}
                                aria-label="Slack Invite Link"
                            >
                                <SlackIcon className="socialIcon" />
                            </OutboundLink>
                            <OutboundLink
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
                                target="_blank"
                                className={globalHeaderLink}
                                href={dashboardUrl}
                                style={{ marginRight: '1rem' }}
                            >
                                Log in
                            </OutboundLink>
                            <OutboundLinkFilled
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
                            <MenuBarsImage />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
