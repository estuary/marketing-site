import Chevron from '@mui/icons-material/ChevronRight';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { default as React } from 'react';
import { OutboundLink } from '../../OutboundLink';
import { CardItem, ContentWrapper, Description, Icon, TextWrapper, Title } from './styles';

const ItemLink = ({ name, description, Image, to }) => {
    const LinkElement: any = to[0] === '/' ? Link : OutboundLink;
    const linkProps = to[0] === '/' ? { to } : { href: to };

    const isCompareCard = to !== '/product';

    return (
        <LinkElement {...linkProps}>
            <CardItem>
                {Image && (
                    <Icon>
                        <Image />
                    </Icon>
                )}
                <ContentWrapper>
                    <TextWrapper>
                        <Title>{name}</Title>
                        {description && (
                            <Description>{description}</Description>
                        )}
                    </TextWrapper>
                    {isCompareCard && <Chevron className='header-chevron-icon' fontSize="small" />}
                </ContentWrapper>
            </CardItem>
        </LinkElement>
    );
};

// Always show the title on desktop
// Hide the title on mobile if onlyContent is true
const HeaderCardItem = ({
    title,
    items = [],
    children,
    onlyContent,
    ...props
}: any) => {
    return (
        <div {...props}>
            <p
                className={clsx({
                    'card-title': true,
                    'hide-on-mobile': onlyContent,
                })}
            >
                {title}
            </p>
            <div className="content">
                {items.map((item, index) => (
                    <ItemLink key={index} {...item} />
                ))}
                {children}
            </div>
        </div>
    );
};

export default HeaderCardItem;
