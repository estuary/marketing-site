import Chevron from '@mui/icons-material/ChevronRight';
import clsx from 'clsx';
import { Link } from 'gatsby';
import * as React from 'react';
import { OutboundLink } from '../../OutboundLink';
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
                            <Description className="hide-on-mobile">
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
            <CardTitle
                className={clsx({
                    'hide-on-mobile': onlyContent,
                })}
            >
                {title}
            </CardTitle>
            <Content>
                {items.map((item, index) => (
                    <ItemLink key={index} {...item} />
                ))}
                {children}
            </Content>
        </div>
    );
};

export default HeaderCardItem;
