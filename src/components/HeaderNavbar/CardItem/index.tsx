import Chevron from '@mui/icons-material/ChevronRight';
import { Link } from 'gatsby';
import * as React from 'react';
import { OutboundLink } from '../../OutboundLink';
import { hideOnMobile, seeAllButton } from '../styles.module.less';
import {
    CardItem,
    CardTitle,
    Content,
    ContentWrapper,
    Description,
    Icon,
    TextWrapper,
    Title,
} from './styles';

const ItemLink = ({ name, description, Image, to, hasChevronIcon }) => {
    const LinkElement: any = to[0] === '/' ? Link : OutboundLink;
    const linkProps = to[0] === '/' ? { to } : { href: to, target: '_blank' };

    return (
        <LinkElement {...linkProps} aria-label={`Read case study for ${name}`}>
            <CardItem>
                {Image ? (
                    <Icon>
                        <Image />
                    </Icon>
                ) : null}
                <ContentWrapper>
                    <TextWrapper>
                        <Title>{name}</Title>
                        {description ? (
                            <Description className={hideOnMobile}>
                                {description}
                            </Description>
                        ) : null}
                    </TextWrapper>
                    {hasChevronIcon ? (
                        <Chevron
                            className="header-chevron-icon"
                            fontSize="small"
                        />
                    ) : null}
                </ContentWrapper>
            </CardItem>
        </LinkElement>
    );
};

const HeaderCardItem = ({
    title,
    items = [],
    children,
    onlyContent,
    active,
    ...props
}: any) => {
    const [showAll, setShowAll] = React.useState(false);

    React.useEffect(() => {
        setShowAll(false);
    }, [active]);

    const handleSeeAllButtonClick = () => {
        setShowAll(!showAll);
    };

    return (
        <div {...props}>
            <CardTitle className={onlyContent ? hideOnMobile : null}>
                {title}
                {items.length > 4 ? (
                    <button
                        className={seeAllButton}
                        onClick={handleSeeAllButtonClick}
                    >
                        See {showAll ? 'less' : 'more'}
                    </button>
                ) : null}
            </CardTitle>
            <Content>
                {items
                    .slice(0, showAll ? items.length : 4)
                    .map((item, index) => (
                        <ItemLink key={index} {...item} />
                    ))}
                {children}
            </Content>
        </div>
    );
};

export default HeaderCardItem;
